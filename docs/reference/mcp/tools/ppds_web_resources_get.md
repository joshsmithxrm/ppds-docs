<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_web_resources_get

Get web resource content for viewing or analysis. Returns decoded text content for text types (JS, HTML, CSS, XML, etc.) and metadata-only for binary types (PNG, JPG, GIF). Use the id from ppds_web_resources_list.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_web_resources_get",
  "description": "Get web resource content for viewing or analysis. Returns decoded text content for text types (JS, HTML, CSS, XML, etc.) and metadata-only for binary types (PNG, JPG, GIF). Use the id from ppds_web_resources_list.",
  "type": "object",
  "properties": {
    "id": {
      "description": "The web resource ID (GUID) from ppds_web_resources_list",
      "type": "string"
    },
    "published": {
      "description": "If true, gets published content; if false, gets unpublished/draft content (default false)",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "id"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
