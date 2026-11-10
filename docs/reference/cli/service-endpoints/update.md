<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds service-endpoints update

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--name &lt;name&gt;` | New display name for the endpoint |
| `--description &lt;description&gt;` | New description for the endpoint |
| `--url &lt;url&gt;` | New webhook URL (webhooks only) |
| `--auth-type &lt;auth-type&gt;` | New authentication type |
| `--auth-value &lt;auth-value&gt;` | New auth secret value |
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
  Update an existing service endpoint

Usage:
  ppds service-endpoints update <name-or-id> [options]

Arguments:
  <name-or-id>  Service endpoint name or GUID

Options:
  --name <name>                      New display name for the endpoint
  --description <description>        New description for the endpoint
  --url <url>                        New webhook URL (webhooks only)
  --auth-type <auth-type>            New authentication type
  --auth-value <auth-value>          New auth secret value
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
