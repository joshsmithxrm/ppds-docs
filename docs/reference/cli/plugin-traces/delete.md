<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugin-traces delete

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--ids &lt;ids&gt;` | Comma-separated list of trace IDs to delete |
| `--older-than &lt;older-than&gt;` | Delete traces older than this duration (e.g., 7d, 24h, 30m) |
| `--all` | Delete ALL plugin traces (requires --force) |
| `--dry-run` | Preview count without deleting |
| `--force` | Skip confirmation prompt |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-e, -env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Delete plugin trace logs

Usage:
  ppds plugin-traces delete [<trace-id>] [options]

Arguments:
  <trace-id>  The plugin trace ID to delete

Options:
  --ids <ids>                            Comma-separated list of trace IDs to delete
  --older-than <older-than>              Delete traces older than this duration (e.g., 7d, 24h, 30m)
  --all                                  Delete ALL plugin traces (requires --force)
  --dry-run                              Preview count without deleting
  --force                                Skip confirmation prompt
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
