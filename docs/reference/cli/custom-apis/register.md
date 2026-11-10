<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds custom-apis register

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--plugin &lt;plugin&gt;` | [Required] Plugin type name (e.g. MyAssembly.MyPlugin) |
| `--assembly &lt;assembly&gt;` | [Required] Plugin assembly name |
| `--display-name &lt;display-name&gt;` | Display name for the Custom API (defaults to unique name) |
| `--description &lt;description&gt;` | Optional description |
| `--binding-type &lt;binding-type&gt;` | Binding type: Global, Entity, or EntityCollection (default: Global) |
| `--bound-entity &lt;bound-entity&gt;` | Bound entity logical name (required when binding-type is Entity or EntityCollection) |
| `--is-function` | Mark this API as a function (returns a value) |
| `--is-private` | Mark this API as private |
| `--execute-privilege &lt;execute-privilege&gt;` | Privilege name required to execute the API |
| `--allowed-step-type &lt;allowed-step-type&gt;` | Allowed processing step type: None, AsyncOnly, or SyncAndAsync (default: None) |
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
  Register a new Custom API in Dataverse

Usage:
  ppds custom-apis register <unique-name> [options]

Arguments:
  <unique-name>  Unique message name for the Custom API

Options:
  --plugin <plugin>                        [Required] Plugin type name (e.g. MyAssembly.MyPlugin)
  --assembly <assembly>                    [Required] Plugin assembly name
  --display-name <display-name>            Display name for the Custom API (defaults to unique name)
  --description <description>              Optional description
  --binding-type <binding-type>            Binding type: Global, Entity, or EntityCollection (default: Global)
  --bound-entity <bound-entity>            Bound entity logical name (required when binding-type is Entity or EntityCollection)
  --is-function                            Mark this API as a function (returns a value)
  --is-private                             Mark this API as private
  --execute-privilege <execute-privilege>  Privilege name required to execute the API
  --allowed-step-type <allowed-step-type>  Allowed processing step type: None, AsyncOnly, or SyncAndAsync (default: None)
  -p, --profile <profile>                  Authentication profile name
  -env, --environment <environment>        Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                              Show only warnings and errors
  -v, --verbose                            Show detailed output including debug messages
  --debug                                  Show trace-level diagnostic output
  --correlation-id <correlation-id>        Correlation ID for distributed tracing
  -f, --output-format <Text|Json>          Output format [default: Text]
  -?, -h, --help                           Show help and usage information
```
