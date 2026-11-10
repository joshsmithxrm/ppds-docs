<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds forms get

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--entity &lt;entity&gt;` | [Required] Logical name of the entity |
| `--form &lt;form&gt;` | [Required] Name or ID of the form |
| `--unpublished` | Show the unpublished (latest draft) form instead of the published version |
| `--raw` | Write raw formxml to stdout instead of the structured summary |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Get the structure of a specific Dataverse systemform

Usage:
  ppds forms get [options]

Options:
  --entity <entity>                  [Required] Logical name of the entity
  --form <form>                      [Required] Name or ID of the form
  --unpublished                      Show the unpublished (latest draft) form instead of the published version
  --raw                              Write raw formxml to stdout instead of the structured summary
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
