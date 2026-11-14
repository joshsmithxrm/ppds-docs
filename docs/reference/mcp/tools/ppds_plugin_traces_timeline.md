<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_plugin_traces_timeline

Build an execution timeline showing all plugin executions for a single transaction. Use the correlationId from ppds_plugin_traces_list to see how plugins chain together and identify performance bottlenecks.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_plugin_traces_timeline",
  "description": "Build an execution timeline showing all plugin executions for a single transaction. Use the correlationId from ppds_plugin_traces_list to see how plugins chain together and identify performance bottlenecks.",
  "type": "object",
  "properties": {
    "correlationId": {
      "description": "Correlation ID (GUID) from a trace - groups all traces from the same transaction",
      "type": "string"
    }
  },
  "required": [
    "correlationId"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
