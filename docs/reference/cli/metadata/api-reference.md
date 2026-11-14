<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [entities](entities.md)
- [entity](entity.md)
- [attribute](attribute.md)
- [attributes](attributes.md)
- [relationships](relationships.md)
- [keys](keys.md)
- [optionsets](optionsets.md)
- [optionset](optionset.md)
- [publish](publish.md)
- [table](table.md)
- [column](column.md)
- [relationship](relationship.md)
- [choice](choice.md)
- [key](key.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Browse Dataverse entity metadata: entities, attributes, relationships, option sets

Usage:
  ppds metadata [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  entities                List all entities with basic information
  entity <entity>         Get full metadata for a specific entity, or create/update/delete entities and manage status reasons (see subcommands)
  attribute               Create, update, or delete columns (attributes) on Dataverse tables
  attributes <entity>     List attributes for an entity
  relationships <entity>  List relationships for an entity
  keys <entity>           List alternate keys for an entity
  optionsets              List global option sets
  optionset <name>        Get details for or manage a global option set (choice)
  publish <names>         Publish entity metadata (alias for ppds publish --type entity)
  table                   Create, update, or delete Dataverse tables (deprecated - use 'entity')
  column                  Create, update, or delete columns (deprecated - use 'attribute')
  relationship            Create, update, or delete Dataverse relationships
  choice                  Manage global choices/option sets (deprecated - use 'optionset')
  key                     Create, delete, or reactivate alternate keys on Dataverse tables
```
