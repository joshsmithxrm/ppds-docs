import assert from 'node:assert/strict';
import {mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {pathToFileURL} from 'node:url';

const require = createRequire(import.meta.url);

// Resolve through the actual consumer so a nested old version cannot pass unnoticed.
test('Docusaurus SSG worker options, context, queued tasks and shutdown work with Tinypool', {timeout: 30_000}, async () => {
  const coreRequire = createRequire(require.resolve('@docusaurus/core/package.json'));
  const {default: Tinypool} = await import(pathToFileURL(coreRequire.resolve('tinypool')).href);
  const directory = await mkdtemp(path.join(tmpdir(), 'ppds-tinypool-'));
  let pool;
  try {
    const filename = path.join(directory, 'worker.cjs');
    await writeFile(filename, `
      const {workerData} = require('node:worker_threads');
      module.exports = task => ({
        workerId: process.__tinypool_state__?.workerId,
        params: workerData?.[1]?.params,
        id: task.id,
        pathnames: task.pathnames,
      });
    `);
    // These options and worker-side context reads match core/lib/ssg/ssgExecutor.js
    // and ssgWorkerThread.js. Production's ssgWorkerThreads flag stays disabled.
    pool = new Tinypool({
      filename: pathToFileURL(filename).pathname,
      minThreads: 2,
      maxThreads: 2,
      concurrentTasksPerWorker: 1,
      runtime: 'worker_threads',
      isolateWorkers: false,
      workerData: {params: {baseUrl: '/ppds-docs/'}},
      maxMemoryLimitBeforeRecycle: 1_000_000_000,
      resourceLimits: {},
    });
    const tasks = Array.from({length: 5}, (_, index) => ({id: index + 1, pathnames: [`/docs/${index}`]}));
    const results = await Promise.all(tasks.map(task => pool.run(task)));
    for (const [index, result] of results.entries()) {
      assert.ok(result.workerId > 0);
      assert.deepEqual(result.params, {baseUrl: '/ppds-docs/'});
      assert.equal(result.id, tasks[index].id);
      assert.deepEqual(result.pathnames, tasks[index].pathnames);
    }
  } finally {
    await pool?.destroy();
    await rm(directory, {recursive: true, force: true});
  }
});

test('webpack copy cache and parallel CSS minimization serialize real plugin options', {timeout: 60_000}, async () => {
  const webpack = require('webpack');
  const CopyPlugin = require('copy-webpack-plugin');
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
  const directory = await mkdtemp(path.join(tmpdir(), 'ppds-webpack-'));
  let compiler;
  try {
    await writeFile(path.join(directory, 'entry.js'), '');
    await writeFile(path.join(directory, 'copy.txt'), 'bounded copy transform');
    compiler = webpack({
      mode: 'production',
      context: directory,
      entry: './entry.js',
      output: {path: path.join(directory, 'output'), filename: 'main.js'},
      cache: {type: 'memory'},
      plugins: [
        new CopyPlugin({patterns: [{
          from: 'copy.txt',
          to: 'copy.txt',
          transform: {transformer: content => content.toString().toUpperCase(), cache: true},
        }]}),
        {apply(compilationCompiler) {
          compilationCompiler.hooks.thisCompilation.tap('FixtureCss', compilation => {
            compilation.hooks.processAssets.tap({
              name: 'FixtureCss', stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
            }, () => compilation.emitAsset('fixture.css', new webpack.sources.RawSource('/* remove me */ .fixture { color: #ff0000; }')));
          });
        }},
      ],
      optimization: {minimizer: [new CssMinimizerPlugin({parallel: 1})]},
    });
    // The second compilation also exercises the transformed asset's cache key.
    for (let iteration = 0; iteration < 2; iteration++) {
      const stats = await new Promise((resolve, reject) => compiler.run((error, result) => error ? reject(error) : resolve(result)));
      assert.equal(stats.hasErrors(), false, stats.toString({all: false, errors: true}));
      assert.equal(await readFile(path.join(directory, 'output/copy.txt'), 'utf8'), 'BOUNDED COPY TRANSFORM');
      assert.equal(await readFile(path.join(directory, 'output/fixture.css'), 'utf8'), '.fixture{color:red}');
    }
  } finally {
    if (compiler) await new Promise((resolve, reject) => compiler.close(error => error ? reject(error) : resolve()));
    await rm(directory, {recursive: true, force: true});
  }
});

test('SockJS creates distinct v4 connection IDs through its CommonJS uuid dependency', () => {
  const {SockJSConnection} = require('sockjs/lib/transport');
  const sockjsRequire = createRequire(require.resolve('sockjs'));
  const {validate, version} = sockjsRequire('uuid');
  const first = new SockJSConnection({prefix: '/fixture'});
  const second = new SockJSConnection({prefix: '/fixture'});
  assert.ok(validate(first.id));
  assert.ok(validate(second.id));
  assert.equal(version(first.id), 4);
  assert.equal(version(second.id), 4);
  assert.notEqual(first.id, second.id);
  assert.equal(first.prefix, '/fixture');
});
