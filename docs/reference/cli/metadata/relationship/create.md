<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata relationship create

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name to add the relationship to |
| `--from &lt;from&gt;` | [Required] Source entity logical name (referenced/parent for 1:N, entity1 for N:N) |
| `--to &lt;to&gt;` | [Required] Target entity logical name (referencing/child for 1:N, entity2 for N:N) |
| `--type &lt;many-to-many\|one-to-many&gt;` | [Required] Relationship type: one-to-many or many-to-many |
| `--name &lt;name&gt;` | [Required] Schema name for the relationship |
| `--lookup-name &lt;lookup-name&gt;` | Schema name of the lookup column (one-to-many only) |
| `--lookup-display-name &lt;lookup-display-name&gt;` | Display name of the lookup column (one-to-many only) |
| `--intersect-entity &lt;intersect-entity&gt;` | Schema name of the intersect entity (many-to-many only). Defaults to --name. |
| `--cascade-delete &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Cascade behavior for delete: Cascade, Active, NoCascade, RemoveLink, Restrict |
| `--cascade-assign &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Cascade behavior for assign: Cascade, Active, NoCascade, UserOwned |
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
  Create a new Dataverse relationship

Usage:
  ppds metadata relationship create [options]

Options:
  -s, --solution <solution>                                                  [Required] Solution unique name to add the relationship to
  --from <from>                                                              [Required] Source entity logical name (referenced/parent for 1:N, entity1 for N:N)
  --to <to>                                                                  [Required] Target entity logical name (referencing/child for 1:N, entity2 for N:N)
  --type <many-to-many|one-to-many>                                          [Required] Relationship type: one-to-many or many-to-many
  --name <name>                                                              [Required] Schema name for the relationship
  --lookup-name <lookup-name>                                                Schema name of the lookup column (one-to-many only)
  --lookup-display-name <lookup-display-name>                                Display name of the lookup column (one-to-many only)
  --intersect-entity <intersect-entity>                                      Schema name of the intersect entity (many-to-many only). Defaults to --name.
  --cascade-delete <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>  Cascade behavior for delete: Cascade, Active, NoCascade, RemoveLink, Restrict
  --cascade-assign <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>  Cascade behavior for assign: Cascade, Active, NoCascade, UserOwned
  --dry-run                                                                  Validate only, do not persist changes
  -p, --profile <profile>                                                    Authentication profile name
  -env, --environment <environment>                                          Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                                                                Show only warnings and errors
  -v, --verbose                                                              Show detailed output including debug messages
  --debug                                                                    Show trace-level diagnostic output
  --correlation-id <correlation-id>                                          Correlation ID for distributed tracing
  -f, --output-format <Text|Json>                                            Output format [default: Text]
  -?, -h, --help                                                             Show help and usage information
```
