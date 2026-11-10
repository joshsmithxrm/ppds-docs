<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata key create

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name containing the table |
| `-e, --entity &lt;entity&gt;` | [Required] Logical name of the entity to add the key to (-e is deprecated; use --entity.) |
| `--name &lt;name&gt;` | [Required] Schema name for the alternate key |
| `--display-name &lt;display-name&gt;` | [Required] Display name of the alternate key |
| `--attributes &lt;attributes&gt;` | [Required] Comma-separated list of attribute logical names: &quot;attr1,attr2&quot; |
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
  Create an alternate key on a Dataverse table

Usage:
  ppds metadata key create [options]

Options:
  -s, --solution <solution>          [Required] Solution unique name containing the table
  -e, --entity <entity>              [Required] Logical name of the entity to add the key to (-e is deprecated; use --entity.)
  --name <name>                      [Required] Schema name for the alternate key
  --display-name <display-name>      [Required] Display name of the alternate key
  --attributes <attributes>          [Required] Comma-separated list of attribute logical names: "attr1,attr2"
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
