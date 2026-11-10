<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds webresources create

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--name &lt;name&gt;` | [Required] Logical name for the new web resource (e.g., new_/icons/vet.svg) |
| `--display-name &lt;display-name&gt;` | Display name (defaults to the logical name) |
| `--type &lt;type&gt;` | Web resource type override; inferred from the file extension when omitted. One of: html, css, js, xml, png, jpg, gif, xap, xsl, ico, svg, resx |
| `-s, --solution &lt;solution&gt;` | Solution unique name to add the web resource to |
| `--publish` | Publish the web resource after creation (required before it is visible to apps) |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-e, -env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Create a new web resource from a local file

Usage:
  ppds webresources create <file> [options]

Arguments:
  <file>  Local file to upload as the web resource content

Options:
  --name <name>                          [Required] Logical name for the new web resource (e.g., new_/icons/vet.svg)
  --display-name <display-name>          Display name (defaults to the logical name)
  --type <type>                          Web resource type override; inferred from the file extension when omitted. One of: html, css, js, xml, png, jpg, gif, xap, xsl, ico, svg, resx
  -s, --solution <solution>              Solution unique name to add the web resource to
  --publish                              Publish the web resource after creation (required before it is visible to apps)
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
