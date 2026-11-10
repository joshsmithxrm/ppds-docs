<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata optionset create

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name to add the option set to |
| `--name &lt;name&gt;` | [Required] Schema name for the global option set |
| `--display-name &lt;display-name&gt;` | [Required] Display name of the global option set |
| `--options &lt;options&gt;` | [Required] Option definitions: &quot;Label1,Label2=718980001&quot;; omitted values derive from the solution publisher |
| `--description &lt;description&gt;` | Description of the global option set |
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
  Create a new global option set

Usage:
  ppds metadata optionset [<name>] create [options]

Arguments:
  <name>  The option set name (e.g., 'new_customstatus')

Options:
  -s, --solution <solution>          [Required] Solution unique name to add the option set to
  --name <name>                      [Required] Schema name for the global option set
  --display-name <display-name>      [Required] Display name of the global option set
  --options <options>                [Required] Option definitions: "Label1,Label2=718980001"; omitted values derive from the solution publisher
  --description <description>        Description of the global option set
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
