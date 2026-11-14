<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds api request

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--path &lt;path&gt;` | [Required] Relative URL path (e.g., /api/data/v9.2/accounts) |
| `-X, --method &lt;method&gt;` | HTTP method (default: GET) |
| `--body &lt;body&gt;` | Request body as inline JSON string |
| `--body-file &lt;body-file&gt;` | Request body from file (mutually exclusive with --body) |
| `-H, --header &lt;header&gt;` | Additional header, repeatable (format: &quot;Name: Value&quot;) |
| `-i, --include` | Include HTTP status line and response headers in output |
| `-env, --environment &lt;environment&gt;` | Target environment URL (default: active profile) |
| `-p, --profile &lt;profile&gt;` | Authentication profile to use (default: active profile) |
| `--confirm` | Bypass write protection on production environments |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Send a raw HTTP request to the Dataverse Web API. Note: on Git Bash/MSYS a leading-slash --path (e.g. /api/data/v9.2/accounts) is rewritten into a Windows path before it reaches the CLI; prefix with MSYS_NO_PATHCONV=1, set MSYS2_ARG_CONV_EXCL='*', or run from PowerShell/cmd.

Usage:
  ppds api request [options]

Options:
  --path <path>                      [Required] Relative URL path (e.g., /api/data/v9.2/accounts)
  -X, --method <method>              HTTP method (default: GET)
  --body <body>                      Request body as inline JSON string
  --body-file <body-file>            Request body from file (mutually exclusive with --body)
  -H, --header <header>              Additional header, repeatable (format: "Name: Value")
  -i, --include                      Include HTTP status line and response headers in output
  -env, --environment <environment>  Target environment URL (default: active profile)
  -p, --profile <profile>            Authentication profile to use (default: active profile)
  --confirm                          Bypass write protection on production environments
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
