<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds query

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [fetch](fetch.md)
- [sql](sql.md)
- [explain](explain.md)
- [history](history.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Execute FetchXML and SQL queries against Dataverse

Usage:
  ppds query [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  fetch <fetchxml>  Execute a FetchXML query against Dataverse
  sql <sql>         Execute a SQL query against Dataverse (transpiled to FetchXML)
  explain <sql>     Show the execution plan for a SQL query
  history           Manage SQL query history: list, get, execute, delete, clear
```
