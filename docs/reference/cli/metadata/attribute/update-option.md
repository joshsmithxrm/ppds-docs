<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata attribute update-option

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | Solution unique name |
| `-e, --entity &lt;entity&gt;` | [Required] Logical name of the entity (-e is deprecated; use --entity.) |
| `-c, --column &lt;column&gt;` | [Required] Logical name of the Choice/Choices column |
| `--value &lt;value&gt;` | Target option by value (mutually exclusive with --label) |
| `--label &lt;label&gt;` | Target option by current label (mutually exclusive with --value) |
| `--new-label &lt;new-label&gt;` | New label to apply |
| `--color &lt;color&gt;` | New hex color (e.g. #FF0000) |
| `--publish` | Publish the entity after the change |
| `--dry-run` | Validate only, do not persist changes |
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
  Update an option (label/color) on a column's local option set

Usage:
  ppds metadata attribute update-option [options]

Options:
  -s, --solution <solution>          Solution unique name
  -e, --entity <entity>              [Required] Logical name of the entity (-e is deprecated; use --entity.)
  -c, --column <column>              [Required] Logical name of the Choice/Choices column
  --value <value>                    Target option by value (mutually exclusive with --label)
  --label <label>                    Target option by current label (mutually exclusive with --value)
  --new-label <new-label>            New label to apply
  --color <color>                    New hex color (e.g. #FF0000)
  --publish                          Publish the entity after the change
  --dry-run                          Validate only, do not persist changes
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
