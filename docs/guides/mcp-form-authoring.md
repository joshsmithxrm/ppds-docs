---
title: Add a column to a form with MCP
description: Preview a bounded Main-form edit, verify the draft, and publish the table explicitly
---

# Add a column to a form with MCP

This guide covers the implemented **Safe multi-environment workflows release candidate** for Power Platform Developer Suite (PPDS). Publication and live validation are separate release gates.

Use this workflow to add an existing Dataverse column to an existing section of a Main form. It does not create columns, tabs or sections, accept raw XML writes, or redesign other form types. Start with an authorized environment and an existing form you are permitted to customize.

## Inspect the form and its draft

1. Call `ppds_forms_list` with `entityLogicalName`. Check the returned `environmentUrl`, stable form IDs, types and managed status.
2. Call `ppds_forms_get` with that table, `formId`, and `unpublished: true`.
3. Select an existing section by its stable ID. Keep the returned draft fingerprint for `expectedDraftHash`; do not substitute a display label or a fingerprint from the published form.

Managed forms can accept an unmanaged-layer edit when their managed properties permit it. Locked forms are rejected. Preserve the original draft for review, and avoid simultaneous editors when the reported `concurrencyMode` is `preflight-only`.

## Preview, save and verify

Call `ppds_forms_add_field` with `entityLogicalName`, `formId`, `sectionId`, `fieldLogicalName`, `expectedDraftHash`, and `dryRun: true`. Review the exact target and planned edit. If a solution association is needed, supply `solutionUniqueName` in the preview and execution.

To save, use the same reviewed inputs with `dryRun: false`, a fresh draft fingerprint, and the required `confirmEnvironment` acknowledgement. See [environment safety](environment-safety.md). The tool saves an unpublished draft and reads it back; it never publishes automatically.

Inspect `draftWrite`, `solutionAssociation`, and `draftVerification` separately. `saved-unpublished` means the draft was saved and verified. A later association or verification failure does not undo an earlier write. For a failed or unknown outcome, inspect the current unpublished form before retrying. Do not repeatedly submit an ambiguous write.

If the draft changed since inspection, obtain a fresh draft and review the difference before using its new fingerprint. A fingerprint check is not a lock on external editors.

## Publish the table explicitly

Read and review the saved draft, then call `ppds_forms_publish` with `entityLogicalName`, `formId`, its current `expectedDraftHash`, and `confirmPublishEntity` equal to the exact table logical name. Supply `confirmEnvironment` when required for the session.

**Publication covers all pending customizations for that table**, including changes beyond the selected form. Review that scope with the owner before acknowledging it. The tool verifies only the selected form after table-scoped publication; it does not verify every published customization.

Inspect `entityPublication` and `publishedVerification`. If publication may have completed but verification failed, read the published form before retrying. There is no automatic rollback.

The [forms specification](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/specs/feat-forms-commands.md) and [fixture provenance guide](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/tests/PPDS.LiveTests/Fixtures/Forms/README.md) describe the supported layouts and validation limits. Generated MCP reference pages provide the exact tool schemas.
