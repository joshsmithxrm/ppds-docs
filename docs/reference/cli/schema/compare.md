<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds schema compare

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--data &lt;data&gt;` | [Required with --environment] Path to a data package zip whose schema is compared against the target environment. |
| `-e, -env, --environment &lt;environment&gt;` | [Required with --data] Target environment - URL, friendly name, unique name, or ID. |
| `-se, --source-env &lt;source-env&gt;` | [Required with --target-env] Source environment for env-to-env comparison. |
| `-te, --target-env &lt;target-env&gt;` | [Required with --source-env] Target environment for env-to-env comparison. |
| `-p, --profile &lt;profile&gt;` | Authentication profile name (defaults to active profile). |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Compare schema between a data package and an environment, or between two environments. Differences are classified by severity (Error / Warning / Info); the highest severity determines the exit code. Supported output formats: Text (default), Json.

Usage:
  ppds schema compare [options]

Options:
  --data <data>                          [Required with --environment] Path to a data package zip whose schema is compared against the target environment.
  -e, -env, --environment <environment>  [Required with --data] Target environment - URL, friendly name, unique name, or ID.
  -se, --source-env <source-env>         [Required with --target-env] Source environment for env-to-env comparison.
  -te, --target-env <target-env>         [Required with --source-env] Target environment for env-to-env comparison.
  -p, --profile <profile>                Authentication profile name (defaults to active profile).
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
