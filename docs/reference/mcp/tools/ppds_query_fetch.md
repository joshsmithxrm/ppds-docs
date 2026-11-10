<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_query_fetch

Execute a FetchXML query against Dataverse. Use this when you have raw FetchXML or need advanced query features not available in SQL. Prefer ppds_query_sql for simpler queries.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_query_fetch",
  "description": "Execute a FetchXML query against Dataverse. Use this when you have raw FetchXML or need advanced query features not available in SQL. Prefer ppds_query_sql for simpler queries.",
  "type": "object",
  "properties": {
    "fetchXml": {
      "description": "FetchXML query string",
      "type": "string"
    },
    "maxRows": {
      "description": "Maximum rows to return (default 100, max 5000)",
      "type": "integer",
      "default": 100
    }
  },
  "required": [
    "fetchXml"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
