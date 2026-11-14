<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds forms update-tab

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--entity &lt;entity&gt;` | [Required] Entity logical name |
| `--form &lt;form&gt;` | [Required] Name or ID of the form |
| `--tab &lt;tab&gt;` | [Required] Label or name of the tab to update |
| `--label &lt;label&gt;` | New label for the tab (renames the tab) |
| `--show-label` | Whether to show the tab label |
| `--expanded` | Whether the tab is expanded by default |
| `--visible` | Whether the tab is visible |
| `--available-on-phone` | Whether the tab is available on phone |
| `--columns &lt;columns&gt;` | Number of columns in the tab |
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
  Update properties of an existing tab on a Main form

Usage:
  ppds forms update-tab [options]

Options:
  --entity <entity>                  [Required] Entity logical name
  --form <form>                      [Required] Name or ID of the form
  --tab <tab>                        [Required] Label or name of the tab to update
  --label <label>                    New label for the tab (renames the tab)
  --show-label                       Whether to show the tab label
  --expanded                         Whether the tab is expanded by default
  --visible                          Whether the tab is visible
  --available-on-phone               Whether the tab is available on phone
  --columns <columns>                Number of columns in the tab
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
