<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins deploy

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-c, --config &lt;config&gt;` | [Required] Path to registrations.json |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-s, --solution &lt;solution&gt;` | Solution unique name. Overrides value in configuration file. |
| `--clean` | Version 1: legacy parent cleanup; version 2: prune owned images on configured steps |
| `--dry-run` | Preview changes without applying |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Deploy plugin registrations to environment

Usage:
  ppds plugins deploy [options]

Options:
  -c, --config <config>              [Required] Path to registrations.json
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -s, --solution <solution>          Solution unique name. Overrides value in configuration file.
  --clean                            Version 1: legacy parent cleanup; version 2: prune owned images on configured steps
  --dry-run                          Preview changes without applying
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
