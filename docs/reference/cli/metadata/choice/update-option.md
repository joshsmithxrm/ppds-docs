<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata choice update-option

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name containing the option set |
| `--name &lt;name&gt;` | [Required] Name of the option set |
| `--value &lt;value&gt;` | [Required] Numeric value of the option to update |
| `--label &lt;label&gt;` | [Required] New label for the option |
| `--color &lt;color&gt;` | New color for the option (hex string, e.g., #FF0000) |
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
  Update an existing option value in an option set

Usage:
  ppds metadata choice update-option [options]

Options:
  -s, --solution <solution>          [Required] Solution unique name containing the option set
  --name <name>                      [Required] Name of the option set
  --value <value>                    [Required] Numeric value of the option to update
  --label <label>                    [Required] New label for the option
  --color <color>                    New color for the option (hex string, e.g., #FF0000)
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
