---
name: audit-capture
description: Run manifest-driven PNG captures of the ppds-docs site (Docusaurus) for design audits. Emits a schema-conformant capture tree for consumption by a Claude design-audit session. Captures each page in both light and dark themes.
allowed-tools: Bash(node tools/audit-capture*), Bash(node tools/audit-capture.mjs *), Bash(node tools/docs-verify.mjs *)
---

# Audit Capture (docs)

Manifest-driven capture of every user-facing docs surface. Produces PNGs (light + dark) + `meta.json` + root `manifest.json` under `$AUDIT_OUT/` per [`ppds-design-system/AUDIT-SCHEMA.md`](https://github.com/joshsmithxrm/ppds-design-system/blob/main/AUDIT-SCHEMA.md). Output is consumed by a Claude audit session (or human designer) against our design system.

## When to Use

- Before a design-audit round — capture a clean baseline of every docs page
- After visual fixes / theme changes land, to refresh the baseline
- When adding a new page or navbar component — to verify the manifest entry reaches it
- **NOT** for regression testing — this is audit input, not a diff tool

## Quick start

```bash
# Capture against the local dev server (auto-starts npm run start)
export AUDIT_OUT="$TEMP/ppds-docs-audit-$(date +%s)"
node tools/audit-capture.mjs run docs

# Capture against the deployed site
export AUDIT_OUT="$TEMP/ppds-docs-audit-prod"
export DOCS_URL=https://joshsmithxrm.github.io/ppds-docs
export DOCS_MODE=production
node tools/audit-capture.mjs run docs

# Dry-run a manifest without capturing
node tools/audit-capture.mjs validate docs

# List manifest entries
node tools/audit-capture.mjs list docs
```

Exit codes: `0` = everything `ok` or `skipped`, `1` = at least one entry errored.

## Required environment

| Var | Required | Purpose |
|---|---|---|
| `AUDIT_OUT` | **yes** | Absolute path, **outside** the repo working tree. Runner refuses relative or in-repo paths. |
| `DOCS_URL` | no | Base URL. Defaults to `http://localhost:3000`. For prod: e.g. `https://joshsmithxrm.github.io/ppds-docs`. |
| `DOCS_MODE` | no | `dev` (default when `DOCS_URL` is `http://localhost...`) or `production`. Controls whether the runner starts `npm run start`. |
| `AUDIT_SOURCE_REPO` / `_REF` / `_COMMIT` | no | Overrides the git metadata recorded in `manifest.json`. CI uses these. |

In `dev` mode the runner auto-starts `npm run start`, waits for port 3000 (60 s timeout), and kills the dev server at the end. No manual `npm run start` needed.

## Output layout

Per [`AUDIT-SCHEMA.md`](https://github.com/joshsmithxrm/ppds-design-system/blob/main/AUDIT-SCHEMA.md):

```
$AUDIT_OUT/
├── manifest.json                          ← inventory + state + summary
├── docs/<entry-id>/<NN-name>.light.png
├── docs/<entry-id>/<NN-name>.dark.png
└── docs/<entry-id>/meta.json
```

`manifest.json` is written **last**, after every entry's directory is flushed. A reader never sees it referencing a file that hasn't been written.

Each screenshot step in the manifest produces **two** PNGs (one per theme) and **two** screenshot objects in `manifest.json` — one with `theme: "light"`, one with `theme: "dark"`.

## Manifests (single source of truth)

Adding a new page or component means editing one YAML file. No runner changes required.

- [`tools/audit-manifests/docs.yaml`](../../../tools/audit-manifests/docs.yaml)

Each entry has:

```yaml
- id: kebab-case-id                   # unique within surface
  title: Human readable title
  type: page                          # or "component"
  route: /docs/getting-started        # required when type: page
  selector: "nav.navbar"              # required when type: component
  requires: none                      # or "dev-server" (skipped in production)
  steps:
    - screenshot: 01-top              # NN-name, zero-padded
  masks:
    - { x: 0, y: 0, width: 1440, height: 60, reason: "sticky navbar varies" }
```

Entry ids must be kebab-case. Screenshot names must match `NN-name` (e.g. `01-top`, `02-loaded`). The theme suffix (`.light` / `.dark`) is added by the runner — do NOT put it in the step name.

Masks (docs): pixel rect — `{ x, y, width, height, reason }`.

## What runs unattended

- **Every entry** is captured by default in both themes.
- **`requires: dev-server`** entries are marked `state: skipped` in production mode (`DOCS_MODE=production`). The run still exits `0`.

## Typical flow

1. `node tools/audit-capture.mjs validate docs` — parses manifest, flags bad entries.
2. `node tools/audit-capture.mjs run docs` — capture. Auto-starts dev server in dev mode.
3. Inspect `$AUDIT_OUT/manifest.json` — should show `state: ok` for everything that wasn't deliberately skipped.
4. Hand `$AUDIT_OUT/` to the audit consumer (push to `ppds-v1-audit` in CI; local: open PNGs directly).

## Gap protocol

If a manifest entry can't reach its target page with the available step types:

1. **Stop.** Do not add sleeps or hacks — that's a silent lie.
2. If the page needs interaction before capture (e.g. click a tab), extend the manifest schema + docs-verify capabilities. Don't bypass.
3. Re-run `validate` before `run`.

## Known limitations

- **Sticky navbar in PNGs** — Docusaurus' fixed navbar appears at the top of full-page captures. That's the rendered page; document it as expected.
- **No viewport variants in v1** — every capture is 1440 x 900 @ DPR 2.0. Mobile captures are a roadmap item.
- **localStorage theme** — we set `localStorage.theme` via Playwright's `addInitScript` before navigation so Docusaurus picks the right theme on first paint.

## Related

- [specs/audit-capture.md](../../../specs/audit-capture.md) — the contract
- [@docs-verify](../docs-verify/SKILL.md) — the underlying Playwright harness
- [`AUDIT-SCHEMA.md`](https://github.com/joshsmithxrm/ppds-design-system/blob/main/AUDIT-SCHEMA.md) — output format contract
