<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_forms_list

List forms for a Dataverse table, including stable IDs, form types and managed status.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_forms_list",
  "description": "List forms for a Dataverse table, including stable IDs, form types and managed status.",
  "type": "object",
  "properties": {
    "entityLogicalName": {
      "description": "Table logical name",
      "type": "string"
    }
  },
  "required": [
    "entityLogicalName"
  ]
}
```

## Annotations

```json
{
  "readOnlyHint": true
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
