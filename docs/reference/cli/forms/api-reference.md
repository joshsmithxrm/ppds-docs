<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds forms

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](list.md)
- [get](get.md)
- [set-xml](set-xml.md)
- [add-tab](add-tab.md)
- [update-tab](update-tab.md)
- [remove-tab](remove-tab.md)
- [find-tab](find-tab.md)
- [add-section](add-section.md)
- [update-section](update-section.md)
- [remove-section](remove-section.md)
- [find-section](find-section.md)
- [add-field](add-field.md)
- [remove-field](remove-field.md)
- [reorder-fields](reorder-fields.md)
- [reorder-fields-strict](reorder-fields-strict.md)
- [move-field](move-field.md)
- [add-subgrid](add-subgrid.md)
- [remove-subgrid](remove-subgrid.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Inspect and modify Dataverse systemform records: list forms, view form structure, and manage tabs, sections, fields, and sub-grids

Usage:
  ppds forms [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list                   List systemforms for a Dataverse entity
  get                    Get the structure of a specific Dataverse systemform
  set-xml                Write raw form XML to a Dataverse systemform record. Schema validation is applied before writing. GUID format is defined by the schema. Instance id and labelid GUIDs must be unique; customControl type IDs under controlDescriptions may repeat.
  add-tab                Add a tab to a Main form
  update-tab             Update properties of an existing tab on a Main form
  remove-tab             Remove a tab from a Main form
  find-tab               Find a tab in a form by label and return its ID and position
  add-section            Add a section to a tab on a Main form
  update-section         Update properties of an existing section on a Main form
  remove-section         Remove a section from a Main form
  find-section           Find a section in a form by label and return its ID and parent tab
  add-field              Add one or more fields to a section on a Main form. classid is resolved automatically from column metadata - never specify it directly.
  remove-field           Remove a field from a Main form. Without --section, removes all occurrences of the field; with --section, removes only from the specified section.
  reorder-fields         Reorder fields in a section. Provide the authoritative ordered list; fields not in the list are removed.
  reorder-fields-strict  Reorder all existing section fields without adding or removing cells.
  move-field             Move an existing field cell without copying or replacing controls.
  add-subgrid            Add a sub-grid control to a section on a Main form
  remove-subgrid         Remove a sub-grid from a Main form by label or name
```
