<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_update_table

Updates an existing Dataverse table (entity). Only the provided optional fields are changed; omitted fields remain unchanged. Supports dry-run mode.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_update_table",
  "description": "Updates an existing Dataverse table (entity). Only the provided optional fields are changed; omitted fields remain unchanged. Supports dry-run mode.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution containing the table.",
      "type": "string"
    },
    "entityName": {
      "description": "Logical name of the entity to update.",
      "type": "string"
    },
    "displayName": {
      "description": "Updated display name (optional).",
      "type": "string",
      "default": null
    },
    "pluralName": {
      "description": "Updated plural display name (optional).",
      "type": "string",
      "default": null
    },
    "description": {
      "description": "Updated description (optional).",
      "type": "string",
      "default": null
    },
    "dryRun": {
      "description": "If true, validates without persisting changes.",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "solution",
    "entityName"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
