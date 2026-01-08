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
- PowerShell 7+ (for CLI on Windows)

## CLI Installation

Install the CLI as a global .NET tool:

```bash
dotnet tool install --global PowerPlatformDeveloperSuite.CLI
```

Verify the installation:

```bash
ppds --version
```

### Update the CLI

```bash
dotnet tool update --global PowerPlatformDeveloperSuite.CLI
```

### Uninstall

```bash
dotnet tool uninstall --global PowerPlatformDeveloperSuite.CLI
```

## SDK Installation

Add the SDK packages to your .NET project:

```bash
dotnet add package PowerPlatformDeveloperSuite.SDK
dotnet add package PowerPlatformDeveloperSuite.SDK.Extensions
```

Or via the NuGet Package Manager in Visual Studio:

1. Right-click your project in Solution Explorer
2. Select **Manage NuGet Packages**
3. Search for `PowerPlatformDeveloperSuite.SDK`
4. Click **Install**

### Package Reference

```xml
<PackageReference Include="PowerPlatformDeveloperSuite.SDK" Version="1.*" />
<PackageReference Include="PowerPlatformDeveloperSuite.SDK.Extensions" Version="1.*" />
```

## Next Steps

- [Configure authentication](/docs/guides/authentication) to connect to your environment
- [Explore the CLI commands](/docs/reference/cli/overview)
- [Learn the SDK basics](/docs/reference/sdk/overview)
