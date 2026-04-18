---
sidebar_position: 1
title: CLI Overview
description: Command-line interface reference for PPDS
---

# CLI Overview

`ppds` is the Power Platform Developer Suite command-line tool. It packages Dataverse data operations, metadata authoring, plugin registration, solution lifecycle, query execution, and ALM utilities behind one cohesive CLI. Running `ppds` with no arguments launches the interactive TUI for profile selection and SQL querying; every operation is also available as a non-interactive subcommand for scripting. See [Installation](/docs/getting-started/installation) to get the tool on your PATH.

## Global Syntax

```bash
ppds <command> [subcommand] [options]
```

| Option | Description |
|--------|-------------|
| `--help`, `-h` | Show help for the root command or any subcommand |
| `--version` | Print version information |
| `--output-format`, `-f` | Output format (`Text` or `Json`) on commands that produce data |
| `--quiet`, `-q` | Show only warnings and errors |
| `--verbose`, `-v` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id` | Correlation ID for distributed tracing |

`--quiet`, `--verbose`, and `--debug` are mutually exclusive. Data-producing commands that connect to Dataverse also accept `--profile` / `-p` to pick an auth profile and `--environment` / `-env` (or `-e` on a few groups) to override the profile's bound environment.

## Command Groups

| Group | Purpose |
|-------|---------|
| `auth` | Manage authentication profiles |
| `env` | Manage environment selection (alias: `org`) |
| `data` | Export, import, copy, analyze, load, update, delete, truncate records |
| `query` | Execute FetchXML and SQL queries against Dataverse |
| `metadata` | Browse and author entities, columns, relationships, keys, option sets |
| `solutions` | List, get, export, import, publish solutions |
| `importjobs` | Monitor solution import jobs |
| `environmentvariables` | Manage environment variables |
| `plugins` | Plugin registration management |
| `plugintraces` | Query and manage plugin trace logs |
| `custom-apis` | Manage Custom APIs and parameters |
| `service-endpoints` | Service endpoint and webhook management |
| `data-providers` | Virtual entity data provider management |
| `data-sources` | Virtual entity data source management |
| `webresources` | Manage web resources |
| `publish` | Publish customizations (webresources, entities, or all) |
| `flows` | List and inspect Power Automate cloud flows |
| `connections` | List Power Platform connections (Power Apps Admin API) |
| `connectionreferences` | Manage connection references with orphan detection |
| `deployment-settings` | Generate, sync, and validate deployment settings files |
| `users` | Manage system users |
| `roles` | Manage security roles |
| `interactive` | Launch the TUI explicitly (also the default when no args given) |
| `docs` | Open the documentation site in a browser |
| `version` | Print version information |
| `serve` | Run PPDS as a background daemon (JSON-RPC) |

## Core Groups with Examples

### `auth`

Subcommands: `create`, `list`, `select`, `delete`, `update`, `name`, `clear`, `who`.

```bash
# Interactive browser sign-in, bound to a specific environment
ppds auth create --name Dev --environment https://contoso-dev.crm.dynamics.com

# Service principal for CI
ppds auth create --name CI \
  --environment https://contoso.crm.dynamics.com \
  --applicationId <app-guid> \
  --clientSecret <secret> \
  --tenant <tenant-guid>

# Show the active profile and token state
ppds auth who
```

### `env`

Subcommands: `list`, `select`, `who`, `config`, `type`. Also available as `ppds org ...`.

```bash
# Discover environments you can access
ppds env list --filter contoso

# Switch the active environment on the current profile
ppds env select --environment https://contoso-uat.crm.dynamics.com

# Verify the connection and show org IDs via WhoAmI
ppds env who
```

### `data`

Subcommands: `export`, `import`, `copy`, `analyze`, `schema`, `users`, `load`, `update`, `delete`, `truncate`.

```bash
# Schema-driven export to a ZIP
ppds data export --schema ./schema.xml --output ./exports/prod.zip

# CSV load with auto-mapping and pooled service principals
ppds data load --file ./accounts.csv --entity account \
  --profile app1,app2,app3 --dry-run
```

### `query`

Subcommands: `fetch`, `sql`, `explain`, `history`.

```bash
# SQL over Dataverse (transpiled to FetchXML under the hood)
ppds query sql "SELECT name, revenue FROM account WHERE statecode = 0" --top 100

# Execute a saved FetchXML file and emit CSV for pipelines
ppds query fetch --file ./queries/active-accounts.xml -f csv > accounts.csv
```

### `metadata`

Top-level subcommands: `entities`, `entity`, `attributes`, `relationships`, `keys`, `optionsets`, `optionset`, `publish`. Authoring lives under nested groups `table`, `column`, `relationship`, `choice`, `key` (beta.14).

```bash
# List custom entities matching a fragment
ppds metadata entities --filter new_ --custom-only

# Inspect a single entity's attributes
ppds metadata attributes account --type Lookup
```

### `solutions`

Subcommands: `list`, `get`, `export`, `import`, `components`, `publish`, `url`.

```bash
# List unmanaged solutions
ppds solutions list --filter contoso

# Export as managed and import elsewhere
ppds solutions export ContosoCore --managed --output ./dist/ContosoCore_managed.zip
ppds solutions import ./dist/ContosoCore_managed.zip --overwrite
```

### `plugins`

Subcommands: `extract`, `deploy`, `register`, `diff`, `list`, `get`, `clean`, `download`, `update`, `unregister`, `enable`, `disable`.

```bash
# Extract [PluginStep]/[PluginImage] attributes from an assembly to JSON
ppds plugins extract --assembly ./bin/Release/Contoso.Plugins.dll

# Preview deployment drift without writing
ppds plugins deploy --config ./plugin-registration.json --solution ContosoCore --dry-run
```

### `custom-apis`

Subcommands: `list`, `get`, `register`, `update`, `unregister`, `add-parameter`, `update-parameter`, `remove-parameter`, `set-plugin`.

```bash
# List Custom APIs in a solution
ppds custom-apis list --solution ContosoCore

# Register a new Custom API
ppds custom-apis register --unique-name contoso_DoThing --display-name "Do Thing"
```

## New in beta.14

The last two betas added several groups and a cross-cutting improvement:

- **Metadata authoring** — `ppds metadata table`, `column`, `relationship`, `choice`, `key` subgroups for create/update/delete operations (beta.13 was read-only browse).
- **`custom-apis`** — register and manage Custom APIs and their request/response parameters.
- **`data-providers` and `data-sources`** — manage virtual entity plumbing.
- **`webresources`** — list, get, and retrieve URLs for web resources.
- **`publish`** — a top-level command that publishes either all customizations (`--all`), specific web resources (`--type webresource <name>`), or specific entities (`--type entity account contact`).
- **Automatic update check** — the CLI caches a background check and surfaces available updates at startup (guarded by `--quiet`).

See [CHANGELOG.md](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/src/PPDS.Cli/CHANGELOG.md) for the full history.

## Pagination and List Results

Dataverse list services back CLI commands with a typed `ListResult<T>` containing `Items`, `TotalCount`, `WasTruncated`, and `FiltersApplied`. When a command writes JSON (`-f Json`), these fields appear in the payload so callers can detect truncation, report totals, and display which filters the service applied server-side. In text mode, totals and active filters print to stderr so stdout stays clean for piping.

## Authentication via Environment Variables (CI/CD)

For CI and headless scenarios, `ppds` can run fully stateless — no profile on disk — when four environment variables are set together:

| Variable | Purpose |
|----------|---------|
| `PPDS_CLIENT_ID` | Application (client) ID |
| `PPDS_CLIENT_SECRET` | Client secret |
| `PPDS_TENANT_ID` | Entra tenant ID |
| `PPDS_ENVIRONMENT_URL` | Full Dataverse URL (must include `https://`) |
| `PPDS_CLOUD` | Optional cloud: `Public` (default), `UsGov`, `UsGovHigh`, `UsGovDod`, `China` |

All four of the first variables must be set. Setting one to three of four is a hard error. See the [authentication guide](/docs/guides/authentication) for the full precedence order between env-var auth, `--profile`, and the default active profile.

## Next Steps

- [Authentication](/docs/guides/authentication) — create profiles, service principal setup, federated auth
- [Libraries Overview](/docs/reference/libraries/overview) — the libraries the CLI is built on
