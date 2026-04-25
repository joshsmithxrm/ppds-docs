---
sidebar_position: 1
title: Libraries Overview
description: .NET libraries for Power Platform Developer Suite
---

# Libraries Reference

The Power Platform Developer Suite (PPDS) ships a set of focused .NET libraries you can compose in your own applications. `PPDS.Auth` resolves credentials, `PPDS.Dataverse` manages connection pools and bulk operations on top of that, `PPDS.Migration` layers dependency-aware export and import on top of the pool, and `PPDS.Plugins` is a standalone `net462` package of attributes for declarative plugin registration. The CLI, MCP server, and VS Code extension are all built on these same libraries.

## Packages

| Package | Version | Target | Description |
|---------|---------|--------|-------------|
| [`PPDS.Auth`](https://www.nuget.org/packages/PPDS.Auth) | `1.0.0-beta.8` | `net8.0;net9.0;net10.0` | Credential providers, auth profiles, DPAPI-encrypted credential store |
| [`PPDS.Dataverse`](https://www.nuget.org/packages/PPDS.Dataverse) | `1.0.0-beta.7` | `net8.0;net9.0;net10.0` | Connection pooling, bulk operations, throttle-aware resilience |
| [`PPDS.Migration`](https://www.nuget.org/packages/PPDS.Migration) | `1.0.0-beta.8` | `net8.0;net9.0;net10.0` | Parallel exporter and tiered importer over CMT-format archives |
| [`PPDS.Plugins`](https://www.nuget.org/packages/PPDS.Plugins) | `2.1.0-beta.1` | `net462` | Declarative attributes for plugin steps, images, and Custom APIs |

The `net462` target on `PPDS.Plugins` is required for plugin assembly compatibility with the Dataverse sandbox. The other packages are multi-targeted at current LTS and STS .NET releases.

## PPDS.Auth

Handles credential acquisition, profile storage, and token caching. Profiles are persisted to disk with DPAPI encryption on Windows and platform keychain integration on other OSes.

### Installation

```bash
dotnet add package PPDS.Auth
```

### Key types

| Type | Purpose |
|------|---------|
| `ICredentialProvider` | Abstraction over all auth flows; returns authenticated `ServiceClient` |
| `CredentialProviderFactory` | Builds an `ICredentialProvider` from an `AuthProfile` |
| `AuthMethod` | Enum of supported flows (9 total — see below) |
| `AuthProfile` | Serialized profile with environment URL, tenant, and auth method |
| `ProfileStore` | File-backed profile collection |
| `ISecureCredentialStore` / `NativeCredentialStore` | Platform-specific secret storage |
| `ProfileEncryption` | DPAPI wrapper used by the profile store |
| `IGlobalDiscoveryService` | Resolves Dataverse environments via Global Discovery |

Supported `AuthMethod` values: `InteractiveBrowser`, `DeviceCode`, `ClientSecret`, `CertificateFile`, `CertificateStore`, `ManagedIdentity`, `GitHubFederated`, `AzureDevOpsFederated`, `UsernamePassword`.

### Usage

Register the shared singletons in DI, then create a provider from a profile:

```csharp
using Microsoft.Extensions.DependencyInjection;
using PPDS.Auth.Credentials;
using PPDS.Auth.DependencyInjection;
using PPDS.Auth.Profiles;

var services = new ServiceCollection();
services.AddAuthServices();

var provider = services.BuildServiceProvider();
var profileStore = provider.GetRequiredService<ProfileStore>();
var credentialStore = provider.GetRequiredService<ISecureCredentialStore>();

var profile = profileStore.Get("dev");
using var credentials = await CredentialProviderFactory.CreateAsync(profile, credentialStore);

using var client = await credentials.CreateServiceClientAsync(profile.EnvironmentUrl);
```

`AddAuthServices` registers `ProfileStore`, `EnvironmentConfigStore`, and `ISecureCredentialStore` as singletons. They are file-backed and intended to be shared for the lifetime of the process.

## PPDS.Dataverse

Connection pooling, bulk operation wrappers, throttle detection, and metadata queries over the Dataverse SDK. Pool connections are keyed by application user, and the pool tracks live degrees-of-parallelism hints from each connection so multi-tenant batch workloads stay within service-protection limits.

### Installation

```bash
dotnet add package PPDS.Dataverse
```

### Key types

| Type | Purpose |
|------|---------|
| `IDataverseConnectionPool` | Checkout-based pool with DOP tracking, throttle retries, and `ExecuteAsync` helper |
| `IPooledClient` | Scoped pool checkout — returns to pool on dispose |
| `DataverseOptions` / `DataverseConnection` | Configuration shape for the pool |
| `IBulkOperationExecutor` | `CreateMultiple` / `UpdateMultiple` / `UpsertMultiple` / `DeleteMultiple` wrappers |
| `IMetadataQueryService` | Cached entity and attribute metadata |
| `IQueryExecutor` | Query execution with pagination |
| `IThrottleTracker` | Per-connection throttle state |

### Usage

```csharp
using Microsoft.Extensions.DependencyInjection;
using PPDS.Dataverse.BulkOperations;
using PPDS.Dataverse.Configuration;
using PPDS.Dataverse.DependencyInjection;
using PPDS.Dataverse.Pooling;

var services = new ServiceCollection();
services.AddDataverseConnectionPool(options =>
{
    options.Connections.Add(new DataverseConnection("Primary", connectionString));
    options.Pool.MaxPoolSize = 50;
});

var provider = services.BuildServiceProvider();
var pool = provider.GetRequiredService<IDataverseConnectionPool>();
var bulk = provider.GetRequiredService<IBulkOperationExecutor>();

await pool.EnsureInitializedAsync();

var result = await bulk.CreateMultipleAsync(
    entityLogicalName: "contact",
    entities: contacts,
    options: new BulkOperationOptions { BatchSize = 1000 });
```

`AddDataverseConnectionPool` has an overload that binds from `IConfiguration`, including multi-environment configs — see the XML docs on [`ServiceCollectionExtensions`](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/src/PPDS.Dataverse/DependencyInjection/ServiceCollectionExtensions.cs) for the full configuration schema.

## PPDS.Migration

Parallel export and dependency-ordered import over CMT-format ZIP archives. Migration does not take raw connection strings — it resolves `IExporter` and `IImporter` from DI on top of a `PPDS.Dataverse` connection pool.

### Installation

```bash
dotnet add package PPDS.Migration
```

### Key types

| Type | Purpose |
|------|---------|
| `IExporter` (default: `ParallelExporter`) | Reads a schema and writes a CMT ZIP |
| `IImporter` (default: `TieredImporter`) | Dependency-graph import with resumable phases |
| `ExportOptions` / `ImportOptions` | Parallelism, bypass flags, date shifting, user mapping |
| `ISchemaGenerator` | Builds a `MigrationSchema` from Dataverse metadata |
| `IProgressReporter` | Streams phase and entity progress |
| `ExportResult` / `ImportResult` | Counts, warnings, errors, timing |

`IExporter.ExportAsync` takes `(string schemaPath, string outputPath, ExportOptions? options, IProgressReporter? progress, CancellationToken cancellationToken)` and returns `Task<ExportResult>`. `IImporter.ImportAsync` takes `(string dataPath, ImportOptions? options, IProgressReporter? progress, CancellationToken cancellationToken)` and returns `Task<ImportResult>`. Both interfaces also expose overloads that take pre-parsed `MigrationSchema` / `MigrationData` + `ExecutionPlan` for reuse across multiple runs.

### Usage

```csharp
using Microsoft.Extensions.DependencyInjection;
using PPDS.Dataverse.Configuration;
using PPDS.Dataverse.DependencyInjection;
using PPDS.Migration.DependencyInjection;
using PPDS.Migration.Export;
using PPDS.Migration.Import;

var services = new ServiceCollection();
services.AddDataverseConnectionPool(options =>
{
    options.Connections.Add(new DataverseConnection("Primary", connectionString));
});
services.AddDataverseMigration();

var provider = services.BuildServiceProvider();
var exporter = provider.GetRequiredService<IExporter>();
var importer = provider.GetRequiredService<IImporter>();

var exportResult = await exporter.ExportAsync(
    schemaPath: "./schema.xml",
    outputPath: "./export/data.zip",
    options: new ExportOptions { MaxDegreeOfParallelism = 8 });

var importResult = await importer.ImportAsync(
    dataPath: "./export/data.zip",
    options: new ImportOptions { BypassCustomPluginExecution = true });
```

`AddDataverseMigration` throws `InvalidOperationException` if `AddDataverseConnectionPool` has not been called first — the importer and exporter require a registered `IDataverseConnectionPool`.

## PPDS.Plugins

Attribute-based plugin registration. Decorate your plugin classes and the CLI (or your own tooling) reads the attributes to register steps, images, and Custom APIs against Dataverse. The package targets `net462` to match the Dataverse plugin sandbox.

### Installation

```bash
dotnet add package PPDS.Plugins
```

### Attributes and enums

| Type | Purpose |
|------|---------|
| `PluginStepAttribute` | Message, entity, stage, mode, filtering, impersonation, bypass, invocation source |
| `PluginImageAttribute` | Pre/post images, attributes, entity alias, step linkage |
| `CustomApiAttribute` | Custom API unique name, binding, function/action, privilege |
| `CustomApiParameterAttribute` | Request/response parameters for a Custom API |
| `PluginStage`, `PluginMode`, `PluginImageType` | Step configuration enums |
| `PluginDeployment`, `PluginInvocationSource` | Deployment target and pipeline source (new in 2.1) |
| `ApiBindingType`, `ApiParameterType`, `ParameterDirection`, `ApiProcessingStepType` | Custom API enums (new in 2.1) |

### What's new in 2.1

`PluginStepAttribute` gained `Deployment`, `RunAsUser`, `CanBeBypassed`, `CanUseReadOnlyConnection`, and `InvocationSource` properties. `CustomApiAttribute` and `CustomApiParameterAttribute` add full Custom API authoring. Existing 2.0 plugins compile unchanged.

### Usage

```csharp
using Microsoft.Xrm.Sdk;
using PPDS.Plugins;

[PluginStep(
    Message = "Update",
    EntityLogicalName = "account",
    Stage = PluginStage.PostOperation,
    Mode = PluginMode.Synchronous,
    FilteringAttributes = "name,telephone1",
    CanUseReadOnlyConnection = false)]
[PluginImage(
    ImageType = PluginImageType.PreImage,
    Name = "PreImage",
    Attributes = "name,telephone1,revenue")]
public class AccountUpdatePlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // context.PreEntityImages["PreImage"] is populated by the registered image
    }
}

[CustomApi(
    UniqueName = "ppds_ProcessOrder",
    DisplayName = "Process Order",
    BindingType = ApiBindingType.Global)]
[CustomApiParameter(
    Name = "OrderId",
    Type = ApiParameterType.Guid,
    Direction = ParameterDirection.Input)]
[CustomApiParameter(
    Name = "ConfirmationNumber",
    Type = ApiParameterType.String,
    Direction = ParameterDirection.Output)]
public class ProcessOrderPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider) { /* ... */ }
}
```

## Versioning

Each library is versioned independently and follows semantic versioning. `PPDS.Plugins` is on the 2.x line because the 1.x attribute surface has shipped; the other libraries are in 1.0 beta. The PPDS CLI pins specific library versions per release, so upgrading the CLI is the simplest way to stay on a known-good set.

Breaking changes are listed in each package's `CHANGELOG.md` in the main repo: [`PPDS.Auth`](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/src/PPDS.Auth/CHANGELOG.md), [`PPDS.Dataverse`](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/src/PPDS.Dataverse/CHANGELOG.md), [`PPDS.Migration`](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/src/PPDS.Migration/CHANGELOG.md), [`PPDS.Plugins`](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/src/PPDS.Plugins/CHANGELOG.md).

## Next steps

- [Authentication guide](/docs/guides/authentication) — profile creation and credential flows
- [CLI reference](/docs/reference/cli) — commands built on these libraries
