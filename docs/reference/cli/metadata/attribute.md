<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata attribute

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [create](attribute/create.md)
- [update](attribute/update.md)
- [delete](attribute/delete.md)
- [add-option](attribute/add-option.md)
- [update-option](attribute/update-option.md)
- [remove-option](attribute/remove-option.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Create, update, or delete columns (attributes) on Dataverse tables

Usage:
  ppds metadata attribute [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  create         Create a new attribute on a Dataverse table (for Choice/Choices columns use --option to define a local option set, or --choice to attach a global one)
  update         Update an existing attribute on a Dataverse table
  delete         Delete an attribute from a Dataverse table
  add-option     Add an option to a column's local option set
  update-option  Update an option (label/color) on a column's local option set
  remove-option  Remove an option from a column's local option set
```
