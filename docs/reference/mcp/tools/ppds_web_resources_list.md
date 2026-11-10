<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_web_resources_list

List web resources in a Dataverse environment, optionally filtered by solution. Returns name, type, managed status, and modification info. Use textOnly=true (default) to exclude binary types like images. Supports pagination via maxRows and nextPageToken parameters — when more records exist the response includes a nextPageToken to pass on the next call.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_web_resources_list",
  "description": "List web resources in a Dataverse environment, optionally filtered by solution. Returns name, type, managed status, and modification info. Use textOnly=true (default) to exclude binary types like images. Supports pagination via maxRows and nextPageToken parameters — when more records exist the response includes a nextPageToken to pass on the next call.",
  "type": "object",
  "properties": {
    "solutionId": {
      "description": "Optional solution ID (GUID) to filter web resources by solution",
      "type": "string",
      "default": null
    },
    "textOnly": {
      "description": "If true, only return text-based web resources like JS/HTML/CSS (default true)",
      "type": "boolean",
      "default": true
    },
    "maxRows": {
      "description": "Maximum records per page (default 100, max 500)",
      "type": "integer",
      "default": 100
    },
    "nextPageToken": {
      "description": "Pagination cursor from a previous call's nextPageToken field",
      "type": "string",
      "default": null
    }
  }
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
