<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data truncate

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-e, --entity &lt;entity&gt;` | [Required] Entity logical name to truncate (delete ALL records) (-e is deprecated; use --entity.) |
| `--dry-run` | Preview record count without deleting |
| `--force` | Skip confirmation prompt (required for non-interactive execution) |
| `--batch-size &lt;batch-size&gt;` | Records per delete batch (default: 1000) [default: 1000] |
| `--bypass-plugins &lt;all\|async\|sync&gt;` | Bypass custom plugin execution: sync, async, or all (requires prvBypassCustomBusinessLogic privilege) |
| `--bypass-flows` | Bypass Power Automate flow triggers |
| `--continue-on-error` | Continue deleting on individual record failures |
| `-p, --profile &lt;profile&gt;` | Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota. |
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
  Delete ALL records from an entity (DANGEROUS - use with caution)

Usage:
  ppds data truncate [options]

Options:
  -e, --entity <entity>              [Required] Entity logical name to truncate (delete ALL records) (-e is deprecated; use --entity.)
  --dry-run                          Preview record count without deleting
  --force                            Skip confirmation prompt (required for non-interactive execution)
  --batch-size <batch-size>          Records per delete batch (default: 1000) [default: 1000]
  --bypass-plugins <all|async|sync>  Bypass custom plugin execution: sync, async, or all (requires prvBypassCustomBusinessLogic privilege)
  --bypass-flows                     Bypass Power Automate flow triggers
  --continue-on-error                Continue deleting on individual record failures
  -p, --profile <profile>            Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota.
  -env, --environment <environment>  Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                        Show only warnings and errors
  -v, --verbose                      Show detailed output including debug messages
  --debug                            Show trace-level diagnostic output
  --correlation-id <correlation-id>  Correlation ID for distributed tracing
  -f, --output-format <Text|Json>    Output format [default: Text]
  -?, -h, --help                     Show help and usage information
```
