---
sidebar_position: 1
title: CLI Overview
description: Command-line interface reference for PPDS
---

# CLI Reference

The Power Platform Developer Suite CLI (`ppds`) provides command-line access to common Power Platform development tasks.

## Usage

```bash
ppds <command> [subcommand] [options]
```

## Commands

| Command | Description |
|---------|-------------|
| `auth` | Manage authentication and connections |
| `solution` | Solution management operations |
| `entity` | Dataverse entity operations |
| `plugin` | Plugin registration and management |
| `webresource` | Web resource operations |
| `data` | Data import/export operations |

## Global Options

| Option | Description |
|--------|-------------|
| `--help`, `-h` | Display help information |
| `--version`, `-v` | Display version information |
| `--verbose` | Enable verbose output |
| `--config <path>` | Specify configuration file path |
| `--environment <url>` | Target environment URL |

## Authentication Commands

### `ppds auth login`

Authenticate with a Power Platform environment.

```bash
ppds auth login [options]
```

| Option | Description |
|--------|-------------|
| `--environment <url>` | Environment URL |
| `--client-id <id>` | Azure AD application ID |
| `--client-secret <secret>` | Application secret |
| `--tenant-id <id>` | Azure AD tenant ID |
| `--use-env` | Use environment variables |

### `ppds auth logout`

Clear cached credentials.

```bash
ppds auth logout
```

### `ppds auth status`

Display current authentication status.

```bash
ppds auth status
```

## Solution Commands

### `ppds solution list`

List solutions in the connected environment.

```bash
ppds solution list [options]
```

| Option | Description |
|--------|-------------|
| `--managed` | Include managed solutions |
| `--filter <name>` | Filter by solution name |
| `--format <json\|table>` | Output format (default: table) |

### `ppds solution export`

Export a solution.

```bash
ppds solution export <solution-name> [options]
```

| Option | Description |
|--------|-------------|
| `--output <path>` | Output file path |
| `--managed` | Export as managed |
| `--include-version` | Include version in filename |

### `ppds solution import`

Import a solution.

```bash
ppds solution import <file> [options]
```

| Option | Description |
|--------|-------------|
| `--publish` | Publish after import |
| `--overwrite` | Overwrite unmanaged customizations |
| `--async` | Import asynchronously |

## Entity Commands

### `ppds entity list`

List entities in the environment.

```bash
ppds entity list [options]
```

### `ppds entity describe`

Get entity metadata.

```bash
ppds entity describe <entity-name>
```

## Examples

### Export a solution

```bash
ppds solution export MySolution --output ./solutions/MySolution.zip
```

### Import and publish

```bash
ppds solution import ./solutions/MySolution.zip --publish
```

### List custom entities

```bash
ppds entity list --filter "new_*"
```

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Authentication error |
| 3 | Connection error |
| 4 | Validation error |

## Configuration File

Create a `ppds.json` configuration file:

```json
{
  "defaultEnvironment": "https://yourorg.crm.dynamics.com",
  "verbose": false,
  "timeout": 300
}
```

## Next Steps

- [Authentication Guide](/docs/guides/authentication)
- [SDK Overview](/docs/reference/sdk/overview)
