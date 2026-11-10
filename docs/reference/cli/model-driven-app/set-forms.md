<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds model-driven-app set-forms

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--app &lt;app&gt;` | [Required] App display name or unique name |
| `--entity &lt;entity&gt;` | [Required] Logical name of the table |
| `--all` | Include all forms (removes explicit selections, enabling include-all mode) |
| `--form &lt;form&gt;` | Form name to include explicitly (can be specified multiple times). Requires --all or at least one --form. |
| `--solution &lt;solution&gt;` | Add app (type 80) and sitemap (type 62) to this solution |
| `--publish` | Publish the app after modification |
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
  Set explicit form visibility for a table in the app. Requires --all or at least one --form.

Usage:
  ppds model-driven-app set-forms [options]

Options:
  --app <app>                            [Required] App display name or unique name
  --entity <entity>                      [Required] Logical name of the table
  --all                                  Include all forms (removes explicit selections, enabling include-all mode)
  --form <form>                          Form name to include explicitly (can be specified multiple times). Requires --all or at least one --form.
  --solution <solution>                  Add app (type 80) and sitemap (type 62) to this solution
  --publish                              Publish the app after modification
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
