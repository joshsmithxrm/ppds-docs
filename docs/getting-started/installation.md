---
sidebar_position: 1
title: Installation
description: Install the PPDS CLI and libraries
---

# Installation

Get up and running with Power Platform Developer Suite in under 5 minutes.

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

### Package References

```xml
<PackageReference Include="PPDS.Plugins" Version="2.*" />
<PackageReference Include="PPDS.Migration" Version="1.*-*" />
<PackageReference Include="PPDS.Dataverse" Version="1.*-*" />
<PackageReference Include="PPDS.Auth" Version="1.*-*" />
```

## Next Steps

- [Configure authentication](/docs/guides/authentication) to connect to your environment
- [Explore the CLI commands](/docs/reference/cli)
- [Learn the libraries](/docs/reference/libraries)
