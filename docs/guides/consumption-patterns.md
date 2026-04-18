---
title: Consumption Patterns
sidebar_position: 5
description: When to use the library vs the CLI for PPDS functionality
---

# PPDS Consumption Patterns

When to use the NuGet libraries vs the CLI for PPDS functionality.

## Architecture Layers

The PPDS ecosystem provides functionality at two layers:

```
┌─────────────────────────────────────────────────────────────┐
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
services.AddDataverseMigration();
var exporter = provider.GetRequiredService<IExporter>();
await exporter.ExportAsync(schemaPath, outputPath, options);
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
dotnet tool install -g PPDS.Cli
ppds  # Launches interactive TUI
```

The TUI guides you through authentication, entity selection, and export/import workflows interactively.

**Lifecycle:** Install a tool version. CLI maintains backwards-compatible flags. Library can change internally.

## Decision Matrix

| Scenario | Consume | Why |
|----------|---------|-----|
| Build custom C# migration app | Library | Full control, in-process, can extend |
| Learn how to use the library | Read CLI source | CLI is the reference implementation |
| Run migrations from terminal | CLI | Simple, self-documenting |
| Quick one-off migration | CLI | No code needed |
| Embed migrations in larger C# system | Library | Compose with other logic |
| Automate in CI/CD | CLI | Install the tool, invoke commands |

## Version Coordination

The CLI depends on the libraries via `PackageReference` in its csproj. Breaking changes flow upward: library breaks → CLI updates.
