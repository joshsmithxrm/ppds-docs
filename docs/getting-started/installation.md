---
sidebar_position: 1
title: Installation
description: Install the PPDS CLI and SDK packages
---

# Installation

Get up and running with Power Platform Developer Suite in under 5 minutes.

## Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) or later
- A Microsoft Power Platform environment
- PowerShell 7+ (optional, for PPDS.Tools module)

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

## SDK Packages

Add SDK packages to your .NET project based on your needs:

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

### Package References

```xml
<PackageReference Include="PPDS.Plugins" Version="2.*" />
<PackageReference Include="PPDS.Migration" Version="1.*-*" />
<PackageReference Include="PPDS.Dataverse" Version="1.*-*" />
<PackageReference Include="PPDS.Auth" Version="1.*-*" />
```

## PowerShell Module

For PowerShell scripting, install PPDS.Tools from the PowerShell Gallery:

```powershell
Install-Module PPDS.Tools -AllowPrerelease
```

Import and verify:

```powershell
Import-Module PPDS.Tools
Get-Command -Module PPDS.Tools
```

## Next Steps

- [Configure authentication](/docs/guides/authentication) to connect to your environment
- [Explore the CLI commands](/docs/reference/cli/overview)
- [Learn the SDK basics](/docs/reference/sdk/overview)
