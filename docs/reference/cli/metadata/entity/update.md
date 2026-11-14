<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata entity update

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name containing the table |
| `-e, --entity &lt;entity&gt;` | Logical name of the entity (alternative to the positional &lt;entity&gt;) (-e is deprecated; use --entity.) |
| `--display-name &lt;display-name&gt;` | Updated display name |
| `--plural-name &lt;plural-name&gt;` | Updated plural display name |
| `--description &lt;description&gt;` | Updated description |
| `--icon-small &lt;icon-small&gt;` | 16x16 icon: web resource logical name (e.g. new_icons/myentity16.png). Use empty string to clear. |
| `--icon-medium &lt;icon-medium&gt;` | 32x32 icon: web resource logical name. Use empty string to clear. |
| `--icon-vector &lt;icon-vector&gt;` | SVG vector icon: web resource logical name (primary icon in modern Dataverse). Use empty string to clear. |
| `--dry-run` | Validate only, do not persist changes |
| `--publish` | Publish the entity after the change |
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
  Update an existing Dataverse table (entity)

Usage:
  ppds metadata entity <entity> update [<entity>] [options]

Arguments:
  <entity>  The entity logical name (e.g., 'account')
  <entity>  Logical name of the entity (alternative to --entity)

Options:
  -s, --solution <solution>          [Required] Solution unique name containing the table
  -e, --entity <entity>              Logical name of the entity (alternative to the positional <entity>) (-e is deprecated; use --entity.)
  --display-name <display-name>      Updated display name
  --plural-name <plural-name>        Updated plural display name
  --description <description>        Updated description
  --icon-small <icon-small>          16x16 icon: web resource logical name (e.g. new_icons/myentity16.png). Use empty string to clear.
  --icon-medium <icon-medium>        32x32 icon: web resource logical name. Use empty string to clear.
  --icon-vector <icon-vector>        SVG vector icon: web resource logical name (primary icon in modern Dataverse). Use empty string to clear.
  --dry-run                          Validate only, do not persist changes
  --publish                          Publish the entity after the change
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
