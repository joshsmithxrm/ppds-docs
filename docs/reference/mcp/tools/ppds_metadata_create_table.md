<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_create_table

Creates a new Dataverse table (entity) in the specified solution. Supports dry-run mode for validation without persisting changes. Use ppds_metadata_entities to verify the table was created.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_create_table",
  "description": "Creates a new Dataverse table (entity) in the specified solution. Supports dry-run mode for validation without persisting changes. Use ppds_metadata_entities to verify the table was created.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution to add the table to.",
      "type": "string"
    },
    "schemaName": {
      "description": "Schema name for the new table (e.g., 'new_MyTable'). Prefix is validated against the solution publisher.",
      "type": "string"
    },
    "displayName": {
      "description": "Display name of the table.",
      "type": "string"
    },
    "pluralName": {
      "description": "Plural display name of the table.",
      "type": "string"
    },
    "description": {
      "description": "Description of the table.",
      "type": "string"
    },
    "ownershipType": {
      "description": "Ownership type: 'UserOwned' or 'OrganizationOwned'.",
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
    "pluralName",
    "description",
    "ownershipType"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
