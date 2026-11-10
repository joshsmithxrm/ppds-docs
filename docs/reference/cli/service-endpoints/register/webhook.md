<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds service-endpoints register webhook

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--url &lt;url&gt;` | [Required] Absolute HTTPS/HTTP URL of the webhook receiver |
| `--auth-type &lt;auth-type&gt;` | [Required] Authentication type: WebhookKey, HttpHeader, or HttpQueryString |
| `--auth-key &lt;auth-key&gt;` | Auth key name (for HttpHeader or HttpQueryString auth types) |
| `--auth-value &lt;auth-value&gt;` | Auth secret value. For WebhookKey: plain string. For HttpHeader/HttpQueryString: name=value pairs. |
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
  Register an HTTP webhook endpoint

Usage:
  ppds service-endpoints register webhook <name> [options]

Arguments:
  <name>  Unique display name for the webhook endpoint

Options:
  --url <url>                        [Required] Absolute HTTPS/HTTP URL of the webhook receiver
  --auth-type <auth-type>            [Required] Authentication type: WebhookKey, HttpHeader, or HttpQueryString
  --auth-key <auth-key>              Auth key name (for HttpHeader or HttpQueryString auth types)
  --auth-value <auth-value>          Auth secret value. For WebhookKey: plain string. For HttpHeader/HttpQueryString: name=value pairs.
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
