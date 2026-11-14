<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata entity delete

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name containing the table |
| `-e, --entity &lt;entity&gt;` | Logical name of the entity (alternative to the positional &lt;entity&gt;) (-e is deprecated; use --entity.) |
| `--force` | Skip confirmation prompt |
| `--dry-run` | Read target metadata and deletion dependencies without deleting. Blocking components or incomplete checks return nonzero; other server constraints remain unchecked. |
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
  Delete a Dataverse table (entity)

Usage:
  ppds metadata entity <entity> delete [<entity>] [options]

Arguments:
  <entity>  The entity logical name (e.g., 'account')
  <entity>  Logical name of the entity (alternative to --entity)

Options:
  -s, --solution <solution>          [Required] Solution unique name containing the table
  -e, --entity <entity>              Logical name of the entity (alternative to the positional <entity>) (-e is deprecated; use --entity.)
  --force                            Skip confirmation prompt
  --dry-run                          Read target metadata and deletion dependencies without deleting. Blocking components or incomplete checks return nonzero; other server constraints remain unchecked.
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
