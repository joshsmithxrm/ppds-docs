<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [export](export.md)
- [import](import.md)
- [copy](copy.md)
- [analyze](analyze.md)
- [schema](schema.md)
- [users](users.md)
- [load](load.md)
- [update](update.md)
- [delete](delete.md)
- [truncate](truncate.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Data operations: export, import, copy, analyze, schema, users, load, update, delete, truncate

Usage:
  ppds data [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  export    Export data from Dataverse to a ZIP file
  import    Import data from a ZIP file into Dataverse
  copy      Copy data from source to target Dataverse environment
  analyze   Analyze schema and display dependency graph
  schema    Generate a migration schema from Dataverse metadata
  users     Generate user mapping file from source to target environment
  load      Load CSV data into a Dataverse entity
  update    Update records in a Dataverse entity (fails if record doesn't exist)
  delete    Delete records from a Dataverse entity
  truncate  Delete ALL records from an entity (DANGEROUS - use with caution)
```
