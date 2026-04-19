# Audit Capture (docs surface)

**Status:** Draft
**Last Updated:** 2026-04-18
**Code:** [tools/audit-capture.mjs](../tools/audit-capture.mjs) | [tools/docs-verify.mjs](../tools/docs-verify.mjs) | [.claude/skills/audit-capture/](../.claude/skills/audit-capture/) | [tools/audit-manifests/](../tools/audit-manifests/)
**Surfaces:** Docs

---

## Overview

Manifest-driven PNG capture pipeline for the `docs` surface (Docusaurus site). Produces full-page and component screenshots in both **light** and **dark** themes, written to a contract-conforming directory tree that design-audit sessions (Claude web UI or human designer) can consume. Manifests are the single source of truth for "what counts as a docs surface."

The contract is defined by [`AUDIT-SCHEMA.md`](https://github.com/joshsmithxrm/ppds-design-system/blob/main/AUDIT-SCHEMA.md) in `ppds-design-system`. This spec describes how `ppds-docs` produces artifacts that conform to that contract for the `docs` surface. The sibling spec in `joshsmithxrm/power-platform-developer-suite` covers the `tui` and `extension` surfaces and mirrors this one's shape.

### Goals

- **Uniform capture artifact** — every docs page/component emits PNG (light + dark) + `meta.json`, layout per schema
- **Manifest-driven** — adding a new page means editing `tools/audit-manifests/docs.yaml`, nothing else
- **Unattended** — once `AUDIT_OUT` is configured, `audit-capture run docs` walks the whole manifest without prompts
- **Robust** — a broken entry marks itself `state: error`, the run continues, exit is non-zero
- **Dev + prod** — same runner works against `npm run start` locally or a deployed docs URL
- **Dual-theme** — every capture emits `NN-name.light.png` and `NN-name.dark.png`; the manifest-emitted JSON records both screenshot objects

### Non-Goals

- Capturing the TUI or VS Code extension (separate spec in PPDS repo)
- Writing the `manifest.json` / `meta.json` schema itself (defined in `ppds-design-system/AUDIT-SCHEMA.md`)
- Producing design-audit findings (produced downstream)
- Visual regression testing (this is audit input, not regression output)
- Running the capture automatically on every commit (Phase 4 GH Action, separate task)

---

## Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│  tools/audit-capture.mjs                                          │
│  (runner — orchestrates docs captures)                            │
└───┬────────────────────────────────────────────────────────────────┘
    │
    │ shells out to
    ▼
┌──────────────────────────────┐
│ tools/docs-verify.mjs        │
│                              │
│ Subcommands:                 │
│   launch [--dev|--production]│
│   close                      │
│   capture <route> <stem>     │
│   component <sel> <stem>     │
│                              │
│ daemon: Playwright Chromium  │
│ + optional docusaurus dev    │
│   server (npm run start)     │
└──────────────────────────────┘

Inputs:   tools/audit-manifests/docs.yaml
Outputs:  $AUDIT_OUT/docs/{entry-id}/{NN-name}.light.png
          $AUDIT_OUT/docs/{entry-id}/{NN-name}.dark.png
          $AUDIT_OUT/docs/{entry-id}/meta.json
          $AUDIT_OUT/manifest.json   (written last)
```

The runner is a thin orchestrator. Navigation + PNG rendering live in `docs-verify.mjs`; the runner walks the manifest, shells the verify tool, and emits the schema-conformant output tree.

### Components

| Component | Responsibility |
|-----------|----------------|
| `tools/audit-capture.mjs` | Reads `tools/audit-manifests/docs.yaml`, drives `docs-verify.mjs`, writes schema-conformant output. Subcommands: `run`, `validate`, `list`. |
| `tools/docs-verify.mjs` | Playwright Chromium harness. Launches (optionally starts `npm run start`), captures a route or a component in both themes, closes cleanly. |
| `tools/audit-manifests/docs.yaml` | Inventory of pages and components to capture. Version-controlled. |
| `.claude/skills/audit-capture/SKILL.md` | Skill-authored usage + env vars + gotchas for the runner. |
| `.claude/skills/docs-verify/SKILL.md` | Skill-authored direct command surface for the verify tool. |

### Dependencies

- Contract: [`AUDIT-SCHEMA.md`](https://github.com/joshsmithxrm/ppds-design-system/blob/main/AUDIT-SCHEMA.md) on `ppds-design-system` `main`
- Tooling: `@playwright/test` (new dev dependency — brings Chromium), `yaml` (new dev dependency — YAML parser), `pngjs` (new dev dependency — PNG dimension read)

---

## Specification

### Core Requirements

1. The runner MUST read the manifest in YAML at `tools/audit-manifests/docs.yaml`
2. The runner MUST write output conforming to `AUDIT-SCHEMA.md` v1: folder layout, `manifest.json`, `meta.json`
3. The runner MUST refuse to write inside the repo working tree — `$AUDIT_OUT` must be an absolute path outside the repo
4. The runner MUST write `manifest.json` **after** every entry directory is flushed, so a reader never sees a manifest referencing missing files
5. The runner MUST continue after an entry errors; final exit code is 0 iff every entry is `state=ok` or `state=skipped`
6. Every capture entry MUST emit two PNGs per screenshot name — one `.light.png` and one `.dark.png`
7. The manifest.json MUST emit two screenshot objects per screenshot step (one per theme), each with the correct `theme` field
8. The runner MUST support both dev mode (`DOCS_URL=http://localhost:3000` default) and production mode (`DOCS_URL=https://…`)
9. In dev mode the runner MUST auto-start `npm run start` in the background, wait for port 3000 to accept connections (60 s timeout), and kill the dev server after the run
10. Entries with `requires: dev-server` MUST be `state=skipped` when running against a production URL

### Command Interface

**Runner (`tools/audit-capture.mjs`):**

| Command | Signature | Purpose |
|---------|-----------|---------|
| `run` | `run docs` | Walk `docs.yaml`, capture every entry, emit `manifest.json`. |
| `validate` | `validate docs` | Parse the manifest and verify entry shape. No captures written. |
| `list` | `list docs` | Print the manifest entry ids and titles. |

**`docs-verify.mjs` subcommands:**

| Command | Signature | Purpose |
|---------|-----------|---------|
| `launch` | `launch [--dev\|--production]` | Start persistent Chromium + page; write session file. In `--dev` mode, start `npm run start` first and wait for port 3000. |
| `close` | `close` | Shut down browser and any dev server the launch started. |
| `capture` | `capture <route> <outfile-stem>` | Navigate to `DOCS_URL + route`, emit `<outfile-stem>.light.png` and `<outfile-stem>.dark.png`. |
| `component` | `component <selector> <outfile-stem>` | Scroll to first matching selector, tight-crop via `elementHandle.screenshot()`. Light + dark variants. |

### Environment Variables

| Name | Required | Purpose |
|------|----------|---------|
| `AUDIT_OUT` | yes | Absolute path to output directory. Must be outside the repo working tree. Runner creates it if missing. |
| `DOCS_URL` | no | Base URL including any baseUrl path. Defaults to `http://localhost:3000/ppds-docs` to match `docusaurus.config.ts` `baseUrl: '/ppds-docs/'`. Override with e.g. `https://joshsmithxrm.github.io/ppds-docs` for production. |
| `DOCS_MODE` | no | `dev` (default) or `production`. Determines whether the runner starts `npm run start` and how entries with `requires: dev-server` are handled. |
| `AUDIT_SOURCE_REPO` | no | Overrides the `source.repo` field in `manifest.json`. Defaults to detecting from `origin` URL. |
| `AUDIT_SOURCE_REF` | no | Overrides the `source.ref` field. Defaults to current branch ref. |
| `AUDIT_SOURCE_COMMIT` | no | Overrides the `source.commit` field. Defaults to `HEAD`. |

### Manifest Format

YAML. One manifest for the docs surface. Structure:

```yaml
# tools/audit-manifests/docs.yaml
surface: docs
entries:
  - id: getting-started
    title: Getting Started — top of page
    type: page                             # "page" or "component"
    route: /docs/getting-started/installation
    steps:
      - screenshot: 01-top
    masks: []                              # pixel-rect masks if needed

  - id: homepage-hero
    title: Homepage hero banner
    type: component
    selector: ".heroBanner"
    steps:
      - screenshot: 01-hero
```

Supported entry types:

| Type | Required fields | docs-verify call |
|------|-----------------|------------------|
| `page` | `route` | `capture <route> <stem>` |
| `component` | `selector` | `component <selector> <stem>` |

Supported step types:

| Step | Shape | Purpose |
|------|-------|---------|
| screenshot | `{ screenshot: "01-name" }` | Emit `01-name.light.png` + `01-name.dark.png` under the entry dir. |

Each screenshot step emits **both** theme PNGs. The runner is not configured to emit a single-theme PNG — `AUDIT-SCHEMA.md` encodes this per-surface: TUI + extension are single-theme, docs is dual-theme.

Masks (docs): `{ x, y, width, height, reason }` — blanks that rect in pixels on each theme PNG after capture. Coordinates in pixels relative to the full-page (or tight-cropped) screenshot.

### Runner Flow

1. **Validate env**: `AUDIT_OUT` absolute, outside repo root.
2. **Parse manifest**: fail fast if malformed; dedupe entry ids; reject invalid screenshot names.
3. **Launch docs-verify**: `docs-verify.mjs launch --dev` (or `--production`) once. In `--dev`, spawn `npm run start` and wait for port 3000.
4. **For each entry**:
    - If `requires: dev-server` and `DOCS_MODE=production`: record `state=skipped`, skip.
    - For each step — currently only `screenshot`:
       - `page` type: `capture <route> <outfile-stem>` → writes `<stem>.light.png` + `<stem>.dark.png` to the entry dir
       - `component` type: `component <selector> <outfile-stem>` → same output shape
    - If the entry has `masks`, post-process both PNGs (fill each rect with a neutral colour).
    - Append two `screenshot` objects (one per theme) to the entry's manifest record.
    - On step failure: capture stderr (4 KB cap), mark `state=error`, continue to next entry.
5. **Close docs-verify** after the final entry (kills Chromium and any dev server it started).
6. **Write per-entry `meta.json`** with steps echo, masks applied, `surfaceSpecific` block (`url`, `mode`, `viewport`, `themes`).
7. **Emit `manifest.json`** at `$AUDIT_OUT/manifest.json` with schema-conformant shape.
8. Exit 0 iff every entry is `ok` or `skipped`; else 1.

### Theme Toggle

Docusaurus reads theme state from two places:

- `localStorage.theme` (value `"dark"` or `"light"`)
- `<html data-theme="dark">` attribute

To get a deterministic theme on first paint, `docs-verify` sets `localStorage.theme` **before** navigation via Playwright's `addInitScript`, navigates, and asserts `<html data-theme>` matches. A reload is not needed — Docusaurus reads `localStorage.theme` on init. If the attribute doesn't match, the tool explicitly sets it and waits for the page to settle.

### Constraints

- `$AUDIT_OUT` must be outside repo working tree. Runner rejects paths under or equal to the current git root with exit 1.
- All runner status messages to stderr; stdout is silent (or schema-relevant text for `list`).
- No `shell: true` anywhere.
- Viewport: 1440 × 900 at DPR 2.0 — fixed so captures are comparable across runs.
- Full-page captures use Playwright's `page.screenshot({ fullPage: true })`. Sticky navbar will appear in the captured PNG; this is expected and documented.
- Manifest `id` values must be kebab-case ASCII and unique within the surface. Runner rejects at parse time.
- Screenshot step names must match `NN-name` (NN zero-padded, name kebab-case). Theme suffix is added by the runner, not declared in manifest.

### Validation Rules

| Input | Rule | Error |
|-------|------|-------|
| `AUDIT_OUT` | absolute path, outside repo | `AUDIT_OUT must be an absolute path outside the repo working tree` |
| manifest path | file exists and parses as YAML | `Manifest not found` / `Manifest parse error: …` |
| entry `id` | kebab-case ASCII, unique | `Invalid entry id: '…'` / `Duplicate entry id: '…'` |
| entry `type` | `page` or `component` | `Invalid type: must be page or component` |
| entry `route` (page) | starts with `/` | `page entry must declare a route starting with /` |
| entry `selector` (component) | non-empty string | `component entry must declare a non-empty selector` |
| step shape | `{ screenshot: "NN-name" }` | `Unknown step at entries[N].steps[M]: …` |
| screenshot name | `NN-kebab` pattern | `Screenshot name must match NN-name pattern: '…'` |

---

## Acceptance Criteria

| ID | Criterion | Test | Status |
|----|-----------|------|--------|
| AC-01 | `docs-verify capture /docs/getting-started/installation 01-top` produces `01-top.light.png` and `01-top.dark.png` | Manual: launch, run `capture`, inspect both PNGs | 🔲 |
| AC-02 | `docs-verify component .heroBanner 01-hero` produces light + dark tight-cropped PNGs of the element | Manual: launch, run `component`, inspect PNG dimensions < full-page | 🔲 |
| AC-03 | Each PNG has light-/dark-specific colouring (i.e. the theme toggle actually takes effect) | Manual: diff two PNGs byte-wise; should differ | 🔲 |
| AC-04 | `audit-capture run docs` captures every entry in `docs.yaml` without prompts given `AUDIT_OUT` | Manual: run with `AUDIT_OUT=$TEMP/docs-audit`; every entry `ok` or intentionally `skipped` | 🔲 |
| AC-05 | `audit-capture run docs` in dev mode auto-starts `npm run start`, waits for port 3000, and kills the server at the end | Manual: run; `netstat -an | grep 3000` before/after | 🔲 |
| AC-06 | `$AUDIT_OUT/manifest.json` conforms to `AUDIT-SCHEMA.md` v1 (schemaVersion=1, surfaces.docs.entries[].screenshots[] with two theme entries per step, summary counts correct) | Manual: hand-check fields | 🔲 |
| AC-07 | Each entry's `meta.json` conforms to the `docs` surface-specific meta schema (`url`, `mode`, `viewport`, `themes`) | Manual: inspect meta.json | 🔲 |
| AC-08 | When any entry's step fails, the run continues, that entry is `state=error` with stderr captured, and final exit is non-zero | Manual: point an entry at a non-existent route; verify others succeed | 🔲 |
| AC-09 | Entries with `requires: dev-server` are marked `state=skipped` when `DOCS_MODE=production`; exit is 0 if nothing else errored | Manual: run with `DOCS_MODE=production DOCS_URL=…`; verify skipReason present | 🔲 |
| AC-10 | `audit-capture validate docs` dry-runs the manifest and exits non-zero on first broken entry | Manual: corrupt an entry; run validate | 🔲 |
| AC-11 | `audit-capture list docs` prints id + title per entry | Manual: inspect stdout | 🔲 |
| AC-12 | Adding a new page requires only editing `docs.yaml` — no runner changes | Manual: add a trivial entry, run; new entry appears in output | 🔲 |
| AC-13 | `.claude/skills/audit-capture/SKILL.md` documents the single-command example and the env vars | Manual: read SKILL.md | 🔲 |
| AC-14 | Runner rejects `AUDIT_OUT` pointing inside the repo working tree | Manual: `AUDIT_OUT=./out`; expect exit 1 + clear error | 🔲 |
| AC-15 | Manifest entry `id` validation: kebab-case required, uniqueness enforced at parse time | Manual: add duplicate ids; expect parse error | 🔲 |
| AC-16 | Runner detects source repo/ref/commit from git and records in `manifest.json`, overridable via env vars | Manual: run; inspect `source` block | 🔲 |
| AC-17 | Every docs capture entry produces exactly two screenshot objects in `manifest.json` (one `theme: "light"`, one `theme: "dark"`) per screenshot step | Manual: inspect manifest.json entries | 🔲 |

### Edge Cases

| Scenario | Input | Expected Output |
|----------|-------|-----------------|
| Dev server fails to start | port 3000 busy / build error | stderr: `dev server did not become ready within 60s`; exit 1 |
| Production URL unreachable | `DOCS_URL=https://down.example` | per-entry errors; exit 1 |
| Selector not found (component) | `selector: ".does-not-exist"` | entry `state=error` with `selector not found` |
| Empty manifest | `entries: []` | stdout: "No entries to capture"; `manifest.json` written with empty surface; exit 0 |
| Masks out of bounds | `{ x: 10000, y: 0, width: 1, height: 1 }` | Masked fillRect clips to PNG bounds; no error |

### Test Examples

```bash
# Capture against local dev server
export AUDIT_OUT=/tmp/ppds-docs-audit-$(date +%s)
node tools/audit-capture.mjs run docs

# Capture against production
export DOCS_URL=https://joshsmithxrm.github.io/ppds-docs
export DOCS_MODE=production
node tools/audit-capture.mjs run docs

# Dry-run the manifest
node tools/audit-capture.mjs validate docs

# List entries
node tools/audit-capture.mjs list docs
```

---

## Core Types

### Manifest (TypeScript-style)

```ts
interface Manifest {
  surface: "docs";
  entries: Entry[];
}

interface Entry {
  id: string;                              // kebab-case, unique within surface
  title: string;
  type: "page" | "component";
  route?: string;                          // required when type === "page"
  selector?: string;                       // required when type === "component"
  requires?: "dev-server" | "none";        // default "none"
  steps: Step[];
  masks?: Mask[];
}

type Step = { screenshot: string };        // "NN-name"

interface Mask {
  x: number; y: number; width: number; height: number; reason: string;
}
```

### Runner Output

Conforms to [`AUDIT-SCHEMA.md`](https://github.com/joshsmithxrm/ppds-design-system/blob/main/AUDIT-SCHEMA.md). Per-surface `surfaceSpecific` block:

```json
{
  "url": "http://localhost:3000/docs/getting-started/installation",
  "mode": "dev",
  "viewport": { "width": 1440, "height": 900 },
  "themes": ["light", "dark"]
}
```

---

## Design Decisions

### Why Playwright?

Docusaurus is already designed to run in a browser. Playwright Chromium is the industry-standard headless harness and handles full-page screenshots, JavaScript execution, and localStorage deterministically. The single dev dependency covers every need here.

### Why two PNGs per screenshot step (not two separate manifest entries)?

- Authorial intent: a designer looking at a page wants to see both themes of the same frame side by side. Forcing two manifest entries duplicates the `route`, the `title`, and the `masks`, inviting drift.
- The `AUDIT-SCHEMA.md` shape accommodates it: the `screenshots` array in the entry record can hold multiple objects differentiated by `theme`.

### Why auto-start the dev server in dev mode (not require the user to)?

The pipeline is designed to run unattended in CI and locally with a single command. Requiring the user to start the dev server first is an extra step that every caller would forget. Auto-start keeps the interface simple and matches how PPDS `audit-capture run tui` auto-builds + launches the TUI.

### Why not use Docusaurus-specific tooling (e.g. `@docusaurus/preset-classic` hooks)?

- We want the runner to work against a deployed site too, where Docusaurus internals aren't accessible.
- Playwright + raw URLs gives dev and prod parity.

### Why reject `$AUDIT_OUT` inside the repo?

- Captures are large (potentially tens of MB per run with dual themes). Gitignore patterns are easy to forget; accidental commits are worse than a clear "nope."
- Audit workflow expects captures to land in a separate audit repo.

### Why YAML manifests?

Mirrors the PPDS repo convention. Hand-editable. Comments supported.

---

## Extension Points

### Adding a new page capture

1. Add an entry to `tools/audit-manifests/docs.yaml`:
   ```yaml
   - id: my-new-page
     title: My New Page — top
     type: page
     route: /docs/section/my-new-page
     steps:
       - screenshot: 01-top
   ```
2. Run `node tools/audit-capture.mjs validate docs` to verify the manifest.
3. Run `node tools/audit-capture.mjs run docs` for a real capture. No runner code changes.

### Adding a new component capture

Same pattern with `type: component` and `selector: ".your-class"`.

### Adding more screenshot variants per entry

Simply append more `screenshot:` steps — each gets its own pair of theme PNGs.

---

## Related Specs

- `ppds-design-system/AUDIT-SCHEMA.md` — the output contract
- `power-platform-developer-suite/specs/audit-capture.md` — the sibling spec for TUI + extension surfaces

---

## Changelog

| Date | Change |
|------|--------|
| 2026-04-18 | Initial spec (Phase 2: docs surface) |

---

## Roadmap

- **Additional viewports** — add a `viewports: [1440x900, 390x844]` field so entries emit mobile captures alongside desktop.
- **Auto-validate CI gate** — run `audit-capture validate docs` in PR CI to catch manifest drift when routes change.
- **Smart element captures** — wait for images-loaded / fonts-ready before the shot so captures are byte-stable in CI.
