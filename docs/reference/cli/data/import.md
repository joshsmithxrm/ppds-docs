<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data import

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-d, --data &lt;data&gt;` | [Required] Path to data.zip file |
| `-p, --profile &lt;profile&gt;` | Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota. |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `--bypass-plugins &lt;all\|async\|sync&gt;` | Bypass custom plugin execution: sync, async, or all (requires prvBypassCustomBusinessLogic privilege) |
| `--bypass-flows` | Bypass Power Automate flow triggers (no special privilege required) |
| `--continue-on-error` | Continue import on individual record failures |
| `-m, --mode &lt;Create\|Skip\|Update\|Upsert&gt;` | Import mode: Create, Update, or Upsert [default: Upsert] |
| `-u, --user-mapping &lt;user-mapping&gt;` | Path to user mapping XML file for remapping user references |
| `--strip-owner-fields` | Strip ownership fields (ownerid, createdby, modifiedby) allowing Dataverse to assign current user |
| `--skip-missing-columns` | Skip columns that exist in exported data but not in target environment (prevents schema mismatch errors) |
| `--resolve-lookups` | Enable external lookup resolution (ID check, then name-based query) |
| `--skip-unresolved-lookups` | Null unresolved lookups instead of failing the record [default: True] (requires --resolve-lookups) |
| `--impersonate-owners` | Preserve record ownership via CallerAADObjectId impersonation (requires --user-mapping) |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-v, --verbose` | Enable verbose logging output |
| `--debug` | Enable diagnostic logging output |
| `--error-report &lt;error-report&gt;` | Base path for output files (creates .errors.jsonl, .progress.log, .summary.json). Errors are streamed in real-time. |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Import data from a ZIP file into Dataverse

Usage:
  ppds data import [options]

Options:
  -d, --data <data>                       [Required] Path to data.zip file
  -p, --profile <profile>                 Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota.
  -env, --environment <environment>       Override the environment URL. Takes precedence over profile's bound environment.
  --bypass-plugins <all|async|sync>       Bypass custom plugin execution: sync, async, or all (requires prvBypassCustomBusinessLogic privilege)
  --bypass-flows                          Bypass Power Automate flow triggers (no special privilege required)
  --continue-on-error                     Continue import on individual record failures
  -m, --mode <Create|Skip|Update|Upsert>  Import mode: Create, Update, or Upsert [default: Upsert]
  -u, --user-mapping <user-mapping>       Path to user mapping XML file for remapping user references
  --strip-owner-fields                    Strip ownership fields (ownerid, createdby, modifiedby) allowing Dataverse to assign current user
  --skip-missing-columns                  Skip columns that exist in exported data but not in target environment (prevents schema mismatch errors)
  --resolve-lookups                       Enable external lookup resolution (ID check, then name-based query)
  --skip-unresolved-lookups               Null unresolved lookups instead of failing the record [default: True] (requires --resolve-lookups)
  --impersonate-owners                    Preserve record ownership via CallerAADObjectId impersonation (requires --user-mapping)
  -f, --output-format <Text|Json>         Output format [default: Text]
  -v, --verbose                           Enable verbose logging output
  --debug                                 Enable diagnostic logging output
  --error-report <error-report>           Base path for output files (creates .errors.jsonl, .progress.log, .summary.json). Errors are streamed in real-time.
  -?, -h, --help                          Show help and usage information
```
