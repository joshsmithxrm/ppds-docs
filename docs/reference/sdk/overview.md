---
sidebar_position: 1
title: SDK Overview
description: .NET SDK packages for Power Platform Developer Suite
---

# SDK Reference

The Power Platform Developer Suite SDK provides .NET libraries for Power Platform development, data migration, and plugin registration.

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| `PPDS.Plugins` | 2.0.0 | Plugin attributes for declarative registration |
| `PPDS.Migration` | 1.0.0-beta | High-performance data export/import |
| `PPDS.Dataverse` | 1.0.0-beta | Connection pooling and bulk operations |
| `PPDS.Auth` | 1.0.0-beta | Authentication profiles and credentials |

## PPDS.Plugins

Declarative plugin registration using attributes.

### Installation

```bash
dotnet add package PPDS.Plugins
```

### Usage

```csharp
using PPDS.Plugins;

[PluginStep(
    Message = "Create",
    EntityLogicalName = "account",
    Stage = Stage.PreOperation,
    Mode = Mode.Synchronous)]
public class CreateAccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Plugin logic
    }
}

[PluginStep(
    Message = "Update",
    EntityLogicalName = "contact",
    Stage = Stage.PostOperation,
    FilteringAttributes = new[] { "firstname", "lastname" })]
[PluginImage(
    ImageType = ImageType.PreImage,
    Name = "PreImage",
    Attributes = new[] { "firstname", "lastname" })]
public class UpdateContactPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Access pre-image from context
    }
}
```

### Attributes

| Attribute | Purpose |
|-----------|---------|
| `PluginStep` | Define message, entity, stage, mode |
| `PluginImage` | Define pre/post images |

## PPDS.Migration

High-performance data migration engine.

### Installation

```bash
dotnet add package PPDS.Migration
```

### Features

- Parallel export with connection pooling
- Dependency-aware tiered import
- CMT format compatibility
- Resume from failures

### Usage

```csharp
using PPDS.Migration;

// Export data
var exporter = new DataverseExporter(connectionString);
await exporter.ExportAsync(new ExportOptions
{
    Entities = new[] { "account", "contact" },
    OutputPath = "./export",
    MaxParallelism = 4
});

// Import data
var importer = new DataverseImporter(connectionString);
await importer.ImportAsync(new ImportOptions
{
    InputPath = "./export",
    BypassPlugins = true,
    MaxParallelism = 4
});
```

## PPDS.Dataverse

Low-level Dataverse connectivity with pooling and resilience.

### Installation

```bash
dotnet add package PPDS.Dataverse
```

### Features

- Connection pooling
- Automatic retry with exponential backoff
- Bulk operation support
- Query pagination

## PPDS.Auth

Authentication infrastructure shared by CLI and libraries.

### Installation

```bash
dotnet add package PPDS.Auth
```

### Features

- Profile storage (encrypted credentials)
- Multiple credential providers (interactive, client secret, certificate)
- Global Discovery Service integration

## Next Steps

- [Installation](/docs/getting-started/installation)
- [Authentication Guide](/docs/guides/authentication)
- [CLI Reference](/docs/reference/cli/overview)
