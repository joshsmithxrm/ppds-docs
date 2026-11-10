<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata attributes

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-t, --type &lt;type&gt;` | Filter by attribute type (e.g., &#x27;Lookup&#x27;, &#x27;String&#x27;, &#x27;DateTime&#x27;, &#x27;Picklist&#x27;) |
| `--exclude-auxiliary` | Exclude auxiliary attributes (lookup name/yomi companions marked with AttributeOf) |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  List attributes for an entity

Usage:
  ppds metadata attributes <entity> [options]

Arguments:
  <entity>  The entity logical name (e.g., 'account')

Options:
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -t, --type <type>                  Filter by attribute type (e.g., 'Lookup', 'String', 'DateTime', 'Picklist')
  --exclude-auxiliary                Exclude auxiliary attributes (lookup name/yomi companions marked with AttributeOf)
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
