---
sidebar_position: 1
title: Authentication
description: Configure authentication for Power Platform environments
---

# Authentication

Power Platform Developer Suite (PPDS) uses profile-based authentication. You
create a profile once — interactively, with a service principal, with a
certificate, or via federated/managed identity — and every subsequent CLI or
library call reuses that profile. Profiles are stored per-machine and secrets
are kept in the OS secure credential store.

## Quick start (interactive)

For local development, run `ppds auth create` with no flags. PPDS opens the
system browser for Microsoft Entra sign-in, or falls back to device code if a
browser is unavailable.

```bash
ppds auth create
```

After sign-in, PPDS saves the profile, marks it active, and prints the
identity, cloud, and (if resolved) environment. From that point on, every
`ppds` command uses this profile until you select a different one.

## Profile management

The `ppds auth` command group manages profiles. Every subcommand operates on
profiles stored locally — none of them initiate a network login except
`create`.

| Subcommand | Purpose |
|------------|---------|
| `create`   | Create and store a new authentication profile. |
| `list`     | List all profiles and show which one is active. |
| `select`   | Make an existing profile active (by `--index` or `--name`). |
| `delete`   | Delete a profile and its stored credentials. |
| `update`   | Change a profile's name or default environment. |
| `name`     | Rename an existing profile. |
| `clear`    | Delete all profiles, token caches, and stored credentials. |
| `who`      | Show the current active profile, identity, and token status. |

Profile names are optional, limited to 30 characters, and must start and end
with a letter or number.

## Auth methods

`ppds auth create` infers the auth method from the flags you pass. Every
method supports `--cloud` (values: `Public`, `UsGov`, `UsGovHigh`, `UsGovDod`,
`China`; default `Public`) and an optional `--name`.

### Interactive browser

Best for local development on a machine with a GUI. Default when no other auth
flags are supplied.

```bash
ppds auth create --environment https://yourorg.crm.dynamics.com
```

`--environment` (short: `-env`) accepts a URL, environment ID, unique name, or
a partial display name — PPDS resolves partial names via Global Discovery.

### Device code

Use on headless machines, remote shells, or containers where no browser is
available.

```bash
ppds auth create --deviceCode --tenant <tenant-id>
```

PPDS prints a verification URL and code. Open the URL on any device, enter the
code, and complete sign-in there.

### Service principal (client secret)

Best for long-running automation where a secret can be rotated.

```bash
ppds auth create \
  --applicationId <app-id> \
  --clientSecret <secret> \
  --tenant <tenant-id> \
  --environment https://yourorg.crm.dynamics.com
```

Service principals cannot use Global Discovery, so `--environment` must be a
full Dataverse URL.

### Service principal (certificate file)

Stronger than a client secret — the private key never leaves the filesystem.

```bash
ppds auth create \
  --applicationId <app-id> \
  --certificateDiskPath /path/to/cert.pfx \
  --certificatePassword <pfx-password> \
  --tenant <tenant-id> \
  --environment https://yourorg.crm.dynamics.com
```

`--certificatePassword` is optional if the PFX is not password-protected.

### Service principal (certificate store)

Windows only. Uses a certificate already installed in the current user's
personal store.

```bash
ppds auth create \
  --applicationId <app-id> \
  --certificateThumbprint <40-char-thumbprint> \
  --tenant <tenant-id> \
  --environment https://yourorg.crm.dynamics.com
```

### Managed identity

For code running on an Azure resource (VM, App Service, Functions, AKS) with a
system-assigned or user-assigned managed identity.

```bash
# System-assigned
ppds auth create --managedIdentity --environment https://yourorg.crm.dynamics.com

# User-assigned (pass the managed identity's client ID)
ppds auth create \
  --managedIdentity \
  --applicationId <user-assigned-client-id> \
  --environment https://yourorg.crm.dynamics.com
```

### GitHub Federation

For GitHub Actions workflows using workload identity federation — no secrets
in the repo.

```bash
ppds auth create \
  --githubFederated \
  --applicationId <app-id> \
  --tenant <tenant-id> \
  --environment https://yourorg.crm.dynamics.com
```

Configure a federated credential on the app registration targeting your GitHub
repo and workflow. The Actions runner must request an OIDC token
(`id-token: write` permission).

### Azure DevOps Federation

For Azure Pipelines tasks using workload identity federation.

```bash
ppds auth create \
  --azureDevOpsFederated \
  --applicationId <app-id> \
  --tenant <tenant-id> \
  --environment https://yourorg.crm.dynamics.com
```

Configure a federated credential on the app registration targeting your ADO
service connection.

## Azure AD setup (for service principal)

Before creating a service principal profile, complete these four steps in the
Azure portal and Power Platform admin center:

1. **Register an application** in Microsoft Entra ID. Record the Application
   (client) ID and Directory (tenant) ID.
2. **Create a client secret** (or upload a certificate) under *Certificates &
   secrets*.
3. **Grant Power Platform admin access** — in the Power Platform admin
   center, add the app registration as an *Application user* on the target
   environment.
4. **Assign a security role** (e.g., *System Customizer* for read, *System
   Administrator* for full access) to that application user.

## Environment variable auth (CI/CD)

For CI/CD, setting environment variables is cleaner than passing secrets on
the command line (where they end up in shell history and logs). When all four
required variables are set, PPDS auto-authenticates without reading any stored
profile.

| Variable                | Required | Description                        |
|-------------------------|----------|------------------------------------|
| `PPDS_CLIENT_ID`        | Yes      | Application (client) ID.           |
| `PPDS_CLIENT_SECRET`    | Yes      | Client secret.                     |
| `PPDS_TENANT_ID`        | Yes      | Directory (tenant) ID.             |
| `PPDS_ENVIRONMENT_URL`  | Yes      | Full Dataverse URL (`https://…`).  |
| `PPDS_CLOUD`            | No       | `Public` (default), `UsGov`, `UsGovHigh`, `UsGovDod`, `China`. |

All four required variables must be set together. Setting only one, two, or
three produces an error rather than falling back to a stored profile — this
prevents surprising behavior in CI.

```yaml
# GitHub Actions
- name: Deploy solution
  env:
    PPDS_CLIENT_ID: ${{ secrets.PPDS_CLIENT_ID }}
    PPDS_CLIENT_SECRET: ${{ secrets.PPDS_CLIENT_SECRET }}
    PPDS_TENANT_ID: ${{ secrets.PPDS_TENANT_ID }}
    PPDS_ENVIRONMENT_URL: ${{ secrets.PPDS_ENVIRONMENT_URL }}
  run: ppds solution import ./out/MySolution.zip
```

## Library authentication (C#)

The `PPDS.Auth` library exposes credential providers directly. Each provider is disposable
and produces an authenticated `ServiceClient` via `CreateServiceClientAsync`.
Choose the provider that matches your auth method.

### Client secret

```csharp
using PPDS.Auth.Cloud;
using PPDS.Auth.Credentials;

using ICredentialProvider provider = new ClientSecretCredentialProvider(
    applicationId: "<app-id>",
    clientSecret: "<secret>",
    tenantId: "<tenant-id>",
    cloud: CloudEnvironment.Public);

using var client = await provider.CreateServiceClientAsync(
    "https://yourorg.crm.dynamics.com",
    cancellationToken);
```

### Certificate file

```csharp
using ICredentialProvider provider = new CertificateFileCredentialProvider(
    applicationId: "<app-id>",
    certificatePath: "/path/to/cert.pfx",
    certificatePassword: "<pfx-password>",
    tenantId: "<tenant-id>",
    cloud: CloudEnvironment.Public);

using var client = await provider.CreateServiceClientAsync(
    "https://yourorg.crm.dynamics.com",
    cancellationToken);
```

### Interactive browser (desktop tools)

```csharp
using ICredentialProvider provider = new InteractiveBrowserCredentialProvider(
    cloud: CloudEnvironment.Public,
    tenantId: "<tenant-id>");

using var client = await provider.CreateServiceClientAsync(
    "https://yourorg.crm.dynamics.com",
    cancellationToken);
```

Other providers follow the same pattern:
`DeviceCodeCredentialProvider`, `CertificateStoreCredentialProvider`,
`ManagedIdentityCredentialProvider`, `GitHubFederatedCredentialProvider`,
`AzureDevOpsFederatedCredentialProvider`, `UsernamePasswordCredentialProvider`.

### Dependency injection

To register the profile/credential stores for apps that manage profiles
programmatically, call `AddAuthServices`:

```csharp
using Microsoft.Extensions.DependencyInjection;
using PPDS.Auth.DependencyInjection;

services.AddAuthServices();
```

This registers `ProfileStore`, `EnvironmentConfigStore`, and
`ISecureCredentialStore` as singletons. For most library consumers, instantiating
a provider directly (as shown above) is simpler.

## Verify connection

Run `ppds auth who` to show the active profile, identity, token status, and
environment.

```bash
ppds auth who
```

Example output:

```
Connected as user@contoso.com

Method:                      InteractiveBrowser
Type:                        Msal
Cloud:                       Public
Tenant Id:                   00000000-0000-0000-0000-000000000000
User:                        user@contoso.com
Entra ID Object Id:          11111111-1111-1111-1111-111111111111
Token Expires:               2026-04-17 14:30:00 +00:00
Authority:                   https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000
Environment Id:              22222222-2222-2222-2222-222222222222
Organization Friendly Name:  Contoso Dev
```

Use `ppds auth who --output-format json` for machine-readable output.

## Troubleshooting

### "AADSTS50011: Reply URL mismatch"

The app registration is missing the required redirect URI. Under
*Authentication* > *Platform configurations*, add `http://localhost` to the
**Mobile and desktop applications** platform.

### "Service principals require a full environment URL"

Service principals cannot access Global Discovery, so they cannot resolve
partial names like `Dev` or `Production`. Pass the full Dataverse URL to
`--environment` (for example, `https://yourorg.crm.dynamics.com`).

### "Insufficient privileges"

The authenticated identity lacks a security role on the target environment.
Add the user or application user in the Power Platform admin center and
assign at least *System Customizer* (read) or *System Administrator* (full).

### Stale tokens or corrupted state

Clear all profiles, cached tokens, and stored credentials, then re-create a
profile:

```bash
ppds auth clear
ppds auth create
```

## Next steps

- [CLI Command Reference](/docs/reference/cli/overview)
- [Libraries Overview](/docs/reference/libraries/overview)
