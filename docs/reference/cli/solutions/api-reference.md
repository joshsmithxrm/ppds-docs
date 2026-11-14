<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds solutions

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](list.md)
- [get](get.md)
- [export](export.md)
- [import](import.md)
- [components](components.md)
- [publish](publish.md)
- [url](url.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Manage Dataverse solutions: list, get, export, import, publish

Usage:
  ppds solutions [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list                      List solutions in the environment
  get <unique-name>         Get details for a specific solution
  export <unique-name>      Export a solution to a ZIP file
  import <file>             Import a solution from a ZIP file
  components <unique-name>  List components in a solution
  publish                   Publish all customizations (alias for ppds publish --all)
  url <unique-name>         Get the Maker portal URL for a solution
```
