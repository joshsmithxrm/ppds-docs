<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_plugins_get

Get detailed information for a specific plugin registration entity (assembly, package, type, step, or image). Use ppds_plugins_list first to discover entity names/IDs.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_plugins_get",
  "description": "Get detailed information for a specific plugin registration entity (assembly, package, type, step, or image). Use ppds_plugins_list first to discover entity names/IDs.",
  "type": "object",
  "properties": {
    "type": {
      "description": "Entity type: assembly, package, type, step, or image",
      "type": "string"
    },
    "nameOrId": {
      "description": "Entity name or GUID",
      "type": "string"
    }
  },
  "required": [
    "type",
    "nameOrId"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
