<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds forms remove-field

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--entity &lt;entity&gt;` | [Required] Entity logical name |
| `--form &lt;form&gt;` | [Required] Name or ID of the form |
| `--field &lt;field&gt;` | [Required] Field logical name to remove |
| `--section &lt;section&gt;` | Label or name of the section to remove the field from. If omitted, all occurrences of the field are removed from the form. |
| `--publish` | Publish all pending customizations for this table after writing |
| `--solution &lt;solution&gt;` | Solution unique name to associate the change with |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `--confirm-env &lt;confirm-env&gt;` | Acknowledge writing to this exact resolved environment URL |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Remove a field from a Main form. Without --section, removes all occurrences of the field; with --section, removes only from the specified section.

Usage:
  ppds forms remove-field [options]

Options:
  --entity <entity>                  [Required] Entity logical name
  --form <form>                      [Required] Name or ID of the form
  --field <field>                    [Required] Field logical name to remove
  --section <section>                Label or name of the section to remove the field from. If omitted, all occurrences of the field are removed from the form.
  --publish                          Publish all pending customizations for this table after writing
  --solution <solution>              Solution unique name to associate the change with
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  --confirm-env <confirm-env>        Acknowledge writing to this exact resolved environment URL
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
