<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds webresources list

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-e, -env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-s, --solution &lt;solution&gt;` | Filter by solution unique name |
| `-t, --type &lt;type&gt;` | Filter by type: text, image, data, or specific type (js, css, html, xml, png, etc.) |
| `--top &lt;top&gt;` | Maximum number of results (default: 5000) |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  List web resources in the environment

Usage:
  ppds webresources list [<name-pattern>] [options]

Arguments:
  <name-pattern>  Filter by partial name match (e.g., 'app.js', 'new_/scripts/')

Options:
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -s, --solution <solution>              Filter by solution unique name
  -t, --type <type>                      Filter by type: text, image, data, or specific type (js, css, html, xml, png, etc.)
  --top <top>                            Maximum number of results (default: 5000)
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
