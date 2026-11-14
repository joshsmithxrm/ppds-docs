<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_environment_variables_list

List environment variable definitions and their current values. Shows default vs current values, type, and override status. Optionally filter by solution name.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_environment_variables_list",
  "description": "List environment variable definitions and their current values. Shows default vs current values, type, and override status. Optionally filter by solution name.",
  "type": "object",
  "properties": {
    "solutionId": {
      "description": "Solution unique name to filter by",
      "type": "string",
      "default": null
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
