<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data copy

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --schema &lt;schema&gt;` | [Required] Path to schema.xml file |
| `-sp, --source-profile &lt;source-profile&gt;` | Authentication profile for source environment (defaults to active profile) |
| `-tp, --target-profile &lt;target-profile&gt;` | Authentication profile(s) for target environment - comma-separated for parallel imports (defaults to active profile) |
| `-se, --source-env &lt;source-env&gt;` | [Required] Source environment - accepts URL, friendly name, unique name, or ID |
| `-te, --target-env &lt;target-env&gt;` | [Required] Target environment - accepts URL, friendly name, unique name, or ID |
| `--temp-dir &lt;temp-dir&gt;` | Temporary directory for intermediate data file (default: system temp) |
| `--parallel &lt;parallel&gt;` | Maximum concurrent entity exports (only applies when schema contains multiple entities) [default: 64] |
| `--batch-size &lt;batch-size&gt;` | Records per API request (all records are exported; this controls request size) [default: 5000] |
| `--bypass-plugins &lt;all\|async\|sync&gt;` | Bypass custom plugin execution on target: sync, async, or all (requires prvBypassCustomBusinessLogic privilege) |
| `--bypass-flows` | Bypass Power Automate flow triggers on target (no special privilege required) |
| `--skip-missing-columns` | Skip columns that exist in source but not in target environment (prevents schema mismatch errors) |
| `--continue-on-error` | Continue import on individual record failures |
| `--strip-owner-fields` | Strip ownership fields (ownerid, createdby, modifiedby) allowing Dataverse to assign current user |
| `-u, --user-mapping &lt;user-mapping&gt;` | Path to user mapping XML file for remapping user references |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-v, --verbose` | Enable verbose logging output |
| `--debug` | Enable diagnostic logging output |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Copy data from source to target Dataverse environment

Usage:
  ppds data copy [options]

Options:
  -s, --schema <schema>                   [Required] Path to schema.xml file
  -sp, --source-profile <source-profile>  Authentication profile for source environment (defaults to active profile)
  -tp, --target-profile <target-profile>  Authentication profile(s) for target environment - comma-separated for parallel imports (defaults to active profile)
  -se, --source-env <source-env>          [Required] Source environment - accepts URL, friendly name, unique name, or ID
  -te, --target-env <target-env>          [Required] Target environment - accepts URL, friendly name, unique name, or ID
  --temp-dir <temp-dir>                   Temporary directory for intermediate data file (default: system temp)
  --parallel <parallel>                   Maximum concurrent entity exports (only applies when schema contains multiple entities) [default: 64]
  --batch-size <batch-size>               Records per API request (all records are exported; this controls request size) [default: 5000]
  --bypass-plugins <all|async|sync>       Bypass custom plugin execution on target: sync, async, or all (requires prvBypassCustomBusinessLogic privilege)
  --bypass-flows                          Bypass Power Automate flow triggers on target (no special privilege required)
  --skip-missing-columns                  Skip columns that exist in source but not in target environment (prevents schema mismatch errors)
  --continue-on-error                     Continue import on individual record failures
  --strip-owner-fields                    Strip ownership fields (ownerid, createdby, modifiedby) allowing Dataverse to assign current user
  -u, --user-mapping <user-mapping>       Path to user mapping XML file for remapping user references
  -f, --output-format <Text|Json>         Output format [default: Text]
  -v, --verbose                           Enable verbose logging output
  --debug                                 Enable diagnostic logging output
  -?, -h, --help                          Show help and usage information
```
