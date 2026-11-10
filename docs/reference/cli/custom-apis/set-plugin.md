<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds custom-apis set-plugin

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--plugin &lt;plugin&gt;` | Plugin type name to set as the implementing type |
| `--assembly &lt;assembly&gt;` | Assembly name for disambiguation (optional) |
| `--none` | Clear the plugin type (mutually exclusive with --plugin) |
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
  Set or clear the implementing plugin type on a Custom API

Usage:
  ppds custom-apis set-plugin <unique-name-or-id> [options]

Arguments:
  <unique-name-or-id>  Custom API unique name or GUID

Options:
  --plugin <plugin>                  Plugin type name to set as the implementing type
  --assembly <assembly>              Assembly name for disambiguation (optional)
  --none                             Clear the plugin type (mutually exclusive with --plugin)
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
