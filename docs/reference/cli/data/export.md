<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data export

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --schema &lt;schema&gt;` | [Required] Path to schema.xml file |
| `-o, --output &lt;output&gt;` | [Required] Output ZIP file path |
| `-p, --profile &lt;profile&gt;` | Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota. |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `--parallel &lt;parallel&gt;` | Maximum concurrent entity exports (only applies when schema contains multiple entities) [default: 64] |
| `--batch-size &lt;batch-size&gt;` | Records per API request (all records are exported; this controls request size) [default: 5000] |
| `--page-parallel &lt;page-parallel&gt;` | Partitions per entity for page-level parallelism (0=auto, 1=disabled) [default: 0] |
| `--page-parallel-threshold &lt;page-parallel-threshold&gt;` | Minimum records before page-level parallelism activates [default: 5000] |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `--format &lt;Cmt\|Json&gt;` | Data export format: cmt (CMT-compatible XML ZIP) or json (PPDS-native JSON) [default: Cmt] |
| `-v, --verbose` | Enable verbose logging output |
| `--debug` | Enable diagnostic logging output |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Export data from Dataverse to a ZIP file

Usage:
  ppds data export [options]

Options:
  -s, --schema <schema>                                [Required] Path to schema.xml file
  -o, --output <output>                                [Required] Output ZIP file path
  -p, --profile <profile>                              Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota.
  -env, --environment <environment>                    Override the environment URL. Takes precedence over profile's bound environment.
  --parallel <parallel>                                Maximum concurrent entity exports (only applies when schema contains multiple entities) [default: 64]
  --batch-size <batch-size>                            Records per API request (all records are exported; this controls request size) [default: 5000]
  --page-parallel <page-parallel>                      Partitions per entity for page-level parallelism (0=auto, 1=disabled) [default: 0]
  --page-parallel-threshold <page-parallel-threshold>  Minimum records before page-level parallelism activates [default: 5000]
  -f, --output-format <Text|Json>                      Output format [default: Text]
  --format <Cmt|Json>                                  Data export format: cmt (CMT-compatible XML ZIP) or json (PPDS-native JSON) [default: Cmt]
  -v, --verbose                                        Enable verbose logging output
  --debug                                              Enable diagnostic logging output
  -?, -h, --help                                       Show help and usage information
```
