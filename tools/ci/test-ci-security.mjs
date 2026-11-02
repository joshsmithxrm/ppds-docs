import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mkdtempSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { parse } from 'yaml';

const root = new URL('../../', import.meta.url);
const files = ['deploy.yml', 'test-deploy.yml', 'audit-capture.yml'];
const load = () => Object.fromEntries(files.map(name => [name, parse(readFileSync(new URL(`.github/workflows/${name}`, root), 'utf8'))]));
const allSteps = job => job.steps ?? [];
const script = job => allSteps(job).map(step => step.run ?? '').join('\n');

export function validate(workflows) {
  for (const [name, workflow] of Object.entries(workflows)) {
    assert.deepEqual(workflow.permissions, {}, `${name}: workflow must grant no default token permissions`);
    for (const [id, job] of Object.entries(workflow.jobs)) {
      const deployment = name === 'deploy.yml' && id === 'deploy';
      assert.deepEqual(job.permissions, deployment ? { pages: 'write', 'id-token': 'write' } : { contents: 'read' }, `${name}/${id}: unexpected permissions`);
      for (const step of allSteps(job)) {
        if (step.uses?.startsWith('actions/checkout@')) assert.equal(step.with?.['persist-credentials'], false);
        if (step.uses?.startsWith('actions/setup-node@')) {
          assert.equal(step.with?.['node-version'], '24');
          assert.equal(step.with?.['check-latest'], true);
        }
      }
      const dependencyJob = allSteps(job).some(step => /npm (ci|install)\b/.test(step.run ?? ''));
      if (dependencyJob) {
        assert.equal(deployment, false);
        assert(!JSON.stringify(job).includes('secrets.'), `${name}/${id}: dependencies must not share a secret-bearing job`);
        assert(allSteps(job).some(step => step.uses?.startsWith('actions/setup-node@')));
        const install = allSteps(job).findIndex(step => step.run === 'npm ci');
        const audit = allSteps(job).findIndex(step => step.run === 'npm audit --include=dev --audit-level=high');
        assert(install >= 0 && audit > install, `${name}/${id}: missing full-graph audit after npm ci`);
        assert(!job['continue-on-error'] && !allSteps(job)[audit]['continue-on-error'] && !allSteps(job)[audit].if, 'Audit cannot be optional or ignored');
        const contracts = allSteps(job).findIndex(step => step.run === 'npm run test:dependency-contracts');
        assert(contracts > audit && !allSteps(job)[contracts]['continue-on-error'] && !allSteps(job)[contracts].if, 'Compatibility contracts must block after the audit');
        const firstBuild = allSteps(job).findIndex(step => /npm run (build|typecheck)|audit-capture\.mjs run/.test(step.run ?? ''));
        assert(firstBuild > audit, 'Audit must gate build/capture');
        assert(!/npm install|--omit|--force|--audit-level=(critical|none)|\|\| true/.test(script(job)), 'Dependency job weakens the audit');
      }
    }
  }
  const deploy = workflows['deploy.yml'];
  assert.equal(deploy.jobs.deploy.needs, 'build');
  assert.deepEqual(deploy.jobs.deploy.steps.map(s => s.uses), ['actions/configure-pages@v4', 'actions/deploy-pages@v4']);
  assert.deepEqual(deploy.on.push.branches, ['main']);
  const capture = workflows['audit-capture.yml'];
  assert.deepEqual(Object.keys(capture.on), ['workflow_dispatch']);
  assert.equal(capture.jobs.record.needs, 'capture');
  assert.equal(capture.jobs.record.if, 'always() && !cancelled()');
  assert(!/npm |npx |audit-capture\.mjs/.test(script(capture.jobs.record)), 'Recording cannot execute captured/dependency code');
  const recordSteps = capture.jobs.record.steps;
  const tokenIndex = recordSteps.findIndex(step => step.uses?.startsWith('actions/create-github-app-token@'));
  assert(recordSteps.findIndex(step => step.id === 'summary') < tokenIndex, 'Validate before minting writer token');
  assert.deepEqual(recordSteps[tokenIndex].with, {
    'app-id': '${{ vars.AUDIT_APP_ID }}', 'private-key': '${{ secrets.AUDIT_APP_PRIVATE_KEY }}',
    owner: 'joshsmithxrm', repositories: 'ppds-v1-audit', 'permission-contents': 'write',
  });
  const body = script(capture.jobs.record);
  assert(!body.includes('${{'), 'Use environment variables, not expression interpolation in shell source');
  for (const expected of ['capture/*', 'git check-ref-format --branch "$BRANCH"', 'test "$BRANCH" != "$DEFAULT_BRANCH"', 'test "$PROTECTED" = false', 'GIT_CONFIG_COUNT=1', 'GIT_CONFIG_VALUE_0=', '--destination audit-repo']) assert(body.includes(expected), `Missing recording boundary: ${expected}`);
  assert(body.includes('^capture/[A-Za-z0-9][A-Za-z0-9._/-]*$'));
  assert(body.includes('urllib.parse.quote(sys.argv[1], safe="")'));
  assert(body.includes('branches/$ENCODED_BRANCH'));
  assert(!/git .*--global|git .*config .*extraheader|git .*push .*--force/.test(body));
  assert.equal(recordSteps.at(-1).if, "needs.capture.result != 'success' || steps.summary.outputs.error != '0'");
}

test('workflow permission boundaries, manual capture isolation, and recording authorization', () => validate(load()));
for (const [name, mutate] of [
  ['build OIDC permission', w => { w['deploy.yml'].jobs.build.permissions['id-token'] = 'write'; }],
  ['retained checkout token', w => { w['test-deploy.yml'].jobs['test-build'].steps[0].with['persist-credentials'] = true; }],
  ['removed audit', w => { w['test-deploy.yml'].jobs['test-build'].steps = w['test-deploy.yml'].jobs['test-build'].steps.filter(s => !s.run?.startsWith('npm audit')); }],
  ['audit failure bypass', w => { w['deploy.yml'].jobs.build.steps.find(s => s.run?.startsWith('npm audit'))['continue-on-error'] = true; }],
  ['omitted dev dependencies', w => { w['deploy.yml'].jobs.build.steps.find(s => s.run?.startsWith('npm audit')).run = 'npm audit --omit=dev --audit-level=high'; }],
  ['old Node runtime', w => { w['audit-capture.yml'].jobs.capture.steps[1].with['node-version'] = '20'; }],
  ['dependency execution beside writer', w => { w['audit-capture.yml'].jobs.record.steps.push({ run: 'npm ci' }); }],
  ['broad App permissions', w => { w['audit-capture.yml'].jobs.record.steps.find(s => s.uses?.startsWith('actions/create-github-app-token@')).with['permission-workflows'] = 'write'; }],
  ['untrusted branch interpolation', w => { w['audit-capture.yml'].jobs.record.steps.find(s => s.id === 'branch').run = 'echo "${{ inputs.branch_name }}"'; }],
]) test(`rejects ${name}`, () => { const workflows = load(); mutate(workflows); assert.throws(() => validate(workflows)); });

test('actual branch step accepts capture refs and rejects injection, traversal, and URL ambiguity', () => {
  const body = load()['audit-capture.yml'].jobs.record.steps.find(s => s.id === 'branch').run;
  const temporary = mkdtempSync(join(tmpdir(), 'docs-ci-branch-'));
  const bash = process.platform === 'win32' ? join(process.env.ProgramFiles, 'Git/bin/bash.exe') : 'bash';
  try {
    for (const [branch, valid] of [
      ['capture/review-20261102', true], ['capture/coordinated/run-1', true],
      ['main', false], ['capture/../main', false], ['capture/a#fragment', false],
      ['capture/a?query', false], ['capture/a\nname=main', false],
      ['capture/a.lock', false], ['capture/"; touch injected; #', false],
    ]) {
      const output = join(temporary, 'output');
      rmSync(output, { force: true });
      const env = { ...process.env, REQUESTED_BRANCH: branch, GITHUB_OUTPUT: output };
      if (process.platform === 'win32') env.PATH = join(process.env.ProgramFiles, 'Git/usr/bin') + ';' + env.PATH;
      const result = spawnSync(bash, ['-e', '-o', 'pipefail', '-c', body], { cwd: temporary, env, encoding: 'utf8', timeout: 10000, stdio: ['ignore', 'pipe', 'pipe'] });
      assert.equal(result.status === 0, valid, `${branch}: ${result.error ?? result.stderr}`);
      if (valid) assert.equal(readFileSync(output, 'utf8').trim(), `name=${branch}`);
      else assert.equal(existsSync(output), false);
      assert.equal(existsSync(join(temporary, 'injected')), false);
    }
  } finally { rmSync(temporary, { recursive: true, force: true }); }
});
