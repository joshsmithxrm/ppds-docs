<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_plugin_traces_get

Get detailed information about a specific plugin trace including the full message block (trace output) and exception details. Use the trace ID from ppds_plugin_traces_list.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_plugin_traces_get",
  "description": "Get detailed information about a specific plugin trace including the full message block (trace output) and exception details. Use the trace ID from ppds_plugin_traces_list.",
  "type": "object",
  "properties": {
    "traceId": {
      "description": "Trace ID (GUID) from ppds_plugin_traces_list",
      "type": "string"
    }
  },
  "required": [
    "traceId"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
