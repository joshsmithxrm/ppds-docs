<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds model-driven-app add-table

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--app &lt;app&gt;` | [Required] App display name or unique name |
| `--group &lt;group&gt;` | Navigation group name (creates if not found) |
| `--area &lt;area&gt;` | Navigation area name (creates if not found, defaults to first area) |
| `--title &lt;title&gt;` | Display title for the SubArea (defaults to entity&#x27;s DisplayName, applies to first entity when multiple specified) |
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
  Add one or more tables to the app's sitemap navigation

Usage:
  ppds model-driven-app add-table <entities>... [options]

Arguments:
  <entities>  Logical name(s) of the table(s) to add

Options:
  --app <app>                            [Required] App display name or unique name
  --group <group>                        Navigation group name (creates if not found)
  --area <area>                          Navigation area name (creates if not found, defaults to first area)
  --title <title>                        Display title for the SubArea (defaults to entity's DisplayName, applies to first entity when multiple specified)
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
