---
sidebar_position: 1
title: SDK Overview
description: .NET SDK reference for Power Platform Developer Suite
---

# SDK Reference

The Power Platform Developer Suite SDK provides a modern .NET interface for Power Platform development.

## Packages

| Package | Description |
|---------|-------------|
| `PowerPlatformDeveloperSuite.SDK` | Core SDK with client and services |
| `PowerPlatformDeveloperSuite.SDK.Extensions` | DI extensions and configuration |

## Quick Start

```csharp
using PowerPlatformDeveloperSuite.SDK;

// Create a client
var client = new PowerPlatformClient(options =>
{
    options.EnvironmentUrl = "https://yourorg.crm.dynamics.com";
});

// Authenticate
await client.AuthenticateAsync();

// Use the client
var solutions = await client.Solutions.GetAllAsync();
```

## PowerPlatformClient

The main entry point for SDK operations.

### Constructor

```csharp
public PowerPlatformClient(Action<PowerPlatformClientOptions> configure)
```

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `Solutions` | `ISolutionService` | Solution operations |
| `Entities` | `IEntityService` | Entity operations |
| `Plugins` | `IPluginService` | Plugin operations |
| `WebResources` | `IWebResourceService` | Web resource operations |
| `IsAuthenticated` | `bool` | Authentication status |

### Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `AuthenticateAsync()` | `Task` | Authenticate with the environment |
| `ExecuteAsync<T>(request)` | `Task<T>` | Execute a custom request |

## PowerPlatformClientOptions

Configuration options for the client.

| Property | Type | Description |
|----------|------|-------------|
| `EnvironmentUrl` | `string` | Target environment URL (required) |
| `ClientId` | `string` | Azure AD application ID |
| `ClientSecret` | `string` | Application client secret |
| `TenantId` | `string` | Azure AD tenant ID |
| `Credential` | `TokenCredential` | Azure.Identity credential |
| `Timeout` | `TimeSpan` | Request timeout (default: 2 min) |
| `MaxRetries` | `int` | Max retry attempts (default: 3) |

## Dependency Injection

Register the client with the DI container:

```csharp
using PowerPlatformDeveloperSuite.SDK.Extensions;

services.AddPowerPlatformClient(options =>
{
    options.EnvironmentUrl = "https://yourorg.crm.dynamics.com";
    options.ClientId = configuration["PowerPlatform:ClientId"];
    options.ClientSecret = configuration["PowerPlatform:ClientSecret"];
    options.TenantId = configuration["PowerPlatform:TenantId"];
});
```

Inject and use:

```csharp
public class MyService
{
    private readonly IPowerPlatformClient _client;

    public MyService(IPowerPlatformClient client)
    {
        _client = client;
    }

    public async Task DoWorkAsync()
    {
        var solutions = await _client.Solutions.GetAllAsync();
    }
}
```

## Solution Service

### GetAllAsync

```csharp
Task<IReadOnlyList<Solution>> GetAllAsync(
    bool includeManaged = false,
    CancellationToken cancellationToken = default)
```

### GetByNameAsync

```csharp
Task<Solution?> GetByNameAsync(
    string uniqueName,
    CancellationToken cancellationToken = default)
```

### ExportAsync

```csharp
Task<byte[]> ExportAsync(
    string uniqueName,
    bool managed = false,
    CancellationToken cancellationToken = default)
```

### ImportAsync

```csharp
Task<ImportResult> ImportAsync(
    byte[] solutionZip,
    ImportOptions? options = null,
    CancellationToken cancellationToken = default)
```

## Entity Service

### GetMetadataAsync

```csharp
Task<EntityMetadata> GetMetadataAsync(
    string logicalName,
    CancellationToken cancellationToken = default)
```

### QueryAsync

```csharp
Task<IReadOnlyList<Entity>> QueryAsync(
    string fetchXml,
    CancellationToken cancellationToken = default)
```

## Error Handling

```csharp
try
{
    await client.Solutions.ExportAsync("MySolution");
}
catch (PowerPlatformAuthenticationException ex)
{
    // Handle authentication errors
    Console.WriteLine($"Auth failed: {ex.Message}");
}
catch (PowerPlatformException ex)
{
    // Handle general errors
    Console.WriteLine($"Error: {ex.Message}");
    Console.WriteLine($"Error Code: {ex.ErrorCode}");
}
```

## Next Steps

- [Installation](/docs/getting-started/installation)
- [Authentication Guide](/docs/guides/authentication)
- [CLI Reference](/docs/reference/cli/overview)
