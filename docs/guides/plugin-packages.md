---
title: Prepare plugin packages and recover extraction
description: Select supported package frameworks and diagnose local reference-cache failures
---

# Prepare plugin packages and recover extraction

Power Platform Developer Suite (PPDS) extracts registration metadata locally
before deploying plugins. This guide describes published **CLI 1.4.2**,
including `net48` package acceptance and protected-cache fixes.

## Choose a framework and deployment path

`PPDS.Plugins` retains its `net462` library target and is compatible with
plugin projects targeting .NET Framework 4.6.2 through 4.8. CLI 1.4.2
accepts NuGet plugin packages containing `lib/net462`, `lib/net471`, or
`lib/net48`. The library's own target does not require every consumer to use
that exact asset group.

A loose plugin assembly must still target a Dataverse-supported .NET Framework
version and be strong-name-signed. Changing packaging alone does not make
`netstandard` or modern `.NET` assemblies deployable. Do not retarget an
unsupported assembly merely to silence a diagnostic without checking its
dependencies and platform compatibility.

Before using the commands, replace `<package.nupkg>`, `<profile>`, and
`<environment-url>` with the reviewed package and target. Extraction reads a
local package; preview and deploy use the configured environment.

```text
ppds plugins extract --input <package.nupkg> --output registrations.json
ppds plugins deploy --config registrations.json --dry-run --profile <profile> --environment <environment-url>
```

Review the registrations and preview before the separately authorized real
deployment. Retain the same package bytes between extraction and deployment;
re-extract after changing the package.

## Resolve package validation errors

CLI 1.4.2 validates one unambiguous primary assembly and its runtime
`IPlugin` types before connection or upload. It verifies SDK/registration
attribute assembly identities and rejects missing configured types, stale
extraction evidence, and ambiguous primaries. A type can implement `IPlugin`
without PPDS registration attributes; that does not invent registration steps.

Fix the reported identity, dependency, or configuration problem locally and
repeat extraction and preview. If a later upload succeeds but expected server
state is missing, inspect that state before retrying. Unregistering is a
separate destructive operation, not an automatic rollback.

## Recover reference extraction

Single-file installs carry .NET Framework reference assemblies. CLI 1.4.2
uses `PPDS/cache/net462-ref/<resource-hash>` beneath the operating system's
local application-data directory. It validates ownership, permissions, and
links before cache reads or repair. Missing or truncated expected files are
restored; a complete cache is reused without rewriting it.

If stderr reports unsafe storage, use protected local user storage and have
the owner or administrator correct the reported ownership or permissions.
Do not grant broad write access, run the CLI elevated as a workaround, or
disable the checks. macOS ACLs granting mutation are conservatively rejected.

Old shared-temp caches are neither read, migrated, nor deleted automatically.
Their presence is not a reason to delete another process's or account's files.
The boundary separates unprivileged OS accounts; it does not defend against
same-account processes, administrators/root, or hostile filesystems. The
completeness check detects absent/truncated files, not arbitrary same-length
modification by an account already inside that boundary.

See the [package validation change](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1414),
[net48 acceptance](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1450),
and [cache isolation change](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1471).
