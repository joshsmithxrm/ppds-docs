<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_plugin_traces_list

List plugin trace logs from Dataverse. Use this to find plugin execution logs, identify errors, and debug plugin behavior. Requires trace logging to be enabled in the environment.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_plugin_traces_list",
  "description": "List plugin trace logs from Dataverse. Use this to find plugin execution logs, identify errors, and debug plugin behavior. Requires trace logging to be enabled in the environment.",
  "type": "object",
  "properties": {
    "entity": {
      "description": "Filter by entity logical name (e.g., 'account')",
      "type": "string",
      "default": null
    },
    "message": {
      "description": "Filter by message name (e.g., 'Create', 'Update')",
      "type": "string",
      "default": null
    },
    "typeName": {
      "description": "Filter by plugin type name",
      "type": "string",
      "default": null
    },
    "errorsOnly": {
      "description": "Show only traces with exceptions",
      "type": "boolean",
      "default": false
    },
    "maxRows": {
      "description": "Maximum rows to return (default 50, max 500)",
      "type": "integer",
      "default": 50
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
