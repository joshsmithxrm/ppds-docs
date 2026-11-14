<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata attribute add-option

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | Solution unique name (required for value derivation when --option has no explicit value) |
| `-e, --entity &lt;entity&gt;` | [Required] Logical name of the entity (-e is deprecated; use --entity.) |
| `-c, --column &lt;column&gt;` | [Required] Logical name of the Choice/Choices column |
| `--option &lt;option&gt;` | [Required] Option to add: &quot;Label[:Value][:#Color]&quot; |
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
  Add an option to a column's local option set

Usage:
  ppds metadata attribute add-option [options]

Options:
  -s, --solution <solution>          Solution unique name (required for value derivation when --option has no explicit value)
  -e, --entity <entity>              [Required] Logical name of the entity (-e is deprecated; use --entity.)
  -c, --column <column>              [Required] Logical name of the Choice/Choices column
  --option <option>                  [Required] Option to add: "Label[:Value][:#Color]"
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
