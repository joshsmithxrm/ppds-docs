<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_web_resources_publish

Publish specific web resources to make changes live. After updating web resource content, you must publish for changes to take effect. Provide one or more web resource IDs.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_web_resources_publish",
  "description": "Publish specific web resources to make changes live. After updating web resource content, you must publish for changes to take effect. Provide one or more web resource IDs.",
  "type": "object",
  "properties": {
    "ids": {
      "description": "Array of web resource IDs (GUIDs) to publish",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "ids"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
