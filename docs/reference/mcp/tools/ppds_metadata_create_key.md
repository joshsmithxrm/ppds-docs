<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_create_key

Creates an alternate key on a Dataverse table. Attributes can be provided as a comma-separated list or a JSON array of column logical names. Supports dry-run mode.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_create_key",
  "description": "Creates an alternate key on a Dataverse table. Attributes can be provided as a comma-separated list or a JSON array of column logical names. Supports dry-run mode.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution containing the table.",
      "type": "string"
    },
    "entityName": {
      "description": "Logical name of the entity to add the key to.",
      "type": "string"
    },
    "schemaName": {
      "description": "Schema name for the key.",
      "type": "string"
    },
    "displayName": {
      "description": "Display name of the key.",
      "type": "string"
    },
    "attributesJson": {
      "description": "Comma-separated column logical names or JSON array of strings (e.g., 'col1,col2' or '[\"col1\",\"col2\"]').",
      "type": "string"
    },
    "dryRun": {
      "description": "If true, validates without persisting changes.",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "solution",
    "entityName",
    "schemaName",
    "displayName",
    "attributesJson"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
