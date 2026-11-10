<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_import_jobs_get

Get full details of a specific import job including the XML import log. Use the id from ppds_import_jobs_list. The import log XML contains detailed component-level success/failure information for troubleshooting failed imports.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_import_jobs_get",
  "description": "Get full details of a specific import job including the XML import log. Use the id from ppds_import_jobs_list. The import log XML contains detailed component-level success/failure information for troubleshooting failed imports.",
  "type": "object",
  "properties": {
    "id": {
      "description": "The import job ID (GUID) from ppds_import_jobs_list",
      "type": "string"
    }
  },
  "required": [
    "id"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
