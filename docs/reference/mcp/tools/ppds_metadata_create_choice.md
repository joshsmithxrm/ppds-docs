<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_create_choice

Creates a new global choice (option set) in the specified solution. Options are JSON &#123;label, value&#125; objects. Omit value to derive it from the solution publisher; explicit zero is preserved. Out-of-range explicit values produce warnings. Supports dry-run mode.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_create_choice",
  "description": "Creates a new global choice (option set) in the specified solution. Options are JSON {label, value} objects. Omit value to derive it from the solution publisher; explicit zero is preserved. Out-of-range explicit values produce warnings. Supports dry-run mode.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution to add the choice to.",
      "type": "string"
    },
    "schemaName": {
      "description": "Schema name for the global choice.",
      "type": "string"
    },
    "displayName": {
      "description": "Display name of the global choice.",
      "type": "string"
    },
    "description": {
      "description": "Description of the global choice.",
      "type": "string"
    },
    "optionsJson": {
      "description": "JSON array of option definitions: [{\"label\": \"Active\", \"value\": 1}, {\"label\": \"Inactive\", \"value\": 2}].",
      "type": "string"
    },
    "dryRun": {
      "description": "If true, validates without persisting changes.",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "solution",
    "schemaName",
    "displayName",
    "description",
    "optionsJson"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
