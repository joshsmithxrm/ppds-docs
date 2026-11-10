<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds environment-variables export

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | Filter by solution unique name |
| `-o, --output &lt;output&gt;` | Output file path (default: stdout) |
| `-p, --profile &lt;profile&gt;` | Authentication profile to use |
| `-e, -env, --environment &lt;environment&gt;` | Target environment (name, URL, or ID) |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Export environment variables for deployment settings

Usage:
  ppds environment-variables export [options]

Options:
  -s, --solution <solution>              Filter by solution unique name
  -o, --output <output>                  Output file path (default: stdout)
  -p, --profile <profile>                Authentication profile to use
  -e, -env, --environment <environment>  Target environment (name, URL, or ID)
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
