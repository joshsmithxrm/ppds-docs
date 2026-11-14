<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds model-driven-app sitemap

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--app &lt;app&gt;` | [Required] App display name or unique name |
| `--unpublished` | Read the unpublished (latest draft) sitemap instead of the published version |
| `--raw` | Output the raw sitemap XML instead of the parsed navigation structure |
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
  Display the sitemap navigation structure of an app

Usage:
  ppds model-driven-app sitemap [options]

Options:
  --app <app>                            [Required] App display name or unique name
  --unpublished                          Read the unpublished (latest draft) sitemap instead of the published version
  --raw                                  Output the raw sitemap XML instead of the parsed navigation structure
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Environment URL override
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
