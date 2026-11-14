<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds query history

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](history/list.md)
- [get](history/get.md)
- [execute](history/execute.md)
- [delete](history/delete.md)
- [clear](history/clear.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Manage SQL query history: list, get, execute, delete, clear

Usage:
  ppds query history [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list          List recent query history entries
  get <id>      Get a specific query history entry
  execute <id>  Re-execute a query from history
  delete <id>   Delete a query history entry
  clear         Clear all query history for the current environment
```
