<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_env_list

List available Dataverse environments. Use this to discover which environments are accessible with the current authentication profile. The currently selected environment is marked with isActive=true.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_env_list",
  "description": "List available Dataverse environments. Use this to discover which environments are accessible with the current authentication profile. The currently selected environment is marked with isActive=true.",
  "type": "object",
  "properties": {
    "filter": {
      "description": "Optional filter to search environments by name, URL, or ID",
      "type": "string",
      "default": null
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
