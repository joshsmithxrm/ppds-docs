<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds solutions export

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-o, --output &lt;output&gt;` | Output file path (default: &lt;unique-name&gt;.zip or &lt;unique-name&gt;_managed.zip) |
| `--managed` | Export as managed solution |
| `--allow-outside-workspace` | Permit --output paths that resolve outside the current working directory. Off by default to prevent a mistyped or redirected path from writing anywhere on disk. |
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
  Export a solution to a ZIP file

Usage:
  ppds solutions export <unique-name> [options]

Arguments:
  <unique-name>  The solution unique name

Options:
  -o, --output <output>                  Output file path (default: <unique-name>.zip or <unique-name>_managed.zip)
  --managed                              Export as managed solution
  --allow-outside-workspace              Permit --output paths that resolve outside the current working directory. Off by default to prevent a mistyped or redirected path from writing anywhere on disk.
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
