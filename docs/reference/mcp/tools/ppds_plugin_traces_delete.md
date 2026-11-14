<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_plugin_traces_delete

Delete plugin trace logs. Provide exactly one mode: specific IDs for targeted deletion, olderThanDays for age-based cleanup, or filter parameters (typeName, messageName, primaryEntity, errorsOnly) for criteria-based deletion.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_plugin_traces_delete",
  "description": "Delete plugin trace logs. Provide exactly one mode: specific IDs for targeted deletion, olderThanDays for age-based cleanup, or filter parameters (typeName, messageName, primaryEntity, errorsOnly) for criteria-based deletion.",
  "type": "object",
  "properties": {
    "ids": {
      "description": "Trace IDs to delete (array of GUID strings from ppds_plugin_traces_list)",
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": null
    },
    "olderThanDays": {
      "description": "Delete all traces older than this many days (minimum 1). Use for bulk cleanup.",
      "type": [
        "string",
        "integer",
        "null"
      ],
      "default": 0
    },
    "typeName": {
      "description": "Delete traces matching this plugin type name",
      "type": "string",
      "default": null
    },
    "messageName": {
      "description": "Delete traces matching this message name (e.g., 'Create', 'Update')",
      "type": "string",
      "default": null
    },
    "primaryEntity": {
      "description": "Delete traces matching this entity logical name (e.g., 'account')",
      "type": "string",
      "default": null
    },
    "errorsOnly": {
      "description": "Delete only traces that have exceptions",
      "type": [
        "boolean",
        "null"
      ],
      "default": false
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
