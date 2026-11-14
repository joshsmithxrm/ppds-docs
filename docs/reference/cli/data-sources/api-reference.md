<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data-sources

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](list.md)
- [get](get.md)
- [register](register.md)
- [update](update.md)
- [unregister](unregister.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Data source management: list, get, register, update, unregister

Usage:
  ppds data-sources [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list                     List registered data sources in the environment
  get <name-or-id>         Get details for a specific data source
  register <name>          Register a new data source entity in Dataverse
  update <name-or-id>      Update a data source (no mutable attributes; see help)
  unregister <name-or-id>  Unregister a data source and cascade-delete all child data providers
```
