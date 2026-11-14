<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data load

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-e, --entity &lt;entity&gt;` | [Required] Target entity logical name (-e is deprecated; use --entity.) |
| `-f, --file &lt;file&gt;` | [Required] Path to CSV file |
| `-k, --key &lt;key&gt;` | Alternate key field(s) for upsert. Comma-separated for composite keys. |
| `-m, --mapping &lt;mapping&gt;` | Path to column mapping JSON file |
| `--generate-mapping &lt;generate-mapping&gt;` | Generate mapping template to specified file |
| `--dry-run` | Validate without writing to Dataverse |
| `--batch-size &lt;batch-size&gt;` | Records per batch (default: 100) [default: 100] |
| `--bypass-plugins &lt;all\|async\|sync&gt;` | Bypass custom plugin execution: sync, async, or all (requires prvBypassCustomBusinessLogic privilege) |
| `--bypass-flows` | Bypass Power Automate flow triggers |
| `--continue-on-error` | Continue loading on individual record failures |
| `--force` | Force loading even when auto-mapping is incomplete (unmatched columns will be skipped) |
| `--analyze` | Analyze mapping without loading data (preview which columns match) |
| `-p, --profile &lt;profile&gt;` | Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota. |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-o, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-v, --verbose` | Enable verbose logging output |
| `--debug` | Enable diagnostic logging output |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Load CSV data into a Dataverse entity

Usage:
  ppds data load [options]

Options:
  -e, --entity <entity>                  [Required] Target entity logical name (-e is deprecated; use --entity.)
  -f, --file <file>                      [Required] Path to CSV file
  -k, --key <key>                        Alternate key field(s) for upsert. Comma-separated for composite keys.
  -m, --mapping <mapping>                Path to column mapping JSON file
  --generate-mapping <generate-mapping>  Generate mapping template to specified file
  --dry-run                              Validate without writing to Dataverse
  --batch-size <batch-size>              Records per batch (default: 100) [default: 100]
  --bypass-plugins <all|async|sync>      Bypass custom plugin execution: sync, async, or all (requires prvBypassCustomBusinessLogic privilege)
  --bypass-flows                         Bypass Power Automate flow triggers
  --continue-on-error                    Continue loading on individual record failures
  --force                                Force loading even when auto-mapping is incomplete (unmatched columns will be skipped)
  --analyze                              Analyze mapping without loading data (preview which columns match)
  -p, --profile <profile>                Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota.
  -env, --environment <environment>      Override the environment URL. Takes precedence over profile's bound environment.
  -o, --output-format <Text|Json>        Output format [default: Text]
  -v, --verbose                          Enable verbose logging output
  --debug                                Enable diagnostic logging output
  -?, -h, --help                         Show help and usage information
```
