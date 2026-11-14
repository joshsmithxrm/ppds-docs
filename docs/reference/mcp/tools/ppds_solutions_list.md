<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_solutions_list

List Dataverse solutions for the current environment. Shows solution name, version, publisher, and managed status. Use includeManaged to also show managed (system) solutions.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_solutions_list",
  "description": "List Dataverse solutions for the current environment. Shows solution name, version, publisher, and managed status. Use includeManaged to also show managed (system) solutions.",
  "type": "object",
  "properties": {
    "filter": {
      "description": "Optional filter by solution name (friendly name or unique name)",
      "type": "string",
      "default": null
    },
    "includeManaged": {
      "description": "Include managed solutions in the results (default false)",
      "type": "boolean",
      "default": false
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
