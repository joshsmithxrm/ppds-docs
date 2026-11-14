<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata entity update-statusreason

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-e, --entity &lt;entity&gt;` | Logical name of the entity (alternative to the positional &lt;entity&gt;) (-e is deprecated; use --entity.) |
| `--value &lt;value&gt;` | Target status reason by option value (mutually exclusive with --label) |
| `--label &lt;label&gt;` | Target status reason by current label (mutually exclusive with --value) |
| `--new-label &lt;new-label&gt;` | New label to apply to the status reason |
| `--color &lt;color&gt;` | New hex color for the status reason (e.g., #FF0000) |
| `-s, --solution &lt;solution&gt;` | Solution unique name |
| `--publish` | Publish the entity after the change |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Update an existing status reason on an entity

Usage:
  ppds metadata entity <entity> update-statusreason [<entity>] [options]

Arguments:
  <entity>  The entity logical name (e.g., 'account')
  <entity>  Logical name of the entity (alternative to --entity)

Options:
  -e, --entity <entity>              Logical name of the entity (alternative to the positional <entity>) (-e is deprecated; use --entity.)
  --value <value>                    Target status reason by option value (mutually exclusive with --label)
  --label <label>                    Target status reason by current label (mutually exclusive with --value)
  --new-label <new-label>            New label to apply to the status reason
  --color <color>                    New hex color for the status reason (e.g., #FF0000)
  -s, --solution <solution>          Solution unique name
  --publish                          Publish the entity after the change
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
