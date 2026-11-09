---
title: Review versioned plugin registration
description: Choose legacy preservation or explicit nonsecret reconciliation
---

# Review versioned plugin registration

The approved release candidate adds registration version 2.0. Final source,
capture provenance and public availability remain separate release gates. Keep
the dated [plugin package guide](./plugin-packages.md) for package/framework and
reference-cache behavior already published in CLI 1.4.2.

Missing version or version 1.0 keeps legacy optional-field preservation. Version
2.0 explicitly manages supported nonsecret fields and documented PPDS defaults.
Unknown versions fail before connection. Review the defaults before opting in:

```text
ppds plugins extract --input <reviewed-plugin.dll> --output <owned-registrations.json> --registration-version 2.0
```

Without the flag, extraction retains the existing file version or uses 1.0.
Review the resulting JSON and deployment preview before a separately authorized
write. Bind `schemas/plugin-registration.schema.json` to the exact final core
source in capture provenance. Schema validity does not prove target feasibility.

Cleared filtering and all-attribute images can broaden workload. Version 1.0
omission and explicit Update empty-string clears retain their distinctions.
Secure input stays write-only and cannot be verified for equality by diff.

Diff retains JSON `data[]` and adds status/coverage metadata. Exit 0 is completed
and equal; exit 1 is completed drift; exit 2 is incomplete comparison. Coverage
does not include every assembly/package byte, solution membership or Custom API.

The existing update-step flags remain `--can-be-bypassed`, `--can-use-readonly`
and `--invocation-source`. The daemon/VS Code step editor carries the supported
settings too. These fields add no MCP tools and do not imply identical fields
on unrelated CLI/MCP result DTOs. Use actual captured help for flag syntax.

## Review cleanup authority

The registration file version selects cleanup behavior. Version 1.0 preserves
legacy `plugins deploy --clean` orphan-step cleanup and `plugins clean`
orphan-step/empty-type cleanup. Version 2.0 uses the same image-only planner
for both commands; ordinary version-2 deploy does not independently delete.
Version-2 cleanup retains steps, types, assemblies and packages.

Every configured version-2 step must contain a complete explicit `images`
list. `images: []` permits clearing that step's owned images; omission or
duplicate/case-variant list properties fail validation before writes. The
whole requested scope is planned before mutation. Package ownership requires
validated package identity and the selected package/assembly chain, not names
or solution membership alone. Dry-run reports exact image and parent IDs.

Fresh ownership and protection checks precede each planned image deletion.
Unknown, hidden, managed, noncustomizable or ambiguous targets fail visibly;
new unplanned images remain. These checks are not an atomic conditional delete.
Inspect acknowledged and dispatched-unknown effects after failure or
cancellation. Later calls stop; no automatic rollback or whole-environment
equality is promised. Live persisted deploy-to-diff acceptance remains a
separate gate from mock/command validation.
