<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds model-driven-app add-copilot

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--app &lt;app&gt;` | [Required] App display name or unique name |
| `--bot &lt;bot&gt;` | [Required] Copilot agent (bot) display name, schema name, or id |
| `--publish` | Publish the app after modification |
| `--dry-run` | Preview the appelement that would be created (and the eligibility verdict); makes no changes |
| `--force` | Wire the Copilot even if the app is reported unsupported for the app-assistant agent |
| `--confirm` | Bypass write protection on production-flagged environments |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-e, -env, --environment &lt;environment&gt;` | Environment URL override |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Wire a Copilot Studio agent (bot) into the app

Usage:
  ppds model-driven-app add-copilot [options]

Options:
  --app <app>                            [Required] App display name or unique name
  --bot <bot>                            [Required] Copilot agent (bot) display name, schema name, or id
  --publish                              Publish the app after modification
  --dry-run                              Preview the appelement that would be created (and the eligibility verdict); makes no changes
  --force                                Wire the Copilot even if the app is reported unsupported for the app-assistant agent
  --confirm                              Bypass write protection on production-flagged environments
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Environment URL override
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
