<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_connection_references_get

Get full details of a specific connection reference including dependent flows and connection info. Use the logicalName from ppds_connection_references_list.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_connection_references_get",
  "description": "Get full details of a specific connection reference including dependent flows and connection info. Use the logicalName from ppds_connection_references_list.",
  "type": "object",
  "properties": {
    "logicalName": {
      "description": "Logical name of the connection reference",
      "type": "string"
    }
  },
  "required": [
    "logicalName"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
