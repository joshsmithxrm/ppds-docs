<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_add_column

Adds a new column (attribute) to an existing Dataverse table. Supports all standard column types. Use dry-run to validate before committing.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_add_column",
  "description": "Adds a new column (attribute) to an existing Dataverse table. Supports all standard column types. Use dry-run to validate before committing.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution containing the table.",
      "type": "string"
    },
    "entityName": {
      "description": "Logical name of the entity to add the column to.",
      "type": "string"
    },
    "schemaName": {
      "description": "Schema name for the new column.",
      "type": "string"
    },
    "displayName": {
      "description": "Display name of the column.",
      "type": "string"
    },
    "type": {
      "description": "Column type: String, Integer, Decimal, Double, Money, Boolean, DateTime, Choice, Choices, Memo, BigInt, Image, File, Lookup.",
      "type": "string"
    },
    "description": {
      "description": "Description of the column (optional).",
      "type": "string",
      "default": null
    },
    "maxLength": {
      "description": "Maximum length for String/Memo columns (optional).",
      "type": [
        "string",
        "integer",
        "null"
      ],
      "default": 0
    },
    "minValue": {
      "description": "Minimum value for numeric columns (optional).",
      "type": [
        "string",
        "number",
        "null"
      ],
      "default": 0
    },
    "maxValue": {
      "description": "Maximum value for numeric columns (optional).",
      "type": [
        "string",
        "number",
        "null"
      ],
      "default": 0
    },
    "precision": {
      "description": "Precision for Decimal, Double, and Money columns (optional).",
      "type": [
        "string",
        "integer",
        "null"
      ],
      "default": 0
    },
    "format": {
      "description": "Format for String, Integer, or DateTime columns (optional).",
      "type": "string",
      "default": null
    },
    "dryRun": {
      "description": "If true, validates without persisting changes.",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "solution",
    "entityName",
    "schemaName",
    "displayName",
    "type"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
