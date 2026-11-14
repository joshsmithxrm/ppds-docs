<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_plugins_list

List registered plugin assemblies in the Dataverse environment. Shows plugin types and their registered steps (message/entity/stage combinations). By default excludes hidden system assemblies and Microsoft.* assemblies.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_plugins_list",
  "description": "List registered plugin assemblies in the Dataverse environment. Shows plugin types and their registered steps (message/entity/stage combinations). By default excludes hidden system assemblies and Microsoft.* assemblies.",
  "type": "object",
  "properties": {
    "nameFilter": {
      "description": "Filter by assembly name (partial match)",
      "type": "string",
      "default": null
    },
    "includeHidden": {
      "description": "Include hidden system steps (default false)",
      "type": "boolean",
      "default": false
    },
    "includeMicrosoft": {
      "description": "Include Microsoft assemblies (default false)",
      "type": "boolean",
      "default": false
    },
    "maxRows": {
      "description": "Maximum assemblies to return (default 50, max 200)",
      "type": "integer",
      "default": 50
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
