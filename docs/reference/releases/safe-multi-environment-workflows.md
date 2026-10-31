---
title: Safe multi-environment workflows candidate
description: Implemented release scope and validation boundaries before publication
---

# Safe multi-environment workflows candidate

This page describes an **unpublished release candidate** of Power Platform Developer Suite (PPDS). Package versions, release readiness and publication require separate verification. The [October maintenance release](maintenance-2026-10.md) remains the preceding published baseline.

## User workflows

| Workflow | Candidate behavior |
|----------|--------------------|
| [MCP form authoring](../../guides/mcp-form-authoring.md) | Inspect stable form/section IDs, preview adding an existing column, save and verify the draft, then explicitly acknowledge table-wide publication. |
| [Notebook environments](../../guides/notebook-environments.md) | Independent notebook bindings, captured execution targets/profile identities, isolated cancellation, and target-labelled outputs. |
| [Flow activation](../../guides/flow-activation.md) | Single-flow or capped named-solution enable/disable, write-free planning, binding checks and verified per-flow outcomes. |
| [Shared environment safety](../../guides/environment-safety.md) | Form and flow writes use explicit target acknowledgement; read-only policy remains enforced. |

## Correctness and reliability fixes

| Issue | Change |
|-------|--------|
| [#1360](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1360) | Plugin deployment retains earlier step errors when a later operation fails; secondary-only filter errors identify the secondary entity. |
| [#1317](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1317) | Plugin diff propagates cancellation through drift reads and comparison loops. |
| [#1314](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1314) | Live deploy/diff polling is bounded and configurable, with elapsed time, attempts and final command diagnostics on timeout. |
| [#1361](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1361) | Update-check regressions use explicit completion and controlled time instead of fixed sleeps. |
| [#1357](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1357) | Relevant Python tests feed the always-reporting `test-status` gate; required-suite failure, cancellation and unintended skips fail the aggregate. |
| [#1240](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1240) | Managed customizable/locked form fixtures and fixture-generation guidance complement retained managed-view tests. Live fixture coverage is tracked separately. |
| [#1236](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1236) | Web resource creation warns about missing or mismatched publisher prefixes in JSON and stderr. It does not silently rename the resource. Missing-update guidance uses the literal `<file>` placeholder. |

The propagation test timeout is configured by `PPDS_TEST_PROPAGATION_TIMEOUT_SECONDS` (default 90; integers 1–900). This controls test infrastructure, not ordinary flow or plugin commands.

Web resource prefixes belong at the resource-name root, before slash-separated folders, for example `contoso_scripts/site.js`. A supplied solution determines the expected publisher prefix. An unresolved solution or publisher remains an error; a naming mismatch is a warning.

## Validation boundaries

Deterministic unit, workflow and native-host checks do not establish live Dataverse behavior. Managed form publication and harmless managed/unmanaged flow roundtrips need approved sandbox fixtures and visible cleanup evidence. Generated reference/capture provenance records the exact candidate used; it is not evidence of a published package.

Per-cell notebook targets, general MCP form XML writing, new form layout authoring surfaces, automatic flow activation during import, and a broad dependency-upgrade bundle remain outside this increment.
