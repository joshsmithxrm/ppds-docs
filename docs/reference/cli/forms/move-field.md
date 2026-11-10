<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds forms move-field

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--entity &lt;entity&gt;` | [Required] Entity logical name |
| `--form &lt;form&gt;` | [Required] Form name or ID |
| `--solution &lt;solution&gt;` | Solution unique name to associate after the layout operation |
| `--publish` | Publish all pending table customizations after the layout operation |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `--confirm-env &lt;confirm-env&gt;` | Acknowledge writing to this exact resolved environment URL |
| `--field &lt;field&gt;` | [Required] Existing field logical name |
| `--from-section &lt;from-section&gt;` | [Required] Source section label, name or ID |
| `--to-section &lt;to-section&gt;` | [Required] Target section label, name or ID |
| `--before-field &lt;before-field&gt;` | Insert before this unique target field&#x27;s standalone row; default appends a cross-section move |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Move an existing field cell without copying or replacing controls.

Usage:
  ppds forms move-field [options]

Options:
  --entity <entity>                  [Required] Entity logical name
  --form <form>                      [Required] Form name or ID
  --solution <solution>              Solution unique name to associate after the layout operation
  --publish                          Publish all pending table customizations after the layout operation
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  --confirm-env <confirm-env>        Acknowledge writing to this exact resolved environment URL
  --field <field>                    [Required] Existing field logical name
  --from-section <from-section>      [Required] Source section label, name or ID
  --to-section <to-section>          [Required] Target section label, name or ID
  --before-field <before-field>      Insert before this unique target field's standalone row; default appends a cross-section move
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
