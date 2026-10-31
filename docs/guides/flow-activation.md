---
title: Enable or disable deployed cloud flows
description: Preview a named solution selection, inspect bindings, and verify each state change
---

# Enable or disable deployed cloud flows

This guide covers the implemented **Safe multi-environment workflows release candidate** for Power Platform Developer Suite (PPDS). Flow activation is a CLI workflow; this release adds no MCP or Extension flow mutation surface.

Use it after deploying a solution and reviewing connection references. It changes solution-aware modern cloud-flow definitions. Classic workflows, desktop flows, templates and activation records are excluded from mutation and appear with reasons in batch output.

## Inspect and preview

Replace `<solution-unique-name>`, `<profile>` and `<environment-url>` below with your reviewed values. These examples describe command syntax; they do not establish live validation in your environment.

```text
ppds connectionreferences analyze --solution <solution-unique-name> --profile <profile> --environment <environment-url>
ppds flows enable --all --solution <solution-unique-name> --dry-run --profile <profile> --environment <environment-url> --output-format json
```

Use exactly one selector: `--id`, `--name`, or `--all`. Names are exact unique/schema names, not fuzzy display names. `--all` requires a solution unique name; a solution supplied with a single-flow selector constrains membership. Ambiguity returns candidate IDs.

The default cap is 100 eligible flows. An exceeded cap fails before writes and reports the full count; it never truncates the batch. Raise `--max-flows` only after reviewing the complete selection.

Activation checks required references across the environment, including references outside the selected solution. Missing, inactive, unbound or unreadable references block the entire batch before writes. A valid binding does not prove credentials, permissions, licensing, DLP, child-flow prerequisites or runtime connector health. Resolve those issues through the existing connection-reference workflow; activation does not bind or repair connections.

## Execute the reviewed selection

Replace `<plan-hash>` with the fresh dry-run `planHash`. Review the target URL before supplying the same URL to `--confirm-env`.

```text
ppds flows enable --all --solution <solution-unique-name> --expected-plan-hash <plan-hash> --confirm-env <environment-url> --profile <profile> --environment <environment-url> --output-format json
```

Execution resolves a fresh plan. `--expected-plan-hash` rejects relevant changes before writes. Without it, a dry run is informational and does not reserve a selection. The [environment guard](environment-safety.md) also checks the actual target and read-only policy.

Flows are processed sequentially. Each change is rechecked, submitted once and verified by state readback. `--timeout` controls verification per changed flow, defaulting to 60 seconds. A flow already in the requested state is `unchanged` and succeeds without writing.

## Inspect partial outcomes

Read the per-flow status and phase, counts, excluded entries and errors. `succeeded` and `unchanged` are complete; `blocked`, `failed`, `unknown`, `cancelled` and `not-attempted` require attention. A dry run uses `would-change`. An empty eligible selection succeeds with explicit zero-change counts and any exclusion reasons.

Known preflight blockers make zero writes. A later failure, cancellation or uncertain result stops further writes while retaining earlier outcomes. A timeout after submission is `unknown`; inspect state before retrying. There is no automatic resubmission or rollback, and no inferred ordering for child-flow dependencies.

Use `ppds flows disable` with the same selector rules to turn a flow off. Disabling does not require healthy connection bindings and does not cancel runs already in progress. PPDS does not automatically invoke this activation workflow after solution import. Dataverse can import flows in an enabled state; inspect their imported state before planning changes.

See the [flow specification](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/specs/flows.md) and generated CLI reference for complete options.
