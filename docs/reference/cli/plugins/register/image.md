<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins register image

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--name &lt;name&gt;` | [Required] Image name |
| `--type &lt;type&gt;` | [Required] Image type: pre, post, or both |
| `--attributes &lt;attributes&gt;` | Comma-separated list of attributes to include (all if not specified) |
| `--reset-fields &lt;reset-fields&gt;` | Explicit image field resets (attributes, description) |
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
  Register an image for a processing step

Usage:
  ppds plugins register image <step> [options]

Arguments:
  <step>  Step name to attach the image to

Options:
  --name <name>                      [Required] Image name
  --type <type>                      [Required] Image type: pre, post, or both
  --attributes <attributes>          Comma-separated list of attributes to include (all if not specified)
  --reset-fields <reset-fields>      Explicit image field resets (attributes, description)
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
