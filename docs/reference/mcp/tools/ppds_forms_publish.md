<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_forms_publish

Publish ALL pending customizations for the selected table, including changes beyond the selected form. Requires confirmPublishEntity equal to the table logical name. Verifies only the selected form after entity-scoped publication.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_forms_publish",
  "description": "Publish ALL pending customizations for the selected table, including changes beyond the selected form. Requires confirmPublishEntity equal to the table logical name. Verifies only the selected form after entity-scoped publication.",
  "type": "object",
  "properties": {
    "entityLogicalName": {
      "type": "string"
    },
    "formId": {
      "type": "string"
    },
    "expectedDraftHash": {
      "type": "string"
    },
    "confirmPublishEntity": {
      "description": "Exact table logical name acknowledging table-wide publication",
      "type": "string"
    },
    "confirmEnvironment": {
      "type": "string",
      "default": null
    }
  },
  "required": [
    "entityLogicalName",
    "formId",
    "expectedDraftHash",
    "confirmPublishEntity"
  ]
}
```

## Annotations

```json
{
  "readOnlyHint": false
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
