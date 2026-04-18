# v1 Docs Plan

**Branch:** `docs/v1-release-prep`
**Target:** ship v1 docs this weekend
**Scope:** two workstreams — (1) immediate content rewrites for v1 (this branch), (2) automation for v1.1+ (separate effort in `ppds` monorepo).

---

## Workstream 1 — Immediate content (this branch, this weekend)

All parallelizable except tasks that need to land last. Each agent writes to a different file, so no merge conflicts.

### Batch A — rewrites in parallel (4 agents, ~same time)

| Task | File | Source to verify against | Notes |
|---|---|---|---|
| A1 | `docs/reference/cli/overview.md` | `ppds/src/PPDS.Cli/Commands/**/*CommandGroup.cs` | Real command tree; include new groups (metadata authoring, custom-apis, data-providers, webresources, publish, version/update); mention `ListResult<T>` pagination contract |
| A2 | `docs/reference/sdk/overview.md` | `ppds/src/PPDS.{Dataverse,Migration,Plugins,Auth}/**/*.cs` + CHANGELOGs | Real class names (`IExporter`/`ParallelExporter`, `IImporter`/`TieredImporter`); include Plugins 2.1 new attributes/enums |
| A3 | `docs/guides/authentication.md` | `ppds/src/PPDS.Auth/Credentials/` + `AuthCommandGroup.cs` | Real credential-provider pattern; correct CLI commands (`create/clear/who` not `login/logout/status`); add CI/CD env-var auth block (PPDS_CLIENT_ID etc.) |
| A4 | `docs/reference/mcp/overview.md` (new file) | `ppds/src/PPDS.Mcp/` `[McpServerTool]` usage + README | Config snippet for Claude Code; session-isolation flags (`--profile`, `--environment`, `--read-only`, `--allowed-env`); link to modelcontextprotocol.io |

### Batch B — I do locally (quick, sequential after A lands)

| Task | Action |
|---|---|
| B1 | Delete `docs/guides/data-migration.md` (stub) |
| B2 | Delete `docs/guides/plugin-deployment.md` (stub) |
| B3 | Delete `docs/concepts/architecture.md` (stub) |
| B4 | Update `sidebars.ts`: remove the 3 stub entries, add `reference/mcp/overview` under Reference |
| B5 | `npm run build` — fix any MDX errors |
| B6 | Spot-check live-preview of each rewritten page |
| B7 | Commit as feature branch, open PR against `main` |

**Total estimate:** Batch A 2-3 hrs parallel wall time. Batch B 30 min. Total ~3 hrs wall, ~8 hrs agent-compute.

### What we're NOT doing in v1 (explicit)

- Per-command pages for the 24 CLI command groups (→ v1.1 automation)
- Full MCP tool catalog for 43 tools (→ v1.1 automation)
- TUI screen-by-screen guide
- Extension command-palette reference
- Tutorial ("10 minutes to first migration") — user noted we already have install + auth + consumption-patterns; tutorial can come in v1.1
- Release notes page

---

## Workstream 2 — Automation (separate effort, post-v1)

**Lives in:** `ppds` monorepo, new folder `ppds/scripts/docs-gen/`
**Not this branch** — different repo, different PR.

### Decided parameters

- **Scope:** reference + smoke-test code samples
- **Residency:** ppds monorepo (generators live next to source)
- **Trigger:** drift check on every PR + manual regenerate on release tag
- **Review:** auto-PR into ppds-docs, human approves before merge

### Components to build

| Component | Tool | Effort | Target |
|---|---|---|---|
| SDK reference (4 libs) | DocFX + DocFxMarkdownGen, reads XML doc comments | 4-6 hrs | `docs/reference/sdk/{package}/*.md` |
| CLI reference (24 groups) | Custom Spectre reflection, ~200 LOC | 6-8 hrs | `docs/reference/cli/{group}/*.md` |
| MCP tool catalog (43 tools) | Custom `McpServer.Tools` enumerator, ~150 LOC | 3-4 hrs | `docs/reference/mcp/tools/*.md` |
| Extension command table | Node script over `package.json.contributes` | 1 hr | `docs/reference/extension/commands.md` |
| Code-sample smoke test | CI step that extracts fenced C# blocks from guides into a test project, `dotnet build` | 3-4 hrs | New CI job in ppds-docs |
| Drift check | CI step in ppds: if public surface changes without XML doc/`[Description]` annotation, fail | 2-3 hrs | New CI job in ppds |
| Cross-repo auto-PR bot | GitHub Action in ppds using deploy token to open PR in ppds-docs on release tag | 2-3 hrs | New workflow in ppds |

**Total v1.1 automation effort:** ~22-30 hrs, sustainable over 2-3 weeks post-launch.

### Pre-requisites (spike Saturday if time)

Before committing to Workstream 2, verify:
- `grep -rc "/// <summary>" ppds/src/PPDS.{Dataverse,Migration,Auth,Plugins}/` — need >60% XML doc coverage for DocFX to be useful
- `grep -rc "Description = " ppds/src/PPDS.Cli/Commands/` — Spectre command descriptions
- `[McpServerTool]` attributes already use `Name`/`Description` properties

If any is thin, that surface's generator needs source-code annotation work first.

### Deferred to v2+ (explicitly out of automation scope)

- Auto-generated guides/tutorials (narrative, not mechanical)
- Release notes from commit log (CHANGELOGs per-package already do this)
- Versioned docs snapshots (Docusaurus `docs-version`)
- Translation / i18n

---

## Why this is split across two branches/repos

Automation lives in `ppds` monorepo because:
1. Generators need to run against source at the right build step
2. Drift check is a ppds CI concern — fails PRs in ppds, not ppds-docs
3. Cross-repo deploy token flows one direction (ppds → ppds-docs)

This branch (`docs/v1-release-prep`) is content-only. Automation gets its own branch in `ppds` whenever you pick it up.
