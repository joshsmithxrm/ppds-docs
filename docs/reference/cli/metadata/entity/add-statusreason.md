<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata entity add-statusreason

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-e, --entity &lt;entity&gt;` | Logical name of the entity (alternative to the positional &lt;entity&gt;) (-e is deprecated; use --entity.) |
| `--label &lt;label&gt;` | [Required] Display label for the new status reason |
| `--value &lt;value&gt;` | Explicit option value (mutually exclusive with --solution for derivation) |
| `-s, --solution &lt;solution&gt;` | [Required when --value is omitted] Solution unique name; publisher prefix x 10,000 is used to derive the option value |
| `--state &lt;Active\|Inactive&gt;` | State the reason belongs to: Active or Inactive (use this OR --state-code, not both) |
| `--state-code &lt;state-code&gt;` | State code directly: 0 (Active) or 1 (Inactive) (use this OR --state, not both) |
| `--color &lt;color&gt;` | Hex color for the status reason (e.g., #FF0000) |
| `--publish` | Publish the entity after the change |
| `--dry-run` | Validate only, do not persist changes |
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
  Add a new status reason to an entity's statuscode attribute

Usage:
  ppds metadata entity <entity> add-statusreason [<entity>] [options]

Arguments:
  <entity>  The entity logical name (e.g., 'account')
  <entity>  Logical name of the entity (alternative to --entity)

Options:
  -e, --entity <entity>              Logical name of the entity (alternative to the positional <entity>) (-e is deprecated; use --entity.)
  --label <label>                    [Required] Display label for the new status reason
  --value <value>                    Explicit option value (mutually exclusive with --solution for derivation)
  -s, --solution <solution>          [Required when --value is omitted] Solution unique name; publisher prefix x 10,000 is used to derive the option value
  --state <Active|Inactive>          State the reason belongs to: Active or Inactive (use this OR --state-code, not both)
  --state-code <state-code>          State code directly: 0 (Active) or 1 (Inactive) (use this OR --state, not both)
  --color <color>                    Hex color for the status reason (e.g., #FF0000)
  --publish                          Publish the entity after the change
  --dry-run                          Validate only, do not persist changes
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
