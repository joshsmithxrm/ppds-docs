---
sidebar_position: 1
title: Installation
description: Install the PPDS CLI and libraries
---

# Installation

Install the published Power Platform Developer Suite (PPDS) CLI and libraries. The [October maintenance release](../reference/releases/maintenance-2026-10.md) includes CLI 1.4.2, MCP 1.2.2, and Extension 1.6.2.

## Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) or later
- A Microsoft Power Platform environment

## CLI Installation

Install the CLI as a global .NET tool:

```bash
dotnet tool install --global PPDS.Cli
```

Verify the installation:

```bash
ppds --version
```

### Update the CLI

```bash
dotnet tool update --global PPDS.Cli
```

### Uninstall

```bash
dotnet tool uninstall --global PPDS.Cli
```

## Libraries

Add PPDS libraries to your .NET project based on your needs:

### Plugin Development

```bash
dotnet add package PPDS.Plugins
```

Provides `PluginStep` and `PluginImage` attributes for declarative plugin registration.

### Data Migration

```bash
dotnet add package PPDS.Migration
```

High-performance data export/import with parallel processing and CMT compatibility.

### Dataverse Connectivity

```bash
dotnet add package PPDS.Dataverse
```

Connection pooling, bulk operations, and resilience for Dataverse.

### Authentication

```bash
dotnet add package PPDS.Auth
```

Profile storage, credential providers, and Global Discovery Service integration.

### SQL query engine

```bash
dotnet add package PPDS.Query
```

SQL execution, FetchXML translation, and an ADO.NET provider for Dataverse.

### Package References

These are the published stable library versions verified on October 30, 2026.
Use the reference for the library you need; plugin projects target .NET Framework,
while the other libraries target .NET 8, 9, and 10.

```xml
<PackageReference Include="PPDS.Plugins" Version="3.0.1" />
<PackageReference Include="PPDS.Migration" Version="1.2.2" />
<PackageReference Include="PPDS.Dataverse" Version="1.3.2" />
<PackageReference Include="PPDS.Auth" Version="1.1.2" />
<PackageReference Include="PPDS.Query" Version="1.0.2" />
```

`PPDS.Plugins` retains a `net462` compatibility target and can be referenced by
plugin projects targeting .NET Framework 4.6.2 through 4.8. This library target
is distinct from the asset groups accepted when deploying a NuGet plugin
package. See [plugin package guidance](../guides/plugin-packages.md) for the
CLI 1.4.2's `net48` acceptance and loose-assembly requirements.

## Next Steps

- [Install skills for AI agents](ai-agent-skills.md) for Claude Code or GitHub Copilot CLI
- [Configure authentication](/docs/guides/authentication) to connect to your environment
- [Explore the CLI commands](/docs/reference/cli)
- [Learn the libraries](/docs/reference/libraries)
