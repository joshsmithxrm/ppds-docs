---
sidebar_position: X
title: [Command/API Name]
description: [Brief one-line description]
---

# [Command/API Name]

[One sentence describing what this command or API does.]

## Syntax

```bash
ppds command <required-arg> [optional-arg] [options]
```

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| `<required-arg>` | Yes | [Description] |
| `[optional-arg]` | No | [Description] |

## Options

| Option | Alias | Default | Description |
|--------|-------|---------|-------------|
| `--option` | `-o` | `value` | [Description] |
| `--flag` | `-f` | `false` | [Description] |

## Examples

### Basic usage

```bash
ppds command value
```

### With options

```bash
ppds command value --option custom
```

### Using environment variables

```bash
export PPDS_OPTION=custom
ppds command value
```

## Output

On success, returns:

```json
{
  "status": "success",
  "result": "..."
}
```

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Error - [description] |
| 2 | Error - [description] |

## Related

- [`ppds related-command`](/docs/reference/cli/related-command)
- [Guide: How to use this command](/docs/guides/related-guide)
