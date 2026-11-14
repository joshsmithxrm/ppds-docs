<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_forms_add_field

Add one existing column to an existing Main-form section by stable IDs. Saves and verifies an unpublished draft; never publishes. Use dryRun=true for a write-free preview. Avoid simultaneous editors when concurrencyMode is preflight-only.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_forms_add_field",
  "description": "Add one existing column to an existing Main-form section by stable IDs. Saves and verifies an unpublished draft; never publishes. Use dryRun=true for a write-free preview. Avoid simultaneous editors when concurrencyMode is preflight-only.",
  "type": "object",
  "properties": {
    "entityLogicalName": {
      "type": "string"
    },
    "formId": {
      "type": "string"
    },
    "sectionId": {
      "type": "string"
    },
    "fieldLogicalName": {
      "type": "string"
    },
    "expectedDraftHash": {
      "description": "Fingerprint from a fresh unpublished forms get",
      "type": "string"
    },
    "solutionUniqueName": {
      "type": "string",
      "default": null
    },
    "dryRun": {
      "type": "boolean",
      "default": false
    },
    "confirmEnvironment": {
      "description": "Exact environment URL acknowledgement for the first protected mutation in this session",
      "type": "string",
      "default": null
    }
  },
  "required": [
    "entityLogicalName",
    "formId",
    "sectionId",
    "fieldLogicalName",
    "expectedDraftHash"
  ]
}
```

## Annotations

```json
{
  "destructiveHint": false,
  "readOnlyHint": false
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
