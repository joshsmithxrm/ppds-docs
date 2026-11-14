<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugin-traces list

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-e, -env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-t, --type &lt;type&gt;` | Filter by plugin type name (contains) |
| `-m, --message &lt;message&gt;` | Filter by message name (Create, Update, etc.) |
| `--entity &lt;entity&gt;` | Filter by primary entity (contains) |
| `--mode &lt;mode&gt;` | Filter by execution mode: sync or async |
| `--errors-only` | Show only traces with exceptions |
| `--success-only` | Show only successful traces (no exceptions) |
| `--since &lt;since&gt;` | Show traces created after this time (ISO 8601) |
| `--until &lt;until&gt;` | Show traces created before this time (ISO 8601) |
| `--min-duration &lt;min-duration&gt;` | Minimum execution duration in milliseconds |
| `--max-duration &lt;max-duration&gt;` | Maximum execution duration in milliseconds |
| `--correlation-id &lt;correlation-id&gt;` | Filter by correlation ID |
| `--request-id &lt;request-id&gt;` | Filter by request ID |
| `--step-id &lt;step-id&gt;` | Filter by plugin step ID |
| `--last-hour` | Show traces from the last hour |
| `--last-24h` | Show traces from the last 24 hours |
| `--async-only` | Show only asynchronous traces |
| `--recursive` | Show only nested traces (depth &gt; 1) |
| `--record &lt;record&gt;` | Filter by record (format: entity or entity/guid, e.g., account or account/12345678-...) |
| `--filter &lt;filter&gt;` | JSON file with filter criteria |
| `-n, --top &lt;top&gt;` | Maximum number of results to return [default: 100] |
| `--order-by &lt;order-by&gt;` | Sort field (default: createdon desc) |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json\|Csv&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  List plugin trace logs with optional filtering

Usage:
  ppds plugin-traces list [options]

Options:
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -t, --type <type>                      Filter by plugin type name (contains)
  -m, --message <message>                Filter by message name (Create, Update, etc.)
  --entity <entity>                      Filter by primary entity (contains)
  --mode <mode>                          Filter by execution mode: sync or async
  --errors-only                          Show only traces with exceptions
  --success-only                         Show only successful traces (no exceptions)
  --since <since>                        Show traces created after this time (ISO 8601)
  --until <until>                        Show traces created before this time (ISO 8601)
  --min-duration <min-duration>          Minimum execution duration in milliseconds
  --max-duration <max-duration>          Maximum execution duration in milliseconds
  --correlation-id <correlation-id>      Filter by correlation ID
  --request-id <request-id>              Filter by request ID
  --step-id <step-id>                    Filter by plugin step ID
  --last-hour                            Show traces from the last hour
  --last-24h                             Show traces from the last 24 hours
  --async-only                           Show only asynchronous traces
  --recursive                            Show only nested traces (depth > 1)
  --record <record>                      Filter by record (format: entity or entity/guid, e.g., account or account/12345678-...)
  --filter <filter>                      JSON file with filter criteria
  -n, --top <top>                        Maximum number of results to return [default: 100]
  --order-by <order-by>                  Sort field (default: createdon desc)
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json|Csv>    Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
