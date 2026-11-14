<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds custom-apis add-parameter

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--type &lt;type&gt;` | [Required] Data type: Boolean, DateTime, Decimal, Entity, EntityCollection, EntityReference, Float, Integer, Money, Picklist, String, StringArray, or Guid |
| `--direction &lt;direction&gt;` | [Required] Direction: input or output |
| `--optional` | Mark the parameter as optional (input parameters only) |
| `--entity &lt;entity&gt;` | Logical entity name (required for Entity, EntityCollection, EntityReference types) |
| `--description &lt;description&gt;` | Optional description |
| `--display-name &lt;display-name&gt;` | Display name (defaults to param-name) |
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
  Add a request parameter or response property to a Custom API

Usage:
  ppds custom-apis add-parameter <api-name> <param-name> [options]

Arguments:
  <api-name>    Custom API unique name or GUID
  <param-name>  Unique parameter name

Options:
  --type <type>                      [Required] Data type: Boolean, DateTime, Decimal, Entity, EntityCollection, EntityReference, Float, Integer, Money, Picklist, String, StringArray, or Guid
  --direction <direction>            [Required] Direction: input or output
  --optional                         Mark the parameter as optional (input parameters only)
  --entity <entity>                  Logical entity name (required for Entity, EntityCollection, EntityReference types)
  --description <description>        Optional description
  --display-name <display-name>      Display name (defaults to param-name)
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
