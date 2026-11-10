<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds views

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [list](list.md)
- [get](get.md)
- [add-column](add-column.md)
- [remove-column](remove-column.md)
- [update-column](update-column.md)
- [reorder-columns](reorder-columns.md)
- [set-sort](set-sort.md)
- [clear-sort](clear-sort.md)
- [set-filter](set-filter.md)
- [clear-filter](clear-filter.md)
- [set-fetchxml](set-fetchxml.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Manage Dataverse savedqueries views: list, get, add-column, remove-column, update-column, reorder-columns, set-sort, clear-sort, set-filter, clear-filter, set-fetchxml

Usage:
  ppds views [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  list             List all views for an entity
  get              Get detailed view configuration including columns, sort, and filter
  add-column       Add one or more columns to a view
  remove-column    Remove a column from a view by attribute name
  update-column    Update the width of an existing column in a view
  reorder-columns  Reorder every existing column exactly once. Use remove-column to remove a column.
  set-sort         Set the sort order for a view. Multiple --sort flags applied in declaration order.
  clear-sort       Remove all sort configuration from a view
  set-filter       Set or replace the filter on a view.
  
                   Use --filter-file to apply a <filter> XML fragment from a file:
                     <filter type="and">
                       <condition attribute="statecode" operator="eq" value="0" />
                     </filter>
  
                   Use --condition for a quick single-condition filter: --condition "statecode:eq:0"
  clear-filter     Remove all filter conditions from a view
  set-fetchxml     Apply a complete FetchXML document to a view, replacing the existing fetchxml.
  
                   Expected format (file must have <fetch> as root element):
                     <fetch version="1.0" output-format="xml-platform" mapping="logical" no-lock="false">
                       <entity name="account">
                         <attribute name="name" />
                         <order attribute="name" descending="false" />
                         <filter type="and">
                           <condition attribute="statecode" operator="eq" value="0" />
                         </filter>
                       </entity>
                     </fetch>
```
