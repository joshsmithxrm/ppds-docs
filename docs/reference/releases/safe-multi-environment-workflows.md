---
title: Safe multi-environment workflows release candidate
description: Approved release versions, upgrade guidance and validation status before publication
---

# Safe multi-environment workflows release candidate

This page describes an **unpublished expanded release candidate**. Final source C, artifact versions, capture hashes and release readiness remain pending. The original three journeys are retained; the additions below require their own current-source checks. Docs31/Skills23 merges remain coordinated distribution actions.

The earlier preparation was based on core PR1495 at `5e9d5acc7c154f84a9216e18ab695d85c254dc2e` and the PR1503 security correction at `7acceffd4150adfd876c7290844309116452a748`. Their dated evidence and the October maintenance baseline below are historical, not current final-C clearance.

## Approved versions and upgrade requirements

The November 1 release decision selects Auth **1.2.0**, Dataverse **1.4.0**, Plugins **3.1.0**, Query **1.1.0**, Migration **1.3.0**, CLI **1.5.0**, MCP **1.3.0**, Extension **1.8.0 stable** and Skills **0.2.0**. The coordinated documentation label is **v1.8.0**. These were the initial preparation targets. Reconcile final artifact versions and public availability before publication; occupied immutable tags must not be silently moved or reused. Auth 1.2.0, Dataverse 1.4.0 and Plugins 3.1.0 tags are already occupied at the earlier `3b29` source. Fix-forward **1.2.1 / 1.4.1 / 3.1.1** are proposals for final review, not published replacements or permission to retag. Final references and Skills captures must be regenerated and verified against the actual stable artifacts before their public landing.

CLI 1.5.0 and MCP 1.3.0 use an explicitly approved, one-release safety-hardening exception to the normal major-version rule for changed defaults. This is not a claim of complete backward compatibility:

- Protected CLI form writes require `--confirm-env` with the resolved environment URL. MCP form writes require `confirmEnvironment`; table publication also requires `confirmPublishEntity`.
- Ambiguous form selectors are rejected. MCP sessions retain their captured startup target; changing persisted defaults does not redirect an existing session.
- Update the Extension and its bundled daemon together. Authentication identity mismatches require deliberate rebind or restart rather than fallback to another identity.
- Custom .NET consumers embedding CLI/MCP implementation assemblies must adapt to changed form and web-resource service signatures. The original exception did not grant a general library API waiver. The expanded Choice fix adds the ignored read-only `OptionDefinition.HasExplicitValue` property while preserving the existing public `int Value` accessors and parameterless constructor. Callers requesting allocation must omit `Value`; setting it to zero now preserves zero. Global-choice MCP results also add `validationMessages`. Final API evidence must include both additive surfaces.

## User workflows

| Workflow | Candidate behavior |
|----------|--------------------|
| [MCP form authoring](../../guides/mcp-form-authoring.md) | Inspect stable form/section IDs, preview adding an existing column, save and verify the draft, then explicitly acknowledge table-wide publication. |
| [Notebook environments](../../guides/notebook-environments.md) | Independent notebook bindings, captured execution targets/profile identities, isolated cancellation, and target-labelled outputs. |
| [Flow activation](../../guides/flow-activation.md) | Single-flow or capped named-solution enable/disable, write-free planning, binding checks and verified per-flow outcomes. |
| [Shared environment safety](../../guides/environment-safety.md) | Forms, nine Views writers and flow writes use explicit target acknowledgement; read-only policy remains enforced. |
| [Explicit CLI form layout](../../guides/form-layout.md) | Same-section retries preserve controls and report accurate outcomes; strict reorder and explicit move retain authored labels, IDs and nested content. Legacy reorder transitions with stderr-only deprecation. |

## Expanded candidate contracts

- [Plugin registration versions](../../guides/plugin-registration.md): explicit version-2 nonsecret defaults, bounded diff outcomes, write-only secure inputs and retained legacy optional-field semantics. Version 2 cleanup uses a shared image-only plan for deploy-with-clean and standalone clean, with explicit image-list authority and parent retention. Version 1 keeps its legacy cleanup behavior. Persisted live acceptance remains separate.
- [CLI transitions](../../guides/cli-transition.md): retain legacy `-e` meaning in this minor release, use long flags or `-env` on every existing environment option, and require both CLI 2.0 and at least 90 days after stable transition before uniform environment alias/removal. No calendar date is invented.
- [Metadata previews and Choice values](../../guides/metadata-previews-and-choices.md): explicit zero is preserved, omitted values allocate on copies, warnings remain visible, finite-label updates retain identity, and schema-delete previews retain observed dependencies while refusing incomplete results. A preview is not a server-feasibility guarantee.
- Distributed native/VSIX CLI uses .NET 10 with a patched servicing floor. The existing five native CLI/four VSIX targets and package8/9/10/Plugins-net462 matrix remain. Native Linux glibc2.27 and VS Code glibc2.28 floors do not establish Microsoft OS support. Exact payload/runtime hashes and supported-OS evidence remain final artifact gates.
- The approved one-release CLI1.5/MCP1.3 exception remains limited to its documented scope; these notes add no general compatibility or security waiver.

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

The expanded reporter scope retains #1465, #1517, #1519, #1520, #1527, #1528, #1529, #1530, #1531, #1532, #1533, #1534, #1535, #1536 and #1541. All 15 reporter issues remain open pending the coordinator's exact-source acceptance review; a passing mock suite or authored guide does not close live acceptance criteria.

The propagation test timeout is configured by `PPDS_TEST_PROPAGATION_TIMEOUT_SECONDS` (default 90; integers 1–900). This controls test infrastructure, not ordinary flow or plugin commands.

Web resource prefixes belong at the resource-name root, before slash-separated folders, for example `contoso_scripts/site.js`. A supplied solution determines the expected publisher prefix. An unresolved solution or publisher remains an error; a naming mismatch is a warning.

## Validation boundaries

### Security preparation

The following dependency and live results are dated evidence. They do not clear the expanded final source or its native/VSIX runtime assets. Current exact-source checks, artifact inventories and remaining issue/security dispositions must be reviewed before publication.

The MCP security correction checks a requested environment URL against the session policy before attempting a direct connection. Ambiguous discovered names are rejected, and the resolved target is checked again before switching. The source review, regression tests and limitations are recorded in the [core security assessment](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/7acceffd4150adfd876c7290844309116452a748/docs/qa/security-review-safe-workflows-2026-11.md).

The dated November 2 documentation dependency remediation reduced the full and production npm audit results from 18 critical and 24 high affected package entries to **zero critical and zero high**. Docusaurus remains on supported 3.x with React 18; builds use Node 24. Three compatibility tests exercise the actual callers of the scoped dependency overrides, alongside typechecking, the production build and local browser checks.

Those dated audits report 18 moderate and three low affected package entries, propagated from two advisories. The minimatch advisory describes an optimization path absent from the installed v3 implementation; the installed SVGR consumer declares deepmerge but does not import it. These findings remain visible, with their reachability assessment and override removal conditions in the [dependency maintenance record](https://github.com/joshsmithxrm/ppds-docs/blob/codex/safe-workflows-docs/tools/dependency-overrides.md). This is not a claim that the audit has no findings.

Documentation CI now blocks high/critical dependency findings before building or capturing pages. Build jobs have read-only repository access, Pages permissions belong only to deployment, and browser capture is isolated from the credentialed job that records validated JSON/PNG artifacts. Local tests verify the permission and artifact boundaries. Actual Pages deployment and credentialed capture recording remain unexecuted until separately authorized. The version-policy exception above does not waive security review.

### Product and reference evidence

Earlier candidate validation passed unmanaged and managed form edit/publication roundtrips and locked-form rejection, with complete form fixture cleanup. Earlier core flow checks passed 20 actual candidate CLI invocations across unmanaged and managed single-flow changes, unchanged-state results, solution batches and isolation from outside-solution flows. Those earlier flow fixtures were fully cleaned up, with no unknown submissions or cleanup errors; these results are historical evidence rather than a fresh result for the combined candidate below.

The combined candidate passed the live unbound-reference regression: planning and execution reported the blocked flow, execution left the eligible control flow not attempted, and both flows remained Off with unchanged versions. All five fixture resources were deleted and their absence verified, with no unknown submissions or cleanup errors. The preceding attempt remains recorded as failed during cleanup; its resources were removed through a separately reviewed recovery before the fresh passing run. Dataverse had rejected the earlier nonexistent-reference fixture during provisioning with platform error `0x80095005`, so the approved replacement uses an existing but unbound reference.

Live notebook validation passed on Windows VS Code 1.116.0 and 1.144.0 against Dev and the approved temporary QA organization, six bounded identity reads per host (12 total). Approved QA recoverable deletion reached Succeeded at 2026-11-01 22:50:40 UTC; QA was absent from active inventory, seven-day recovery was available, and original Dev remained Ready. This purpose-built live host does not establish shipped-serve entrypoint coverage or remote cancellation timing.

The combined source-candidate reference capture uses product commit `1cba826c6ad6233e41b0d4d5197d0c7c618cd4c7`, CLI `1.4.3-alpha.0.28` and MCP `1.2.3-alpha.0.28`. The MCP generator correction is integrated as `575457225dcbfc84253bcb36c1be8d2bedebba22`. Exact binary and generated-file hashes are recorded in the [capture provenance](https://github.com/joshsmithxrm/ppds-docs/blob/codex/safe-workflows-docs/validation/safe-workflows-provenance.json). That help/schema capture performed no live operations. These bounded results do not establish release readiness or published package availability.

Per-cell notebook targets, general MCP form XML writing, new MCP form layout authoring tools and automatic flow activation during import remain outside this increment.
