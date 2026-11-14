<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins list

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-a, --assembly &lt;assembly&gt;` | Filter by assembly name (classic DLL plugins) |
| `-pkg, --package &lt;package&gt;` | Filter by package name or unique name (NuGet plugin packages) |
| `--include-hidden` | Include hidden steps (excluded by default) |
| `--include-microsoft` | Include Microsoft.* assemblies (excluded by default, except Microsoft.Crm.ServiceBus) |
| `--all` | Show all plugins (equivalent to --include-hidden --include-microsoft) |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  List registered plugins in the environment

Usage:
  ppds plugins list [options]

Options:
  -p, --profile <profile>            Authentication profile name
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -a, --assembly <assembly>          Filter by assembly name (classic DLL plugins)
  -pkg, --package <package>          Filter by package name or unique name (NuGet plugin packages)
  --include-hidden                   Include hidden steps (excluded by default)
  --include-microsoft                Include Microsoft.* assemblies (excluded by default, except Microsoft.Crm.ServiceBus)
  --all                              Show all plugins (equivalent to --include-hidden --include-microsoft)
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
