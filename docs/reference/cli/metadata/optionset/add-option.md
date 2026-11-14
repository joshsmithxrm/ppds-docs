<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata optionset add-option

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name containing the option set |
| `--name &lt;name&gt;` | [Required] Name of the option set |
| `--label &lt;label&gt;` | [Required] Label for the new option |
| `--value &lt;value&gt;` | Numeric value for the option (auto-assigned if not specified) |
| `--color &lt;color&gt;` | Color for the option (hex string, e.g., #FF0000) |
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
  Add a new option value to an existing option set

Usage:
  ppds metadata optionset [<name>] add-option [options]

Arguments:
  <name>  The option set name (e.g., 'new_customstatus')

Options:
  -s, --solution <solution>          [Required] Solution unique name containing the option set
  --name <name>                      [Required] Name of the option set
  --label <label>                    [Required] Label for the new option
  --value <value>                    Numeric value for the option (auto-assigned if not specified)
  --color <color>                    Color for the option (hex string, e.g., #FF0000)
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
