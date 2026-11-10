<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds webresources

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](list.md)
- [get](get.md)
- [url](url.md)
- [publish](publish.md)
- [pull](pull.md)
- [push](push.md)
- [create](create.md)
- [update](update.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Manage Dataverse web resources: list, get, url, publish, pull, push, create, update

Usage:
  ppds webresources [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list <name-pattern>   List web resources in the environment
  get <name>            Get web resource content
  url <name>            Get the Maker portal URL for a web resource
  publish <names>       Publish web resources (alias for ppds publish --type webresource)
  pull <folder>         Pull web resources to a local folder with tracking metadata
  push <folder>         Push locally-modified web resources back to Dataverse
  create <file>         Create a new web resource from a local file
  update <name> <file>  Update an existing web resource's content from a local file
```
