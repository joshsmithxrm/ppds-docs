<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_data_analyze

Analyze data for a Dataverse entity. Returns record count, primary attributes, and sample records. Use this to understand the data in an entity before querying.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_data_analyze",
  "description": "Analyze data for a Dataverse entity. Returns record count, primary attributes, and sample records. Use this to understand the data in an entity before querying.",
  "type": "object",
  "properties": {
    "entityName": {
      "description": "Entity logical name (e.g., 'account', 'contact')",
      "type": "string"
    }
  },
  "required": [
    "entityName"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
