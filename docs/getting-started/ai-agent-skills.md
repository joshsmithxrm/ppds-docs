---
sidebar_position: 2
title: Skills for AI agents
description: Install PPDS Skills in Claude Code or GitHub Copilot CLI
---

# Skills for AI agents

Install [PPDS Skills](https://github.com/joshsmithxrm/ppds-skills) to give your
AI coding agent guidance for Power Platform Developer Suite (PPDS). The seven
skills cover authentication and environment selection, queries, plugins,
solutions, metadata, data migration, and web resources.

The skills include command references generated from actual CLI `--help`
output and captured MCP tool names and descriptions. Static checks reject
commands and flags absent from those captures. This reduces invented syntax;
you should still review the selected environment and proposed changes before
authorizing a write.

## Prerequisites

Install the [PPDS CLI](installation.md) and either Claude Code or GitHub
Copilot CLI. Skills supply instructions; they do not install the CLI,
configure authentication, or connect an MCP server for you. The CLI works
without MCP; see the [MCP reference](../reference/mcp/index.md) if your host
needs that integration.

The [maintenance candidate](../reference/releases/maintenance-2026-10.md)
prepares skills 0.1.2 against unpublished CLI 1.4.2 / MCP 1.2.2 artifacts.
The install commands below select the public repository, not that preparation
branch. Check the installed skill's tested versions and use your installed
CLI's live `--help` if they differ.

## Claude Code

Run these commands inside Claude Code to add the PPDS marketplace and install
its plugin:

```text
/plugin marketplace add joshsmithxrm/ppds-skills
/plugin install ppds@ppds-skills
```

Use `/plugin` to inspect the installation. See Claude Code's
[plugin installation guide](https://code.claude.com/docs/en/discover-plugins)
for install scopes and updates. If you prefer copying skill directories,
follow the [PPDS Skills README](https://github.com/joshsmithxrm/ppds-skills#install--claude-code).

## GitHub Copilot CLI

Copy all seven skill folders into your personal skills directory. Run from
a directory that does not already contain a `ppds-skills` checkout.

On Windows, use PowerShell:

```powershell
git clone https://github.com/joshsmithxrm/ppds-skills
$skillsDestination = Join-Path $HOME '.copilot/skills'
New-Item -ItemType Directory -Path $skillsDestination -Force | Out-Null
Copy-Item -Path './ppds-skills/skills/*' -Destination $skillsDestination -Recurse -Force
```

On macOS or Linux, use Bash:

```bash
git clone https://github.com/joshsmithxrm/ppds-skills
mkdir -p ~/.copilot/skills
cp -r ppds-skills/skills/* ~/.copilot/skills/
```

Keep every folder's `SKILL.md` and `references/` together. The skills link to
one another, so copying only individual Markdown files loses required context.
For project-only installation, use `.github/skills/` in your project instead.
See GitHub's [skill installation guide](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills)
for supported locations.

In a Copilot session, run `/skills reload` if it was already open, then
`/skills list`. Confirm that all seven `ppds-*` skills appear.

## Check the installation

Ask your agent: **"Use PPDS core guidance to explain how I select a Dataverse
environment. Do not authenticate or change any records."** It should load
the core skill and refer to PPDS commands. This checks discovery without
requiring a live environment.

When you are ready to connect, follow the [authentication guide](../guides/authentication.md).
For skill corrections and reference updates, use the
[PPDS Skills repository](https://github.com/joshsmithxrm/ppds-skills).
