<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_entity

Get detailed metadata for a Dataverse entity including attributes, relationships, and keys. Use this to understand entity structure, field types, and how entities relate to each other.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_entity",
  "description": "Get detailed metadata for a Dataverse entity including attributes, relationships, and keys. Use this to understand entity structure, field types, and how entities relate to each other.",
  "type": "object",
  "properties": {
    "entityName": {
      "description": "Entity logical name (e.g., 'account', 'contact')",
      "type": "string"
    },
    "includeAttributes": {
      "description": "Include attribute details (default true)",
      "type": "boolean",
      "default": true
    },
    "includeRelationships": {
      "description": "Include relationship details (default false)",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "entityName"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
