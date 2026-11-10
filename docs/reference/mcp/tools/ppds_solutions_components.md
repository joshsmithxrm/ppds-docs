<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_solutions_components

Get components of a Dataverse solution. Returns entities, workflows, plugins, and other components. Use the solution id from ppds_solutions_list. Optionally filter by component type code.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_solutions_components",
  "description": "Get components of a Dataverse solution. Returns entities, workflows, plugins, and other components. Use the solution id from ppds_solutions_list. Optionally filter by component type code.",
  "type": "object",
  "properties": {
    "solutionId": {
      "description": "The solution ID (GUID) from ppds_solutions_list",
      "type": "string"
    },
    "componentType": {
      "description": "Optional component type code to filter by (e.g., 1 = Entity, 26 = View, 29 = Workflow)",
      "type": [
        "string",
        "integer",
        "null"
      ],
      "default": 0
    }
  },
  "required": [
    "solutionId"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
