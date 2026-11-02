---
title: Confirm the environment before a write
description: Keep form and flow changes tied to the intended environment
---

# Confirm the environment before a write

This guide covers the implemented **Safe multi-environment workflows release candidate** for Power Platform Developer Suite (PPDS). It is not a claim that the candidate has been published.

Before changing a form or flow, inspect the selected profile and environment. Keep the exact environment URL with your preview and result. A nickname is useful for display, but it does not identify the acknowledged write target.

## Acknowledge a protected target

Form writers and flow enable/disable commands accept `--confirm-env` with the exact environment URL. Supply it after reviewing the intended target and change. For MCP form mutations, the corresponding argument is `confirmEnvironment`.

The shared guard checks the actual target, profile identity, session and current environment policy. An acknowledgement for another target or profile cannot authorize this operation. Effective Production or Test protection requires acknowledgement. Unknown targets default to Production protection; an explicit environment protection override takes precedence. Read-only sessions reject actual writes. A write-free preview remains available where the operation supports it.

MCP acknowledgement is scoped to the current session and target. An environment allowlist permits selection; it does not acknowledge a write. Switching to an allowed environment is therefore not a substitute for `confirmEnvironment`.

## Respond to a refusal

| Code | Next step |
|------|-----------|
| `Environment.ConfirmationRequired` | Review the resolved URL and operation, then supply the matching acknowledgement. |
| `Environment.ConfirmationTargetMismatch` | Inspect the active target; do not copy an acknowledgement from another environment. |
| `Environment.InvalidConfirmationUrl` | Use an absolute organization URL without credentials, query parameters or a fragment. |
| `Environment.ReadOnly` | Continue inspection or preview. Use an explicitly authorized write session for a mutation. |
| `Environment.TargetUnresolved` or `Environment.ConfirmationPolicyUnavailable` | Resolve the target or configuration problem before retrying. |

These guards apply to the form and flow paths described here. Other PPDS mutation domains retain their own safety contracts; this release does not promise a universal replacement for every existing guard.

For the operation itself, follow [MCP form authoring](mcp-form-authoring.md), [flow activation](flow-activation.md), or [notebook environment selection](notebook-environments.md). Notebook execution confirmation acknowledges a query target and does not authorize DML.
