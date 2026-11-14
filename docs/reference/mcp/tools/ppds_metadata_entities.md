<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_entities

Lists all entities (tables) in the connected Dataverse environment. Returns entity logical names, display names, schema names, and ownership type. Use this to discover available entities before querying with ppds_metadata_entity for full details.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_entities",
  "description": "Lists all entities (tables) in the connected Dataverse environment. Returns entity logical names, display names, schema names, and ownership type. Use this to discover available entities before querying with ppds_metadata_entity for full details.",
  "type": "object",
  "properties": {
    "customOnly": {
      "description": "If true, only return custom entities (not system entities).",
      "type": "boolean",
      "default": false
    },
    "filter": {
      "description": "Optional filter pattern to match entity logical names. Supports * wildcard (e.g., 'account*', '*custom*').",
      "type": "string",
      "default": null
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
