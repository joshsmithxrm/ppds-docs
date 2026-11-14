<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_forms_get

Inspect a form by ID. Use unpublished=true to inspect its draft and obtain the fingerprint required before editing or publishing.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_forms_get",
  "description": "Inspect a form by ID. Use unpublished=true to inspect its draft and obtain the fingerprint required before editing or publishing.",
  "type": "object",
  "properties": {
    "entityLogicalName": {
      "description": "Table logical name",
      "type": "string"
    },
    "formId": {
      "description": "Stable form ID",
      "type": "string"
    },
    "unpublished": {
      "description": "Read unpublished draft instead of published form",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "entityLogicalName",
    "formId"
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
