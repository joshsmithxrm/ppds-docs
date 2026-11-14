<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds custom-apis

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](list.md)
- [get](get.md)
- [register](register.md)
- [update](update.md)
- [unregister](unregister.md)
- [add-parameter](add-parameter.md)
- [update-parameter](update-parameter.md)
- [remove-parameter](remove-parameter.md)
- [set-plugin](set-plugin.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Custom API management: list, get, register, update, unregister, add-parameter, update-parameter, remove-parameter

Usage:
  ppds custom-apis [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list                                      List registered Custom APIs in the environment
  get <unique-name-or-id>                   Get details for a specific Custom API
  register <unique-name>                    Register a new Custom API in Dataverse
  update <unique-name-or-id>                Update an existing Custom API
  unregister <unique-name-or-id>            Unregister a Custom API from Dataverse
  add-parameter <api-name> <param-name>     Add a request parameter or response property to a Custom API
  update-parameter <api-name> <param-name>  Update display name or description of a Custom API parameter
  remove-parameter <api-name> <param-name>  Remove a request parameter or response property from a Custom API
  set-plugin <unique-name-or-id>            Set or clear the implementing plugin type on a Custom API
```
