#!/usr/bin/env node
// docs-verify — Playwright Chromium harness for Docusaurus capture.
//
// Subcommands:
//   launch [--dev|--production]   start Chromium + optional docusaurus dev server
//   close                         shut everything down
//   capture <route> <stem>        full-page PNG of route, in both themes
//   component <selector> <stem>   tight-crop PNG of element, in both themes
//
// Screenshot output files:
//   <stem>.light.png
//   <stem>.dark.png
//
// See specs/audit-capture.md for the contract this implements.

import { readFileSync, writeFileSync, existsSync, rmSync, mkdirSync, appendFileSync } from 'node:fs';
import { resolve, dirname, isAbsolute, join } from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';
import { connect as netConnect } from 'node:net';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');

const SESSION_FILE = resolve(__dirname, '.docs-verify-session.json');
const LOG_FILE = resolve(__dirname, '.docs-verify-daemon.log');

export const VIEWPORT = { width: 1440, height: 900 };
export const DPR = 2.0;

const VALID_COMMANDS = ['launch', 'close', 'capture', 'component', '__daemon'];

// ── Pure argument parsing (exported for tests) ──────────────────────────

export function parseArgs(argv) {
  if (!argv.length) throw new Error('Usage: docs-verify <launch|close|capture|component> [args...]');
  const command = argv[0];
  if (!VALID_COMMANDS.includes(command)) throw new Error(`Unknown command: ${command}`);

  if (command === 'launch') {
    let mode = 'dev';
    for (const arg of argv.slice(1)) {
      if (arg === '--dev') mode = 'dev';
      else if (arg === '--production') mode = 'production';
      else throw new Error(`Unknown launch flag: ${arg}`);
    }
    return { command, mode };
  }

  if (command === 'close') return { command };

  if (command === 'capture') {
    const route = argv[1];
    const stem = argv[2];
    if (!route) throw new Error('Usage: capture <route> <outfile-stem>');
    if (!stem) throw new Error('Usage: capture <route> <outfile-stem>');
    if (!route.startsWith('/')) throw new Error(`route must start with /: ${route}`);
    return { command, route, stem };
  }

  if (command === 'component') {
    const selector = argv[1];
    const stem = argv[2];
    const route = argv[3]; // optional: where the component lives
    if (!selector) throw new Error('Usage: component <selector> <outfile-stem> [route]');
    if (!stem) throw new Error('Usage: component <selector> <outfile-stem> [route]');
    if (route !== undefined && !route.startsWith('/')) {
      throw new Error(`component route must start with /: ${route}`);
    }
    return { command, selector, stem, route };
  }

  if (command === '__daemon') {
    const port = parseInt(argv[1], 10);
    const mode = argv[2] || 'dev';
    const devPid = argv[3] ? parseInt(argv[3], 10) : 0;
    if (!port) throw new Error('Internal: __daemon requires port');
    return { command, port, mode, devPid };
  }

  return { command };
}

// ── Logging ─────────────────────────────────────────────────────────────

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  try { appendFileSync(LOG_FILE, line); } catch {}
}

// ── Session I/O ─────────────────────────────────────────────────────────

function readSession() {
  if (!existsSync(SESSION_FILE)) throw new Error('No session found. Run `docs-verify launch` first.');
  return JSON.parse(readFileSync(SESSION_FILE, 'utf8'));
}

function writeSession(data) {
  writeFileSync(SESSION_FILE, JSON.stringify(data, null, 2));
}

function clearSession() {
  if (existsSync(SESSION_FILE)) rmSync(SESSION_FILE, { force: true });
}

// ── RPC to daemon ───────────────────────────────────────────────────────

async function rpc(port, payload) {
  const res = await fetch(`http://127.0.0.1:${port}/rpc`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const body = await res.text();
  let parsed;
  try { parsed = JSON.parse(body); } catch { parsed = { ok: false, error: body }; }
  if (!res.ok || parsed.ok === false) {
    throw new Error(parsed.error || `RPC failed (${res.status})`);
  }
  return parsed;
}

// ── Port helpers ────────────────────────────────────────────────────────

function waitForPort(host, port, timeoutMs) {
  return new Promise((resolveP, rejectP) => {
    const deadline = Date.now() + timeoutMs;
    const tryOnce = () => {
      const sock = netConnect({ host, port }, () => {
        sock.end();
        resolveP();
      });
      sock.on('error', () => {
        sock.destroy();
        if (Date.now() >= deadline) {
          rejectP(new Error(`timed out waiting for ${host}:${port} after ${timeoutMs} ms`));
        } else {
          setTimeout(tryOnce, 500);
        }
      });
    };
    tryOnce();
  });
}

async function findFreePort() {
  return new Promise((resolveP, rejectP) => {
    const srv = createServer();
    srv.once('error', rejectP);
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      srv.close(() => resolveP(port));
    });
  });
}

// ── launch ──────────────────────────────────────────────────────────────

async function cmdLaunch(opts) {
  // Refuse if another session is active.
  if (existsSync(SESSION_FILE)) {
    try {
      const s = readSession();
      await rpc(s.port, { op: 'ping' });
      process.stderr.write('Session already running; close it first with `docs-verify close`\n');
      process.exit(1);
    } catch {
      // stale session file; ignore and proceed
      clearSession();
    }
  }

  const mode = opts.mode;
  let devPid = 0;

  if (mode === 'dev') {
    process.stderr.write('[docs-verify] starting npm run start...\n');
    // Docusaurus dev server. On Windows, npm is a .cmd shim and must run
    // through the shell; on POSIX, npm is a direct binary.
    const isWin = process.platform === 'win32';
    const child = spawn(
      isWin ? 'npm.cmd' : 'npm',
      ['run', 'start', '--', '--no-open'],
      {
        cwd: REPO_ROOT,
        detached: true,
        stdio: ['ignore', 'ignore', 'ignore'],
        windowsHide: true,
        shell: isWin,
      },
    );
    child.unref();
    devPid = child.pid || 0;

    const devUrl = new URL(process.env.DOCS_URL || 'http://localhost:3000/ppds-docs');
    const devPort = parseInt(devUrl.port, 10) || (devUrl.protocol === 'https:' ? 443 : 80);
    try {
      await waitForPort(devUrl.hostname, devPort, 90000);
    } catch (err) {
      if (devPid) { try { process.kill(devPid); } catch {} }
      throw new Error(`dev server did not become ready within 90s on ${devUrl.hostname}:${devPort}: ${err.message}`);
    }
    process.stderr.write(`[docs-verify] dev server ready at ${devUrl.origin}\n`);
  }

  // Spawn daemon child process that owns Chromium + an HTTP RPC port.
  const port = await findFreePort();

  const daemonChild = spawn(process.execPath, [
    __filename,
    '__daemon',
    String(port),
    mode,
    String(devPid),
  ], {
    cwd: __dirname,
    detached: true,
    stdio: ['ignore', 'ignore', 'ignore'],
    windowsHide: true,
  });
  daemonChild.unref();

  // Wait for daemon readiness.
  await waitForPort('127.0.0.1', port, 30000);

  writeSession({ port, mode, devPid, pid: daemonChild.pid || 0 });
  process.stderr.write(`[docs-verify] daemon ready on port ${port} (mode=${mode})\n`);
}

// ── close ──────────────────────────────────────────────────────────────

async function cmdClose() {
  if (!existsSync(SESSION_FILE)) return;
  const s = readSession();
  try {
    await rpc(s.port, { op: 'close' });
  } catch (err) {
    log(`close rpc failed: ${err.message}`);
  }
  // Best-effort kill of daemon + dev server in case they're still around.
  if (s.pid) killTree(s.pid);
  if (s.devPid) killTree(s.devPid);
  clearSession();
}

function killTree(pid) {
  try {
    if (process.platform === 'win32') {
      // /T = terminate child processes, /F = force
      spawnSync('taskkill', ['/PID', String(pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      try { process.kill(-pid); } catch { process.kill(pid); }
    }
  } catch {}
}

// ── capture / component ─────────────────────────────────────────────────

async function cmdCapture(opts) {
  const s = readSession();
  const res = await rpc(s.port, {
    op: 'capture',
    route: opts.route,
    stem: opts.stem,
  });
  process.stderr.write(`[docs-verify] captured ${res.light} + ${res.dark}\n`);
}

async function cmdComponent(opts) {
  const s = readSession();
  const res = await rpc(s.port, {
    op: 'component',
    selector: opts.selector,
    stem: opts.stem,
    route: opts.route,
  });
  process.stderr.write(`[docs-verify] captured ${res.light} + ${res.dark}\n`);
}

// ── daemon ──────────────────────────────────────────────────────────────

function killDevTree(pid) {
  try {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/PID', String(pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      try { process.kill(-pid); } catch { process.kill(pid); }
    }
  } catch {}
}

async function runDaemon(opts) {
  // This runs in the detached child process.
  let chromium, browser, context, page;
  try {
    ({ chromium } = await import('@playwright/test'));
  } catch (err) {
    log(`@playwright/test import failed: ${err.message}`);
    process.exit(1);
  }

  const docsUrl = process.env.DOCS_URL || 'http://localhost:3000/ppds-docs';

  browser = await chromium.launch({ headless: true });
  context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: DPR,
  });
  page = await context.newPage();

  // Pre-install localStorage before navigation so Docusaurus picks it up on init.
  const installThemeInit = async (theme) => {
    await context.addInitScript(([t]) => {
      try { window.localStorage.setItem('theme', t); } catch {}
    }, [theme]);
  };

  const gotoWithTheme = async (url, theme) => {
    // Set localStorage init script for the next navigation.
    await installThemeInit(theme);
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    // Ensure the <html data-theme> attribute matches.
    await page.evaluate(([t]) => {
      document.documentElement.setAttribute('data-theme', t);
      try { window.localStorage.setItem('theme', t); } catch {}
    }, [theme]);
    // Settle: let Docusaurus finish any theme-dependent layout.
    await page.waitForTimeout(250);
  };

  const srv = createServer(async (req, res) => {
    if (req.method !== 'POST') {
      res.writeHead(405); res.end(); return;
    }
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', async () => {
      let parsed;
      try { parsed = JSON.parse(body); } catch {
        res.writeHead(400, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'bad JSON' }));
        return;
      }
      try {
        const result = await handleOp(parsed, { page, gotoWithTheme, docsUrl });
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ ok: true, ...result }));
        if (parsed.op === 'close') {
          // Tear down everything, then exit.
          try { await context.close(); } catch {}
          try { await browser.close(); } catch {}
          if (opts.devPid) killDevTree(opts.devPid);
          setTimeout(() => process.exit(0), 50);
        }
      } catch (err) {
        log(`op ${parsed.op} failed: ${err.stack || err.message}`);
        res.writeHead(500, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
  });

  srv.listen(opts.port, '127.0.0.1', () => {
    log(`daemon listening on ${opts.port} (mode=${opts.mode})`);
  });
}

async function handleOp(msg, { page, gotoWithTheme, docsUrl }) {
  switch (msg.op) {
    case 'ping':
      return {};

    case 'close':
      return {};

    case 'capture': {
      const url = docsUrl.replace(/\/$/, '') + msg.route;
      const lightPath = `${msg.stem}.light.png`;
      const darkPath = `${msg.stem}.dark.png`;
      ensureDirFor(lightPath);
      // Light first.
      await gotoWithTheme(url, 'light');
      await page.screenshot({ path: lightPath, fullPage: true });
      // Dark.
      await gotoWithTheme(url, 'dark');
      await page.screenshot({ path: darkPath, fullPage: true });
      return { light: lightPath, dark: darkPath };
    }

    case 'component': {
      // Navigate to the entry's route (if provided), else site root, then
      // shoot the matching element in each theme.
      const route = msg.route || '/';
      const url = docsUrl.replace(/\/$/, '') + route;
      const lightPath = `${msg.stem}.light.png`;
      const darkPath = `${msg.stem}.dark.png`;
      ensureDirFor(lightPath);
      for (const [theme, outPath] of [['light', lightPath], ['dark', darkPath]]) {
        await gotoWithTheme(url, theme);
        const el = await page.$(msg.selector);
        if (!el) throw new Error(`selector not found: ${msg.selector}`);
        await el.scrollIntoViewIfNeeded();
        await el.screenshot({ path: outPath });
      }
      return { light: lightPath, dark: darkPath };
    }

    default:
      throw new Error(`unknown op: ${msg.op}`);
  }
}

function ensureDirFor(filePath) {
  const d = dirname(filePath);
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
}

// ── Main dispatch ──────────────────────────────────────────────────────

async function main() {
  const parsed = parseArgs(process.argv.slice(2));

  switch (parsed.command) {
    case 'launch': await cmdLaunch(parsed); break;
    case 'close': await cmdClose(); break;
    case 'capture': await cmdCapture(parsed); break;
    case 'component': await cmdComponent(parsed); break;
    case '__daemon': await runDaemon(parsed); break;
  }
}

// Only run main when invoked directly.
if (process.argv[1] && resolve(process.argv[1]).toLowerCase() === __filename.toLowerCase()) {
  main().catch((err) => {
    process.stderr.write(`docs-verify: ${err.message}\n`);
    process.exit(1);
  });
}
