<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata entity

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [create](entity/create.md)
- [update](entity/update.md)
- [delete](entity/delete.md)
- [add-statusreason](entity/add-statusreason.md)
- [list-statusreasons](entity/list-statusreasons.md)
- [update-statusreason](entity/update-statusreason.md)
- [remove-statusreason](entity/remove-statusreason.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `--include &lt;include&gt;` | Include specific metadata sections: attributes, relationships, keys, privileges (comma-separated or multiple flags) |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Get full metadata for a specific entity, or create/update/delete entities and manage status reasons (see subcommands)

Usage:
  ppds metadata entity <entity> [command] [options]

Arguments:
  <entity>  The entity logical name (e.g., 'account')

Options:
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  --include <include>                Include specific metadata sections: attributes, relationships, keys, privileges (comma-separated or multiple flags)
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information

Commands:
  create                        Create a new Dataverse table (entity)
  update <entity>               Update an existing Dataverse table (entity)
  delete <entity>               Delete a Dataverse table (entity)
  add-statusreason <entity>     Add a new status reason to an entity's statuscode attribute
  list-statusreasons <entity>   List all status reasons for an entity's statuscode attribute
  update-statusreason <entity>  Update an existing status reason on an entity
  remove-statusreason <entity>  Remove a status reason from an entity's statuscode attribute
```
