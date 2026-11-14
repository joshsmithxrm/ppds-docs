<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds query fetch

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `--file &lt;file&gt;` | Read FetchXML from a file |
| `--stdin` | Read FetchXML from standard input |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-t, --top &lt;top&gt;` | Limit the number of results returned |
| `--page &lt;page&gt;` | Page number (1-based) for paged results |
| `--paging-cookie &lt;paging-cookie&gt;` | Paging cookie from previous query for continuation |
| `-c, --count` | Include total record count in results |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json\|Csv&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Execute a FetchXML query against Dataverse

Usage:
  ppds query fetch [<fetchxml>] [options]

Arguments:
  <fetchxml>  FetchXML query string. Can be omitted if using --file or --stdin.

Options:
  --file <file>                        Read FetchXML from a file
  --stdin                              Read FetchXML from standard input
  -p, --profile <profile>              Authentication profile name
  -env, --environment <environment>    Override the environment URL. Takes precedence over profile's bound environment.
  -t, --top <top>                      Limit the number of results returned
  --page <page>                        Page number (1-based) for paged results
  --paging-cookie <paging-cookie>      Paging cookie from previous query for continuation
  -c, --count                          Include total record count in results
  -q, --quiet                          Show only warnings and errors
  -v, --verbose                        Show detailed output including debug messages
  --debug                              Show trace-level diagnostic output
  --correlation-id <correlation-id>    Correlation ID for distributed tracing
  -f, --output-format <Text|Json|Csv>  Output format [default: Text]
  -?, -h, --help                       Show help and usage information
```
