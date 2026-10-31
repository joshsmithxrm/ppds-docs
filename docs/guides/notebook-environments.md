---
title: Run notebooks against separate environments
description: Bind notebooks independently and identify the target of every result
---

# Run notebooks against separate environments

This guide covers the implemented **Safe multi-environment workflows release candidate** for the Power Platform Developer Suite (PPDS) Extension. It does not add per-cell environment overrides.

## Bind each notebook

Open a PPDS notebook and choose **Select Notebook Environment** from its toolbar or environment status item. Choose the intended environment. Repeat for another notebook to keep separate notebook bindings while you work concurrently.

Choose **Use session default** to clear that notebook's binding. This does not change the global selected environment or another notebook. An unbound notebook captures the session default when its queued run begins. If no default is available, select an environment before execution.

Saved notebook metadata contains only the environment ID, name and URL. It contains no credentials, profile identity, or remembered acknowledgement. Older notebooks with missing or partial binding metadata remain supported.

## Review the running target

The status item shows the binding's name, type and URL; an active run shows **Running on** its captured environment. Production and Unknown targets require **Run on this environment** confirmation for that notebook, target and profile session. This acknowledges the query target, not DML or another mutation.

A run keeps the environment and profile identity captured when it starts. Switching focus, changing defaults, editing bindings, or switching profiles cannot redirect an active run. A daemon without the required identity contract fails closed with an update/restart instruction.

If authentication fails, check the captured target in the error, confirm the intended profile in **PPDS Profiles**, re-authenticate, and rerun. Notebook and transferred Data Explorer requests do not automatically invalidate a profile by name, index or global selection.

Each result, empty response, error and cancellation has a plain-text target header with the executed environment name, type, URL and timestamp. Use that header to identify where the query ran; a notebook's current binding may have changed since the result was produced.

Record links use the executed URL. Export dialogs identify the actual target and execution time while preserving the CSV and JSON data shapes. Opening an executed cell in Data Explorer carries its executed target and profile context; it does not silently reuse a panel pointed elsewhere.

## Cancel only the intended work

Interrupting a notebook cancels its active request and discards its queued work. It does not cancel another notebook. Cancelling an individual cell does not cancel the next cell. Closing a notebook cancels its own work and clears its result cache.

For shared write safeguards, see [environment safety](environment-safety.md). For implementation details and acceptance criteria, see the [query and notebook specification](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/specs/query.md).
