---
sidebar_position: 1
title: Authentication
description: Configure authentication for Power Platform environments
---

# Authentication

Connect PPDS to your Power Platform environment using one of the supported authentication methods.

## Quick Start (Interactive)

For development, use interactive browser login:

```bash
ppds auth login
```

This opens your default browser for Microsoft authentication. After signing in, your credentials are cached securely.

## Authentication Methods

### Interactive Login

Best for local development. Opens a browser for Microsoft sign-in.

```bash
ppds auth login --environment https://yourorg.crm.dynamics.com
```

### Service Principal (Client Credentials)

Best for CI/CD pipelines and automation.

```bash
ppds auth login \
  --client-id <app-id> \
  --client-secret <secret> \
  --tenant-id <tenant-id> \
  --environment https://yourorg.crm.dynamics.com
```

#### Setting up a Service Principal

1. Register an application in Azure AD
2. Create a client secret
3. Grant the application user access in Power Platform admin center
4. Assign appropriate security roles

### Connection String

For compatibility with existing tools:

```bash
ppds auth login --connection-string "AuthType=ClientSecret;Url=https://yourorg.crm.dynamics.com;ClientId=<app-id>;ClientSecret=<secret>"
```

## SDK Authentication

### Using DefaultAzureCredential

Works automatically with Azure CLI, managed identities, and environment variables:

```csharp
using Azure.Identity;
using PowerPlatformDeveloperSuite.SDK;

var credential = new DefaultAzureCredential();
var client = new PowerPlatformClient(options =>
{
    options.EnvironmentUrl = "https://yourorg.crm.dynamics.com";
    options.Credential = credential;
});
```

### Using Client Credentials

```csharp
var client = new PowerPlatformClient(options =>
{
    options.EnvironmentUrl = "https://yourorg.crm.dynamics.com";
    options.ClientId = "<your-app-id>";
    options.ClientSecret = "<your-secret>";
    options.TenantId = "<your-tenant-id>";
});
```

### With Dependency Injection

```csharp
services.AddPowerPlatformClient(options =>
{
    options.EnvironmentUrl = Configuration["PowerPlatform:Url"];
    options.ClientId = Configuration["PowerPlatform:ClientId"];
    options.ClientSecret = Configuration["PowerPlatform:ClientSecret"];
    options.TenantId = Configuration["PowerPlatform:TenantId"];
});
```

## Environment Variables

Configure authentication via environment variables for CI/CD:

| Variable | Description |
|----------|-------------|
| `PPDS_ENVIRONMENT_URL` | Power Platform environment URL |
| `PPDS_CLIENT_ID` | Azure AD application (client) ID |
| `PPDS_CLIENT_SECRET` | Application client secret |
| `PPDS_TENANT_ID` | Azure AD tenant ID |

```bash
export PPDS_ENVIRONMENT_URL="https://yourorg.crm.dynamics.com"
export PPDS_CLIENT_ID="00000000-0000-0000-0000-000000000000"
export PPDS_CLIENT_SECRET="your-secret"
export PPDS_TENANT_ID="00000000-0000-0000-0000-000000000000"

ppds auth login --use-env
```

## Verify Connection

Test your authentication:

```bash
ppds auth status
```

Expected output:

```
Connected to: https://yourorg.crm.dynamics.com
User: user@contoso.com
Auth method: Interactive
Token expires: 2024-01-15 14:30:00
```

## Troubleshooting

### "AADSTS50011: Reply URL mismatch"

Your Azure AD app registration is missing the required redirect URI. Add `http://localhost` to the **Mobile and desktop applications** platform.

### "Insufficient privileges"

The authenticated user or service principal lacks required security roles. Assign at least **System Customizer** for read operations or **System Administrator** for full access.

### Token caching issues

Clear the cached credentials:

```bash
ppds auth logout
ppds auth login
```

## Next Steps

- [CLI Command Reference](/docs/reference/cli/overview)
- [SDK Overview](/docs/reference/sdk/overview)
