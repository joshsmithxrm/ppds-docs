<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_environment_variables_get

Get full details of a specific environment variable including description, type, and values. Use the schemaName from ppds_environment_variables_list.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_environment_variables_get",
  "description": "Get full details of a specific environment variable including description, type, and values. Use the schemaName from ppds_environment_variables_list.",
  "type": "object",
  "properties": {
    "schemaName": {
      "description": "Schema name of the environment variable",
      "type": "string"
    }
  },
  "required": [
    "schemaName"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
