<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds service-endpoints

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
  Service endpoint management: list, get, register, update, unregister

Usage:
  ppds service-endpoints [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list                     List registered service endpoints in the environment
  get <name-or-id>         Get details for a specific service endpoint
  register                 Register a service endpoint: webhook, queue, topic, eventhub
  update <name-or-id>      Update an existing service endpoint
  unregister <name-or-id>  Unregister a service endpoint from Dataverse
```
