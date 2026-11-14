<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugin-traces

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](list.md)
- [get](get.md)
- [settings](settings.md)
- [related](related.md)
- [timeline](timeline.md)
- [delete](delete.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Query and manage plugin trace logs: list, get, related, timeline, settings, delete

Usage:
  ppds plugin-traces [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list                 List plugin trace logs with optional filtering
  get <trace-id>       Get detailed information about a plugin trace
  settings             View or set plugin trace logging settings
  related <trace-id>   Get plugin traces related by correlation ID or record
  timeline <trace-id>  Display plugin execution timeline as a hierarchy tree
  delete <trace-id>    Delete plugin trace logs
```
