---
name: docs-verify
description: Playwright Chromium harness for capturing Docusaurus pages and components in light + dark themes. Use directly when iterating on a single page, or via audit-capture for a full manifest-driven run.
allowed-tools: Bash(node tools/docs-verify*), Bash(node tools/docs-verify.mjs *)
---

# Docs Verify Tool

Playwright-driven PNG capture of the ppds-docs Docusaurus site. Launches a persistent Chromium + page, optionally starts `npm run start` in the background, captures a route or component in both themes, then closes cleanly.

Text-based verification isn't the goal here — this tool produces **PNGs** for a design audit. If you want to assert on page content, use Playwright's test runner directly.

## When to Use

- Iterating on a single page's light/dark theming — rapid capture + eyeball
- Debugging why an `audit-capture` entry produces an unexpected PNG
- Verifying a new page shows up correctly before adding it to the manifest
- **NOT** for visual regression — this is audit input, not a diff tool

## Setup

The tool lives at `tools/docs-verify.mjs`. Requires:

- `@playwright/test` (dev dep — brings Chromium)
- `npx playwright install chromium` once, if Chromium hasn't been downloaded yet

No build step. The tool runs as a detached daemon (Chromium + a small HTTP RPC server on a random localhost port). Subsequent commands talk to the daemon via that port, which keeps Chromium warm.

## First Steps

```bash
# 1. Launch Chromium + optional dev server (mode=dev starts npm run start)
node tools/docs-verify.mjs launch --dev
# or against the live site:
DOCS_URL=https://joshsmithxrm.github.io/ppds-docs \
  node tools/docs-verify.mjs launch --production

# 2. Capture a page — writes 01-top.light.png and 01-top.dark.png to /tmp
node tools/docs-verify.mjs capture /docs/getting-started/installation /tmp/01-top

# 3. Capture a component
node tools/docs-verify.mjs component "nav.navbar" /tmp/01-navbar

# 4. Close when done (kills Chromium + dev server if launch started one)
node tools/docs-verify.mjs close
```

## Commands

| Command | Example | Purpose |
|---------|---------|---------|
| `launch [--dev\|--production]` | `launch --dev` | Start Chromium daemon. `--dev` also starts `npm run start` and waits for port 3000. |
| `close` | `close` | Shut down daemon and any dev server it started. Idempotent. |
| `capture <route> <stem>` | `capture /docs/guides/authentication /tmp/auth` | Full-page PNG of `DOCS_URL + route`, both themes. |
| `component <selector> <stem>` | `component ".heroBanner" /tmp/hero` | Tight-cropped PNG of the first matching element, both themes. |

Output files are always `<stem>.light.png` and `<stem>.dark.png`.

## Environment

| Var | Purpose |
|---|---|
| `DOCS_URL` | Base URL. Defaults to `http://localhost:3000` in dev. Override for production. |

## Theme Toggle

Docusaurus reads theme state from `localStorage.theme` on page init and sets `<html data-theme>` accordingly. This tool:

1. Installs `localStorage.theme = 'light'` (or `'dark'`) via Playwright's `addInitScript` before navigation.
2. Navigates to the URL.
3. Explicitly sets `document.documentElement.setAttribute('data-theme', ...)` as a belt-and-braces step.
4. Waits 250 ms for Docusaurus to finish any theme-dependent layout.
5. Shoots the PNG.

If you see a flash of the wrong theme in the capture, you've probably stumbled into a Docusaurus internals change — investigate first, patch second.

## Viewport

Fixed at 1440 x 900, DPR 2.0, headless. Captures are `fullPage: true` for `capture`, element-tight for `component`.

## Typical flow

1. `node tools/docs-verify.mjs launch --dev` — one shot.
2. Capture as many pages / components as you want — no relaunch between them.
3. `node tools/docs-verify.mjs close` — always.

## Error Recovery

### `launch` fails or times out

```bash
# Check the daemon log
cat tools/.docs-verify-daemon.log

# Common causes:
# - @playwright/test missing: run `npm install`
# - Chromium missing: run `npx playwright install chromium`
# - Port 3000 busy: kill the existing dev server, retry
# - `npm run start` broke: fix Docusaurus compile errors first

# Clean up and retry
node tools/docs-verify.mjs close
node tools/docs-verify.mjs launch --dev
```

### `capture` fails with "selector not found" (component mode)

1. Open the page in a real browser and inspect the DOM. The selector may be wrong.
2. Some Docusaurus components have generated class names — prefer stable selectors (`header.hero`, `nav.navbar`, `footer.footer`).
3. If the component lives on a non-root page, this tool's `component` subcommand navigates to `/` before shooting. Use `capture` + a tight-crop manifest mask instead, or extend the tool to accept a `route` alongside a `selector`.

## Gap Protocol

If an interaction this tool doesn't support is needed (click, type, login, scroll-to-specific-anchor):

1. **STOP** — do not add sleeps or ad-hoc hacks inline.
2. **Describe the gap** — what page state you need before capture.
3. **Propose an enhancement** — a new subcommand or flag (e.g. `capture <route> <stem> --click '#button'`).
4. **Ask the user** — implement now or defer.

## Related

- [@audit-capture](../audit-capture/SKILL.md) — the manifest-driven wrapper that drives this tool
- [specs/audit-capture.md](../../../specs/audit-capture.md) — the full contract
