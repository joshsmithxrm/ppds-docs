---
title: Consumption Patterns
sidebar_position: 5
description: When to use library, CLI, or PowerShell cmdlets for PPDS functionality
---

# PPDS Consumption Patterns

When to use library, CLI, or PowerShell cmdlets for PPDS functionality.

## Architecture Layers

The PPDS ecosystem provides functionality at three layers:

```
┌─────────────────────────────────────────────────────────────┐
│  ppds-alm (CI/CD templates)                                 │
│  └── uses CLI directly (ppds)                               │
├─────────────────────────────────────────────────────────────┤
│  PPDS.Tools (PowerShell module)                             │
│  └── wraps CLI via process invocation                       │
│  └── for PowerShell scripting (not used by ALM)             │
├─────────────────────────────────────────────────────────────┤
│  CLI (ppds dotnet tool)                                     │
│  └── invokes library APIs                                   │
├─────────────────────────────────────────────────────────────┤
│  Libraries (NuGet packages)                                 │
│  ├── PPDS.Migration                                         │
│  ├── PPDS.Dataverse                                         │
│  ├── PPDS.Auth                                              │
│  └── PPDS.Plugins                                           │
└─────────────────────────────────────────────────────────────┘
```

## When to Use Each Layer

### Library (NuGet Package Reference)

**Use when:**
- Building a custom C# application
- Need programmatic control over operations
- Want to extend or customize behavior
- Composing with other .NET code
- Writing a reference implementation

**Example:**

```csharp
// Custom migration app with business logic
var migrator = new DataverseMigrator(connection);
var result = await migrator.ExportAsync(options);
// Custom post-processing, integration with other systems
```

**Lifecycle:** Direct PackageReference. You're coupled to library API. Update code when API changes.

### CLI Tool (dotnet tool install)

**Use when:**
- Running operations without writing code
- Need a stable, versioned interface
- Working in a shell (bash, cmd, pwsh)
- Want self-documenting commands (`--help`)
- Learning how to use the library (CLI as reference implementation)

**Example:**

```bash
dotnet tool install -g PPDS.Migration.Cli
ppds-migrate export --connection "$CONN" --entities account,contact --output ./data
ppds-migrate import --connection "$CONN" --input ./data --dry-run
```

**Lifecycle:** Install a tool version. CLI maintains backwards-compatible flags. Library can change internally.

### PowerShell Cmdlets (PPDS.Tools)

**Use when:**
- Scripting in PowerShell
- Want PowerShell-native features (pipeline, `-WhatIf`, parameter sets)
- Want consistency with other PPDS cmdlets
- Prefer PowerShell over bash/CLI syntax

**Example:**

```powershell
Import-Module PPDS.Tools
Export-DataverseData -SchemaPath ./schema.xml -OutputPath ./data.zip
Import-DataverseData -DataPath ./data.zip -BypassPlugins all
```

**Lifecycle:** Tools declares minimum CLI version. Tools handles CLI invocation details.

### ALM Workflows (ppds-alm)

**Use when:**
- Automating in CI/CD (GitHub Actions, Azure DevOps)
- Want declarative, reusable pipelines
- Don't want to write custom scripts

**Example:**

```yaml
jobs:
  migrate:
    uses: joshsmithxrm/ppds-alm/.github/workflows/data-migrate.yml@v1
    with:
      environment-url: 'https://myorg.crm.dynamics.com'
    secrets:
      client-id: ${{ secrets.CLIENT_ID }}
```

**Lifecycle:** Pin to version tags. ALM uses CLI directly (not PPDS.Tools).

## Decision Matrix

| Scenario | Consume | Why |
|----------|---------|-----|
| Build custom C# migration app | Library | Full control, in-process, can extend |
| Learn how to use the library | Read CLI source | CLI is the reference implementation |
| Run migrations from terminal | CLI | Simple, self-documenting |
| Script migrations in PowerShell | Tools cmdlets | PowerShell-native UX |
| Automate in CI/CD | ALM workflows | Declarative, reusable (uses CLI directly) |
| Quick one-off migration | CLI | No code needed |
| Embed migrations in larger C# system | Library | Compose with other logic |

## Why Tools Wraps CLI (Not Library)

**Summary:**
- **Process isolation** - No .NET assembly loading conflicts in PowerShell
- **Stable interface** - CLI flags are a stable contract; library APIs may evolve faster
- **Simpler dependencies** - CLI is a single tool install, not NuGet package chain
- **Consistent behavior** - Same code path whether user runs CLI directly or via PowerShell

## Why ALM Uses CLI Directly (Not Tools)

- **Simpler dependency chain** - One fewer layer reduces complexity and potential issues
- **Cross-platform** - CLI works identically on Linux/macOS/Windows runners without PowerShell 7 requirement
- **Faster execution** - No PowerShell module loading overhead in CI/CD pipelines
- **Easier debugging** - CLI output is directly visible in workflow logs
- **Tools is for PowerShell users** - People who prefer PowerShell syntax over CLI flags

## Version Coordination

Each layer declares minimum versions of its dependencies:

| Layer | Depends On | Declared Where |
|-------|------------|----------------|
| ALM workflows | PPDS.Cli | Workflow `dotnet tool install` command |
| PPDS.Tools | PPDS.Cli | `Get-PpdsCli` helper |
| CLI | Library packages | PackageReference in csproj |

Breaking changes flow upward:
1. Library breaks → CLI updates → Tools updates (and ALM updates)
2. CLI flags break → Tools updates (and ALM updates)

:::note
ALM and Tools both depend on CLI independently. They don't depend on each other.
:::
