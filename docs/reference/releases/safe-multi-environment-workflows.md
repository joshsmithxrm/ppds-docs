---
title: Safe multi-environment workflows release candidate
description: Approved release versions, upgrade guidance and validation status before publication
---

# Safe multi-environment workflows release candidate

This page describes an **unpublished release candidate** of Power Platform Developer Suite (PPDS). Core [PR #1495](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1495) is merged and validated at `5e9d5acc7c154f84a9216e18ab695d85c254dc2e`. The [docs](https://github.com/joshsmithxrm/ppds-docs/pull/31) and [skills](https://github.com/joshsmithxrm/ppds-skills/pull/23) drafts remain held for coordinated publication. Release preparation and approval remain separate gates, tracked in [release #1489](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/1489). The [October maintenance release](maintenance-2026-10.md) remains the preceding published baseline.

## Approved versions and upgrade requirements

The November 1 release decision selects Auth **1.2.0**, Dataverse **1.4.0**, Plugins **3.1.0**, Query **1.1.0**, Migration **1.3.0**, CLI **1.5.0**, MCP **1.3.0**, Extension **1.8.0 stable** and Skills **0.2.0**. The coordinated documentation label is **v1.8.0**. These versions are approved for preparation; they are not yet published. Final references and Skills captures must be regenerated and verified against the actual stable artifacts before their public landing.

CLI 1.5.0 and MCP 1.3.0 use an explicitly approved, one-release safety-hardening exception to the normal major-version rule for changed defaults. This is not a claim of complete backward compatibility:

- Protected CLI form writes require `--confirm-env` with the resolved environment URL. MCP form writes require `confirmEnvironment`; table publication also requires `confirmPublishEntity`.
- Ambiguous form selectors are rejected. MCP sessions retain their captured startup target; changing persisted defaults does not redirect an existing session.
- Update the Extension and its bundled daemon together. Authentication identity mismatches require deliberate rebind or restart rather than fallback to another identity.
- Custom .NET consumers embedding CLI/MCP implementation assemblies must adapt to changed form and web-resource service signatures. The five standalone library source/API baselines remain unchanged; those libraries remain the supported embedding surface for this release decision.

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

Earlier candidate validation passed unmanaged and managed form edit/publication roundtrips and locked-form rejection, with complete form fixture cleanup. Earlier core flow checks passed 20 actual candidate CLI invocations across unmanaged and managed single-flow changes, unchanged-state results, solution batches and isolation from outside-solution flows. Those earlier flow fixtures were fully cleaned up, with no unknown submissions or cleanup errors; these results are historical evidence rather than a fresh result for the combined candidate below.

The combined candidate passed the live unbound-reference regression: planning and execution reported the blocked flow, execution left the eligible control flow not attempted, and both flows remained Off with unchanged versions. All five fixture resources were deleted and their absence verified, with no unknown submissions or cleanup errors. The preceding attempt remains recorded as failed during cleanup; its resources were removed through a separately reviewed recovery before the fresh passing run. Dataverse had rejected the earlier nonexistent-reference fixture during provisioning with platform error `0x80095005`, so the approved replacement uses an existing but unbound reference.

Live notebook validation passed on Windows VS Code 1.116.0 and 1.144.0 against Dev and the approved temporary QA organization, six bounded identity reads per host (12 total). Approved QA recoverable deletion reached Succeeded at 2026-11-01 22:50:40 UTC; QA was absent from active inventory, seven-day recovery was available, and original Dev remained Ready. This purpose-built live host does not establish shipped-serve entrypoint coverage or remote cancellation timing.

The combined source-candidate reference capture uses product commit `1cba826c6ad6233e41b0d4d5197d0c7c618cd4c7`, CLI `1.4.3-alpha.0.28` and MCP `1.2.3-alpha.0.28`. The MCP generator correction is integrated as `575457225dcbfc84253bcb36c1be8d2bedebba22`. Exact binary and generated-file hashes are recorded in the [capture provenance](https://github.com/joshsmithxrm/ppds-docs/blob/codex/safe-workflows-docs/validation/safe-workflows-provenance.json). That help/schema capture performed no live operations. These bounded results do not establish release readiness or published package availability.

Per-cell notebook targets, general MCP form XML writing, new form layout authoring surfaces and automatic flow activation during import remain outside this increment.
