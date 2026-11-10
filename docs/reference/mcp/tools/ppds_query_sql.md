<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_query_sql

Execute a SQL SELECT query against Dataverse. The SQL is transpiled to FetchXML internally. Supports JOINs, WHERE, ORDER BY, TOP, and aggregate functions. Example: SELECT name, revenue FROM account WHERE statecode = 0 ORDER BY revenue DESC

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_query_sql",
  "description": "Execute a SQL SELECT query against Dataverse. The SQL is transpiled to FetchXML internally. Supports JOINs, WHERE, ORDER BY, TOP, and aggregate functions. Example: SELECT name, revenue FROM account WHERE statecode = 0 ORDER BY revenue DESC",
  "type": "object",
  "properties": {
    "sql": {
      "description": "SQL SELECT statement (e.g., 'SELECT name, revenue FROM account WHERE statecode = 0')",
      "type": "string"
    },
    "maxRows": {
      "description": "Maximum rows to return (default 100, max 5000)",
      "type": "integer",
      "default": 100
    }
  },
  "required": [
    "sql"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
