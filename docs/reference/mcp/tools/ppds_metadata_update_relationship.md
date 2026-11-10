<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_update_relationship

Updates an existing Dataverse relationship&#x27;s cascade configuration. Only the provided optional fields are changed; omitted fields remain unchanged. Supports dry-run mode.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_update_relationship",
  "description": "Updates an existing Dataverse relationship's cascade configuration. Only the provided optional fields are changed; omitted fields remain unchanged. Supports dry-run mode.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution containing the relationship.",
      "type": "string"
    },
    "schemaName": {
      "description": "Schema name of the relationship to update.",
      "type": "string"
    },
    "cascadeDelete": {
      "description": "Cascade behavior for delete: 'Cascade', 'NoCascade', 'RemoveLink', 'Restrict' (optional).",
      "type": "string",
      "default": null
    },
    "cascadeAssign": {
      "description": "Cascade behavior for assign: 'Cascade', 'NoCascade', 'Active', 'UserOwned' (optional).",
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
    "schemaName"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
