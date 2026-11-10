<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds forms add-subgrid

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--entity &lt;entity&gt;` | [Required] Entity logical name |
| `--form &lt;form&gt;` | [Required] Name or ID of the form |
| `--section &lt;section&gt;` | [Required] Label or name of the section to add the sub-grid to |
| `--label &lt;label&gt;` | [Required] Display label for the sub-grid |
| `--target-entity &lt;target-entity&gt;` | [Required] Logical name of the entity displayed in the sub-grid |
| `--default-view &lt;default-view&gt;` | [Required] GUID of the default view (savedqueries record) to display in the sub-grid |
| `--relationship &lt;relationship&gt;` | Relationship schema name used to filter the sub-grid records |
| `--hide-label` | Whether to hide the sub-grid label |
| `--hide-on-phone` | Whether to hide the sub-grid on phone |
| `--max-rows &lt;max-rows&gt;` | Maximum number of rows to display in the sub-grid |
| `--hide-search-box` | Whether to hide the search box in the sub-grid |
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
  Add a sub-grid control to a section on a Main form

Usage:
  ppds forms add-subgrid [options]

Options:
  --entity <entity>                  [Required] Entity logical name
  --form <form>                      [Required] Name or ID of the form
  --section <section>                [Required] Label or name of the section to add the sub-grid to
  --label <label>                    [Required] Display label for the sub-grid
  --target-entity <target-entity>    [Required] Logical name of the entity displayed in the sub-grid
  --default-view <default-view>      [Required] GUID of the default view (savedqueries record) to display in the sub-grid
  --relationship <relationship>      Relationship schema name used to filter the sub-grid records
  --hide-label                       Whether to hide the sub-grid label
  --hide-on-phone                    Whether to hide the sub-grid on phone
  --max-rows <max-rows>              Maximum number of rows to display in the sub-grid
  --hide-search-box                  Whether to hide the search box in the sub-grid
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
