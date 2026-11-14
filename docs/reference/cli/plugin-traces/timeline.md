<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugin-traces timeline

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-c, --correlation-id &lt;correlation-id&gt;` | Correlation ID to look up directly (use this if you already have the correlation ID) |
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
  Display plugin execution timeline as a hierarchy tree

Usage:
  ppds plugin-traces timeline [<trace-id>] [options]

Arguments:
  <trace-id>  Trace ID of any execution in the request - the timeline shows all related traces via the correlation ID

Options:
  -c, --correlation-id <correlation-id>  Correlation ID to look up directly (use this if you already have the correlation ID)
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
