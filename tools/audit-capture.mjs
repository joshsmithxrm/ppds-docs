#!/usr/bin/env node
// audit-capture — manifest-driven capture runner for the ppds-docs surface.
//
// Reads tools/audit-manifests/docs.yaml, drives tools/docs-verify.mjs to
// render each route/component in light + dark themes, writes PNGs +
// meta.json + $AUDIT_OUT/manifest.json conforming to
// ppds-design-system/AUDIT-SCHEMA.md v1.
//
// Subcommands:
//   run docs       capture every entry; write manifest.json last
//   validate docs  parse + shape-check the manifest; no captures
//   list docs      print id + title per entry
//
// See specs/audit-capture.md for the contract this implements.

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { resolve, join, dirname, isAbsolute, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');

const SCHEMA_VERSION = 1;
const RUNNER_VERSION = '1.0.0';

const SURFACES = ['docs'];
const MANIFEST_DIR = join(REPO_ROOT, 'tools', 'audit-manifests');
const DOCS_VERIFY = join(REPO_ROOT, 'tools', 'docs-verify.mjs');

// Docusaurus serves content under baseUrl. The default here matches the
// repo's docusaurus.config.ts (baseUrl: '/ppds-docs/'). Override with DOCS_URL
// for a differently-configured deployment.
const DEFAULT_DOCS_URL = 'http://localhost:3000/ppds-docs';

// ── Pure utilities (exported for testing) ───────────────────────────────

export function parseArgs(argv) {
  if (argv.length === 0) throw new Error('Usage: audit-capture <run|validate|list> <surface>');
  const command = argv[0];
  const valid = ['run', 'validate', 'list'];
  if (!valid.includes(command)) {
    throw new Error(`Unknown command: ${command}. Expected one of: ${valid.join(', ')}`);
  }
  const surface = argv[1];
  if (!surface) throw new Error(`Usage: audit-capture ${command} <surface>`);
  if (!SURFACES.includes(surface)) {
    throw new Error(`Unknown surface: ${surface}. Expected one of: ${SURFACES.join(', ')}`);
  }
  return { command, surface };
}

export function validateEntryId(id) {
  if (typeof id !== 'string' || id.length === 0) throw new Error('Entry id must be a non-empty string');
  if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) {
    throw new Error(`Invalid entry id '${id}': must be kebab-case ASCII (lowercase, digits, hyphens)`);
  }
}

export function validateScreenshotName(name) {
  if (!/^\d{2}-[a-z0-9][a-z0-9-]*$/.test(name)) {
    throw new Error(`Invalid screenshot name '${name}': must match NN-kebab-name pattern (e.g. 01-top)`);
  }
}

export function validateManifest(raw) {
  if (!raw || typeof raw !== 'object') throw new Error('Manifest must be a YAML mapping');
  if (raw.surface !== 'docs') throw new Error(`Manifest surface '${raw.surface}' does not match requested 'docs'`);
  if (!Array.isArray(raw.entries)) throw new Error('Manifest.entries must be an array');

  const ids = new Set();
  for (let i = 0; i < raw.entries.length; i++) {
    const e = raw.entries[i];
    if (!e || typeof e !== 'object') throw new Error(`entries[${i}]: must be a mapping`);
    validateEntryId(e.id);
    if (ids.has(e.id)) throw new Error(`Duplicate entry id: '${e.id}'`);
    ids.add(e.id);

    if (typeof e.title !== 'string' || !e.title) throw new Error(`entries[${i}].title is required`);

    if (!['page', 'component'].includes(e.type)) {
      throw new Error(`entries[${i}].type: must be 'page' or 'component'`);
    }
    if (e.type === 'page') {
      if (typeof e.route !== 'string' || !e.route.startsWith('/')) {
        throw new Error(`entries[${i}] ('${e.id}'): page entry must declare 'route' starting with '/'`);
      }
    } else {
      if (typeof e.selector !== 'string' || !e.selector) {
        throw new Error(`entries[${i}] ('${e.id}'): component entry must declare non-empty 'selector'`);
      }
      // Optional: component may declare a route to navigate to before shooting.
      if (e.route !== undefined && (typeof e.route !== 'string' || !e.route.startsWith('/'))) {
        throw new Error(`entries[${i}] ('${e.id}'): component 'route' must be a string starting with '/'`);
      }
    }

    if (e.requires !== undefined && !['dev-server', 'none'].includes(e.requires)) {
      throw new Error(`entries[${i}].requires: must be 'dev-server' or 'none'`);
    }

    if (!Array.isArray(e.steps) || e.steps.length === 0) {
      throw new Error(`entries[${i}] ('${e.id}').steps: must be a non-empty array`);
    }

    const shotNames = new Set();
    for (let j = 0; j < e.steps.length; j++) {
      const step = e.steps[j];
      if (!step || typeof step !== 'object' || typeof step.screenshot !== 'string') {
        throw new Error(`entries[${i}].steps[${j}]: only { screenshot: "NN-name" } steps are supported`);
      }
      validateScreenshotName(step.screenshot);
      if (shotNames.has(step.screenshot)) {
        throw new Error(`Duplicate screenshot name '${step.screenshot}' in entry '${e.id}'`);
      }
      shotNames.add(step.screenshot);
    }

    if (e.masks) validateMasks(e.masks, `entries[${i}].masks`);
  }
  return raw;
}

function validateMasks(masks, path) {
  if (!Array.isArray(masks)) throw new Error(`${path}: must be an array`);
  for (let i = 0; i < masks.length; i++) {
    const m = masks[i];
    if (!m || typeof m !== 'object') throw new Error(`${path}[${i}]: must be a mapping`);
    if (typeof m.reason !== 'string' || !m.reason) throw new Error(`${path}[${i}].reason: required`);
    for (const f of ['x', 'y', 'width', 'height']) {
      if (!Number.isInteger(m[f]) || m[f] < 0) {
        throw new Error(`${path}[${i}].${f}: non-negative integer required`);
      }
    }
  }
}

export function validateAuditOut(auditOut, repoRoot) {
  if (!auditOut) throw new Error('AUDIT_OUT env var is required');
  if (!isAbsolute(auditOut)) throw new Error(`AUDIT_OUT must be absolute: ${auditOut}`);
  const rel = relative(repoRoot, auditOut);
  if (!rel.startsWith('..')) {
    throw new Error(`AUDIT_OUT must be outside the repo working tree: ${auditOut}`);
  }
}

export function sourceInfo() {
  const env = process.env;
  const repo = env.AUDIT_SOURCE_REPO || detectRepoFromRemote();
  const ref = env.AUDIT_SOURCE_REF || detectRef();
  const commit = env.AUDIT_SOURCE_COMMIT || detectCommit();
  return { repo, ref, commit, runner: `audit-capture@${RUNNER_VERSION}` };
}

function gitSync(...args) {
  const res = spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (res.status !== 0) return '';
  return (res.stdout || '').trim();
}

function detectRepoFromRemote() {
  const url = gitSync('config', '--get', 'remote.origin.url');
  if (!url) return 'unknown/unknown';
  const m = url.replace(/\/$/, '').match(/[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
  return m ? `${m[1]}/${m[2]}` : url;
}

function detectRef() { return gitSync('symbolic-ref', 'HEAD') || 'refs/heads/HEAD'; }
function detectCommit() { return gitSync('rev-parse', 'HEAD'); }

// ── Manifest loader ─────────────────────────────────────────────────────

function loadManifest(surface) {
  const path = join(MANIFEST_DIR, `${surface}.yaml`);
  if (!existsSync(path)) throw new Error(`Manifest not found: ${path}`);
  const text = readFileSync(path, 'utf8');

  // Lazy-import YAML so `validate` doesn't require the runner-only deps.
  let yaml;
  try {
    yaml = requireYaml();
  } catch (err) {
    throw new Error(`YAML module missing: ${err.message}. Run \`npm install\`.`);
  }

  let raw;
  try { raw = yaml.parse(text); }
  catch (err) { throw new Error(`Manifest parse error (${path}): ${err.message}`); }

  return validateManifest(raw);
}

function requireYaml() {
  // Dynamic import wrapper. Throws if 'yaml' dev dep not installed.
  const req = createRequire(import.meta.url);
  return req('yaml');
}

// ── docs-verify shelling ────────────────────────────────────────────────

function runVerify(args, opts = {}) {
  const res = spawnSync(process.execPath, [DOCS_VERIFY, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    timeout: opts.timeout || 120000,
    env: process.env,
  });
  return { status: res.status, stdout: res.stdout || '', stderr: res.stderr || '' };
}

// ── runDocs ─────────────────────────────────────────────────────────────

async function runDocs(manifest, auditOut, cfg) {
  const surfaceDir = join(auditOut, 'docs');
  mkdirSync(surfaceDir, { recursive: true });

  // Clean prior captures for this surface.
  for (const child of existsSync(surfaceDir) ? readdirSync(surfaceDir) : []) {
    rmSync(join(surfaceDir, child), { recursive: true, force: true });
  }

  // Ensure fresh daemon.
  runVerify(['close']);
  const launchArgs = ['launch', cfg.mode === 'production' ? '--production' : '--dev'];
  const launch = runVerify(launchArgs, { timeout: 120000 });
  if (launch.status !== 0) {
    throw new Error(`docs-verify launch failed: ${launch.stderr}`);
  }

  const entries = [];
  let exitCode = 0;

  for (const entry of manifest.entries) {
    const entryDir = join(surfaceDir, entry.id);
    const skipForRequires = entry.requires === 'dev-server' && cfg.mode !== 'dev';
    if (skipForRequires) {
      entries.push({
        id: entry.id,
        title: entry.title,
        state: 'skipped',
        screenshots: [],
        skipReason: `requires: dev-server (DOCS_MODE=${cfg.mode})`,
      });
      continue;
    }

    try {
      mkdirSync(entryDir, { recursive: true });
      const result = await runDocsEntry(entry, entryDir, cfg);
      entries.push(result);
    } catch (err) {
      exitCode = 1;
      entries.push({
        id: entry.id,
        title: entry.title,
        state: 'error',
        screenshots: [],
        error: err.message,
        stderr: (err.stderr || '').slice(0, 4096),
      });
    }
  }

  runVerify(['close']);
  return { entries, exitCode };
}

async function runDocsEntry(entry, entryDir, cfg) {
  const stepsLog = [];
  const screenshots = [];

  for (const step of entry.steps) {
    if (step.screenshot === undefined) continue;

    const stemPath = join(entryDir, step.screenshot);
    const args = entry.type === 'page'
      ? ['capture', entry.route, stemPath]
      : entry.route
        ? ['component', entry.selector, stemPath, entry.route]
        : ['component', entry.selector, stemPath];

    const res = runVerify(args, { timeout: 90000 });
    if (res.status !== 0) {
      const err = new Error(`${entry.type} ${step.screenshot} failed: ${res.stderr.trim() || '(no stderr)'}`);
      err.stderr = res.stderr;
      throw err;
    }

    const lightPath = `${stemPath}.light.png`;
    const darkPath = `${stemPath}.dark.png`;

    if (entry.masks && entry.masks.length > 0) {
      await applyMasks(lightPath, entry.masks);
      await applyMasks(darkPath, entry.masks);
    }

    const { PNG } = await import('pngjs');
    const lightDims = readDims(PNG, lightPath);
    const darkDims = readDims(PNG, darkPath);

    for (const [theme, outPath, dims] of [
      ['light', lightPath, lightDims],
      ['dark', darkPath, darkDims],
    ]) {
      screenshots.push({
        name: step.screenshot,
        path: `docs/${entry.id}/${step.screenshot}.${theme}.png`,
        dimensions: dims,
        dpr: 2.0,
        theme,
      });
    }
    stepsLog.push({ screenshot: step.screenshot });
  }

  const url = resolveUrlFor(entry, cfg);
  const meta = {
    id: entry.id,
    surface: 'docs',
    title: entry.title,
    capturedAt: new Date().toISOString(),
    steps: stepsLog,
    masks: entry.masks || [],
    surfaceSpecific: {
      url,
      mode: cfg.mode,
      viewport: { width: 1440, height: 900 },
      themes: ['light', 'dark'],
    },
  };
  writeFileSync(join(entryDir, 'meta.json'), JSON.stringify(meta, null, 2));

  return {
    id: entry.id,
    title: entry.title,
    state: 'ok',
    screenshots,
    metaPath: `docs/${entry.id}/meta.json`,
  };
}

function resolveUrlFor(entry, cfg) {
  const base = (cfg.docsUrl || DEFAULT_DOCS_URL).replace(/\/$/, '');
  if (entry.type === 'page') return base + entry.route;
  return base + '/'; // components are captured on site root by default
}

function readDims(PNG, file) {
  const buf = readFileSync(file);
  const png = PNG.sync.read(buf);
  return { width: png.width, height: png.height };
}

async function applyMasks(pngPath, masks) {
  const { PNG } = await import('pngjs');
  const png = PNG.sync.read(readFileSync(pngPath));
  for (const m of masks) {
    fillRect(png, m.x, m.y, m.width, m.height, [0x1e, 0x1e, 0x1e, 0xff]);
  }
  writeFileSync(pngPath, PNG.sync.write(png));
}

function fillRect(png, x, y, w, h, [r, g, b, a]) {
  for (let yy = y; yy < y + h && yy < png.height; yy++) {
    for (let xx = x; xx < x + w && xx < png.width; xx++) {
      const idx = (png.width * yy + xx) << 2;
      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;
      png.data[idx + 3] = a;
    }
  }
}

// ── Validate (dry-run) ──────────────────────────────────────────────────

async function validateSurface(surface) {
  const manifest = loadManifest(surface);
  console.log(`Manifest parsed: ${manifest.entries.length} entries`);
  for (const e of manifest.entries) {
    const tag = e.requires === 'dev-server' ? '  [requires dev-server]' : '';
    const target = e.type === 'page' ? e.route : e.selector;
    console.log(`  ${e.id} (${e.type}: ${target}) — ${e.title}${tag}`);
  }
  console.log('OK');
}

async function listSurface(surface) {
  const manifest = loadManifest(surface);
  for (const e of manifest.entries) {
    console.log(`${e.id}\t${e.title}`);
  }
}

// ── Run orchestration ──────────────────────────────────────────────────

async function doRun(surface) {
  const auditOut = process.env.AUDIT_OUT;
  validateAuditOut(auditOut, REPO_ROOT);
  mkdirSync(auditOut, { recursive: true });

  const docsUrl = process.env.DOCS_URL || DEFAULT_DOCS_URL;
  const mode = process.env.DOCS_MODE
    ? process.env.DOCS_MODE
    : (/^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::|\/|$)/.test(docsUrl) ? 'dev' : 'production');
  if (!['dev', 'production'].includes(mode)) {
    throw new Error(`DOCS_MODE must be 'dev' or 'production', got '${mode}'`);
  }

  const cfg = { docsUrl, mode };

  const manifest = loadManifest(surface);
  console.error(`[${surface}] capturing ${manifest.entries.length} entries... (mode=${mode}, url=${docsUrl})`);
  const res = await runDocs(manifest, auditOut, cfg);

  // Write unified manifest LAST, after all entry dirs are flushed.
  const summary = { total: 0, ok: 0, error: 0, skipped: 0 };
  const surfaces = { [surface]: { entries: res.entries } };
  for (const e of res.entries) {
    summary.total++;
    summary[e.state]++;
  }

  const manifestObj = {
    schemaVersion: SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    source: sourceInfo(),
    surfaces,
    summary,
  };
  writeFileSync(join(auditOut, 'manifest.json'), JSON.stringify(manifestObj, null, 2));
  console.error(`[done] ${summary.ok} ok, ${summary.error} error, ${summary.skipped} skipped -> ${auditOut}`);

  let overallExit = res.exitCode;
  if (summary.error > 0) overallExit = 1;
  return overallExit;
}

// ── Main dispatch ──────────────────────────────────────────────────────

async function main() {
  const parsed = parseArgs(process.argv.slice(2));
  switch (parsed.command) {
    case 'validate':
      await validateSurface(parsed.surface);
      break;
    case 'list':
      await listSurface(parsed.surface);
      break;
    case 'run': {
      const code = await doRun(parsed.surface);
      process.exit(code);
    }
  }
}

if (process.argv[1] && resolve(process.argv[1]).toLowerCase() === __filename.toLowerCase()) {
  main().catch((err) => {
    process.stderr.write(err.message + '\n');
    process.exit(1);
  });
}
