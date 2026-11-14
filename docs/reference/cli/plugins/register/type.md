<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins register type

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--typename &lt;typename&gt;` | [Required] Fully qualified type name (namespace.classname) |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-s, --solution &lt;solution&gt;` | Solution unique name. Overrides value in configuration file. |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Register a plugin type within an assembly

Usage:
  ppds plugins register type <assembly> [options]

Arguments:
  <assembly>  Assembly name containing the plugin type

Options:
  --typename <typename>              [Required] Fully qualified type name (namespace.classname)
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -s, --solution <solution>          Solution unique name. Overrides value in configuration file.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
