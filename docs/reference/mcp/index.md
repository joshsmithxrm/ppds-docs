---
sidebar_position: 1
title: MCP Server
description: Model Context Protocol server for AI assistant integration
---

# MCP Server

The [Model Context Protocol](https://modelcontextprotocol.io) is an open standard that lets AI assistants call external tools through a uniform JSON-RPC interface. `PPDS.Mcp` is a stdio-based MCP server that exposes Power Platform and Dataverse operations as MCP tools, so assistants like Claude Code and Cursor can query metadata, run FetchXML or SQL, inspect plugin traces, and edit schema against your environments using the same authentication and services as the PPDS CLI.

## Installation

Install the server as a global .NET tool:

```bash
dotnet tool install --global PPDS.Mcp
```

This installs the `ppds-mcp-server` executable on your `PATH`. The server uses stdio transport, so you invoke it by pointing an MCP client at the executable rather than running it directly.

Verify the install:

```bash
ppds-mcp-server --help
```

## Configure Claude Code

Add an entry to your Claude Code MCP config (`.mcp.json` in the project, or the global `claude.json`):

```json
{
  "mcpServers": {
    "ppds": {
      "command": "ppds-mcp-server",
      "args": ["--profile", "my-profile"]
    }
  }
}
```

Restart Claude Code. The `ppds` server is now available, and all tool names will appear with the `ppds_` prefix (for example, `ppds_query_sql`, `ppds_metadata_entity`).

## Configure Cursor and other MCP clients

Cursor, Zed, Continue, and other MCP-compatible clients use the same server binary — only the config file location changes. Point the client at `ppds-mcp-server` with the same `args` array. See the [Cursor MCP docs](https://docs.cursor.com/context/model-context-protocol) or [Claude Code MCP docs](https://docs.claude.com/en/docs/claude-code/mcp) for client-specific config paths.

Any MCP client that supports stdio transport can host the server. The tool catalog is identical across clients.

## Session isolation flags

The server accepts command-line flags that scope what the AI can do within a session. Pass them via the `args` array in the client config.

| Flag | Description |
|------|-------------|
| `--profile <name>` | Pin the session to a named PPDS auth profile. Recommended for any production-adjacent use. If omitted, the server uses the active profile at the time of the first tool call. |
| `--environment <url>` | Pin the session to a specific environment URL. The assistant cannot switch away from this environment. |
| `--allowed-env <url>` | Add an environment URL to the allowlist for `ppds_env_select`. Repeatable. If you do not pass any `--allowed-env`, environment switching is disabled and the session is locked to the initial environment. |
| `--read-only` | Reject all mutating operations (INSERT, UPDATE, DELETE, and any metadata authoring tool). Use this for exploratory AI sessions where the assistant should only read data. |

Flags are parsed at process start, so each MCP server entry in your client config represents one session configuration. To give the assistant access to both a read-only production session and a writable dev session, register two `mcpServers` entries with different names and flags.

Example — read-only production plus writable dev:

```json
{
  "mcpServers": {
    "ppds-prod": {
      "command": "ppds-mcp-server",
      "args": [
        "--profile", "prod",
        "--environment", "https://contoso.crm.dynamics.com",
        "--read-only"
      ]
    },
    "ppds-dev": {
      "command": "ppds-mcp-server",
      "args": [
        "--profile", "dev",
        "--allowed-env", "https://contoso-dev.crm.dynamics.com",
        "--allowed-env", "https://contoso-test.crm.dynamics.com"
      ]
    }
  }
}
```

## Available tool categories

The server currently exposes 41 tools grouped by domain. This reference lists the categories; browse [`src/PPDS.Mcp/Tools/`](https://github.com/joshsmithxrm/power-platform-developer-suite/tree/main/src/PPDS.Mcp/Tools) on GitHub for the exhaustive list with parameter schemas.

| Category | Purpose | Example tools |
|----------|---------|---------------|
| Auth and environment | Identify the active profile, list and select environments | `ppds_auth_who`, `ppds_env_list`, `ppds_env_select` |
| Metadata (read) | Inspect tables, attributes, relationships, and keys | `ppds_metadata_entities`, `ppds_metadata_entity` |
| Metadata authoring | Create and update tables, columns, relationships, keys, and choices | `ppds_metadata_create_table`, `ppds_metadata_add_column`, `ppds_metadata_create_relationship`, `ppds_metadata_create_choice` |
| Data | Schema introspection and sample-record analysis | `ppds_data_schema`, `ppds_data_analyze` |
| Query | Execute SQL (transpiled to FetchXML) or raw FetchXML | `ppds_query_sql`, `ppds_query_fetch` |
| Plugin registration | List assemblies, types, and step registrations | `ppds_plugins_list`, `ppds_plugins_get` |
| Plugin traces | List, fetch, and build execution timelines from trace logs | `ppds_plugin_traces_list`, `ppds_plugin_traces_timeline`, `ppds_plugin_traces_delete` |
| Custom APIs | Enumerate registered custom APIs | `ppds_custom_apis_list` |
| Solutions | List solutions and their components | `ppds_solutions_list`, `ppds_solutions_components` |
| Import jobs | Inspect solution import history | `ppds_import_jobs_list`, `ppds_import_jobs_get` |
| Connection references | List, fetch, and analyze connection references and their bindings | `ppds_connection_references_list`, `ppds_connection_references_analyze` |
| Environment variables | Read and set environment variable values | `ppds_environment_variables_list`, `ppds_environment_variables_set` |
| Web resources | List, fetch, and publish web resources | `ppds_web_resources_list`, `ppds_web_resources_publish` |
| Service endpoints and data providers | Enumerate service endpoints and virtual-table data providers | `ppds_service_endpoints_list`, `ppds_data_providers_list` |

A generated per-tool reference with parameter schemas will ship in a later docs release. Until then, each tool's `[Description]` attribute in source is the authoritative contract and is what the AI assistant sees when deciding which tool to call.

## Authentication

`PPDS.Mcp` reuses the same profile store as the CLI. Create a profile before connecting any MCP client:

```bash
ppds auth create
```

Then reference the profile by name with `--profile` in your MCP server config. Service principal, device code, and interactive browser auth are all supported; see the [authentication guide](/docs/guides/authentication) for details on creating profiles for different scenarios.

If you omit `--profile`, the server resolves to the active profile when the first tool is called. This is fine for single-profile developer machines but is discouraged for shared configs or CI, where the active profile is ambient state.

## Permissions and safety

MCP clients surface tool calls to the user for approval, but an AI assistant can still propose surprising operations — a schema change in response to a vague data question, or a `DELETE` against the wrong table. Two guardrails help:

- **Use `--read-only` for exploratory sessions.** Any write, delete, or metadata authoring tool is rejected before it reaches Dataverse. The assistant sees the rejection and adapts.
- **Constrain environments with `--environment` or `--allowed-env`.** Pin production sessions to the production URL and omit any allowlist — the assistant cannot switch environments and cannot accidentally target dev or test.

Treat the MCP server the same way you treat an interactive CLI session: scope its auth, constrain its target, and read the tool calls before approving them.

## Next steps

- [Claude Code MCP docs](https://docs.claude.com/en/docs/claude-code/mcp) — host-side configuration and debugging
- [modelcontextprotocol.io](https://modelcontextprotocol.io) — protocol specification
- [PPDS CLI reference](/docs/reference/cli) — same backend, command-line surface
- [Authentication guide](/docs/guides/authentication) — create profiles for `--profile`
