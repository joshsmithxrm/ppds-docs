<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata relationship update

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name containing the relationship |
| `--name &lt;name&gt;` | [Required] Schema name of the relationship to update |
| `--cascade-delete &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Updated cascade behavior for delete |
| `--cascade-assign &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Updated cascade behavior for assign |
| `--cascade-merge &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Updated cascade behavior for merge |
| `--cascade-reparent &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Updated cascade behavior for reparent |
| `--cascade-share &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Updated cascade behavior for share |
| `--cascade-unshare &lt;Active\|Cascade\|NoCascade\|RemoveLink\|Restrict\|UserOwned&gt;` | Updated cascade behavior for unshare |
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
  Update an existing Dataverse relationship

Usage:
  ppds metadata relationship update [options]

Options:
  -s, --solution <solution>                                                    [Required] Solution unique name containing the relationship
  --name <name>                                                                [Required] Schema name of the relationship to update
  --cascade-delete <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>    Updated cascade behavior for delete
  --cascade-assign <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>    Updated cascade behavior for assign
  --cascade-merge <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>     Updated cascade behavior for merge
  --cascade-reparent <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>  Updated cascade behavior for reparent
  --cascade-share <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>     Updated cascade behavior for share
  --cascade-unshare <Active|Cascade|NoCascade|RemoveLink|Restrict|UserOwned>   Updated cascade behavior for unshare
  --dry-run                                                                    Validate only, do not persist changes
  -p, --profile <profile>                                                      Authentication profile name
  -env, --environment <environment>                                            Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                                                                  Show only warnings and errors
  -v, --verbose                                                                Show detailed output including debug messages
  --debug                                                                      Show trace-level diagnostic output
  --correlation-id <correlation-id>                                            Correlation ID for distributed tracing
  -f, --output-format <Text|Json>                                              Output format [default: Text]
  -?, -h, --help                                                               Show help and usage information
```
