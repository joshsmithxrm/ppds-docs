<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_environment_variables_set

Set the current value of an environment variable. Creates the value record if none exists. AI agents can use this to fix misconfigurations during deployment troubleshooting.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_environment_variables_set",
  "description": "Set the current value of an environment variable. Creates the value record if none exists. AI agents can use this to fix misconfigurations during deployment troubleshooting.",
  "type": "object",
  "properties": {
    "schemaName": {
      "description": "Schema name of the environment variable",
      "type": "string"
    },
    "value": {
      "description": "New value to set",
      "type": "string"
    }
  },
  "required": [
    "schemaName",
    "value"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
