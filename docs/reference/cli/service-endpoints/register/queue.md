<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds service-endpoints register queue

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--namespace &lt;namespace&gt;` | [Required] Service Bus namespace address (e.g. sb://myns.servicebus.windows.net) |
| `--path &lt;path&gt;` | [Required] Queue name |
| `--sas-key-name &lt;sas-key-name&gt;` | [Required] SAS key name |
| `--sas-key &lt;sas-key&gt;` | [Required] SAS key value (exactly 44 characters) |
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
  Register an Azure Service Bus queue endpoint

Usage:
  ppds service-endpoints register queue <name> [options]

Arguments:
  <name>  Unique display name for the endpoint

Options:
  --namespace <namespace>            [Required] Service Bus namespace address (e.g. sb://myns.servicebus.windows.net)
  --path <path>                      [Required] Queue name
  --sas-key-name <sas-key-name>      [Required] SAS key name
  --sas-key <sas-key>                [Required] SAS key value (exactly 44 characters)
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
