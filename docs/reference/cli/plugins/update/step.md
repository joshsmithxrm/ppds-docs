<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins update step

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--mode &lt;mode&gt;` | Execution mode: Sync or Async |
| `--stage &lt;stage&gt;` | Pipeline stage: PreValidation, PreOperation, or PostOperation |
| `--rank &lt;rank&gt;` | Execution order (1-999999) |
| `--filtering-attributes &lt;filtering-attributes&gt;` | Comma-separated list of attributes that trigger this step |
| `--description &lt;description&gt;` | Step description |
| `--can-be-bypassed` | Whether this step can be bypassed via BypassBusinessLogicExecution |
| `--can-use-readonly` | Whether this step can use a read-only database connection |
| `--invocation-source &lt;invocation-source&gt;` | Pipeline invocation source: Parent or Child |
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
  Update step properties

Usage:
  ppds plugins update step <name-or-id> [options]

Arguments:
  <name-or-id>  Step name or GUID

Options:
  --mode <mode>                                  Execution mode: Sync or Async
  --stage <stage>                                Pipeline stage: PreValidation, PreOperation, or PostOperation
  --rank <rank>                                  Execution order (1-999999)
  --filtering-attributes <filtering-attributes>  Comma-separated list of attributes that trigger this step
  --description <description>                    Step description
  --can-be-bypassed                              Whether this step can be bypassed via BypassBusinessLogicExecution
  --can-use-readonly                             Whether this step can use a read-only database connection
  --invocation-source <invocation-source>        Pipeline invocation source: Parent or Child
  -p, --profile <profile>                        Authentication profile name
  -env, --environment <environment>              Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                                    Show only warnings and errors
  -v, --verbose                                  Show detailed output including debug messages
  --debug                                        Show trace-level diagnostic output
  --correlation-id <correlation-id>              Correlation ID for distributed tracing
  -f, --output-format <Text|Json>                Output format [default: Text]
  -?, -h, --help                                 Show help and usage information
```
