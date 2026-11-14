<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins register step

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--message &lt;message&gt;` | [Required] SDK message name (Create, Update, Delete, etc.) |
| `--entity &lt;entity&gt;` | [Required] Primary entity logical name |
| `--stage &lt;stage&gt;` | [Required] Pipeline stage: PreValidation, PreOperation, or PostOperation |
| `--mode &lt;mode&gt;` | Execution mode: Sync or Async [default: Sync] |
| `--rank &lt;rank&gt;` | Execution order (1-999999) [default: 1] |
| `--filtering-attributes &lt;filtering-attributes&gt;` | Comma-separated list of attributes that trigger this step (for Update message) |
| `--name &lt;name&gt;` | Step display name (auto-generated if not specified) |
| `--secure-config &lt;secure-config&gt;` | Secure configuration string (write-only, not stored in source control) |
| `--reset-fields &lt;reset-fields&gt;` | Explicit nonsecret field resets |
| `--event-handler-type &lt;event-handler-type&gt;` | Event handler type: pluginType or serviceEndpoint [default: pluginType] |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-s, --solution &lt;solution&gt;` | Solution unique name. Overrides value in configuration file. |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Register a processing step for a plugin type

Usage:
  ppds plugins register step <type> [options]

Arguments:
  <type>  Plugin type name (fully qualified)

Options:
  --message <message>                            [Required] SDK message name (Create, Update, Delete, etc.)
  --entity <entity>                              [Required] Primary entity logical name
  --stage <stage>                                [Required] Pipeline stage: PreValidation, PreOperation, or PostOperation
  --mode <mode>                                  Execution mode: Sync or Async [default: Sync]
  --rank <rank>                                  Execution order (1-999999) [default: 1]
  --filtering-attributes <filtering-attributes>  Comma-separated list of attributes that trigger this step (for Update message)
  --name <name>                                  Step display name (auto-generated if not specified)
  --secure-config <secure-config>                Secure configuration string (write-only, not stored in source control)
  --reset-fields <reset-fields>                  Explicit nonsecret field resets
  --event-handler-type <event-handler-type>      Event handler type: pluginType or serviceEndpoint [default: pluginType]
  -p, --profile <profile>                        Authentication profile name
  -env, --environment <environment>              Override the environment URL. Takes precedence over profile's bound environment.
  -s, --solution <solution>                      Solution unique name. Overrides value in configuration file.
  -q, --quiet                                    Show only warnings and errors
  -v, --verbose                                  Show detailed output including debug messages
  --debug                                        Show trace-level diagnostic output
  --correlation-id <correlation-id>              Correlation ID for distributed tracing
  -f, --output-format <Text|Json>                Output format [default: Text]
  -?, -h, --help                                 Show help and usage information
```
