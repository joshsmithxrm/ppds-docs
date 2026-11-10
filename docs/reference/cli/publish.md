<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds publish

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--all` | Publish all customizations (PublishAllXml). Cannot combine with other flags. |
| `-t, --type &lt;type&gt;` | Component type to publish. Required when specifying resources or --solution. Supported: webresource, entity |
| `-s, --solution &lt;solution&gt;` | Publish all components of the specified type in this solution |
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
  Publish Dataverse customizations

Usage:
  ppds publish [<names>...] [options]

Arguments:
  <names>  Web resource names, partial names, or GUIDs to publish

Options:
  --all                                  Publish all customizations (PublishAllXml). Cannot combine with other flags.
  -t, --type <type>                      Component type to publish. Required when specifying resources or --solution. Supported: webresource, entity
  -s, --solution <solution>              Publish all components of the specified type in this solution
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
