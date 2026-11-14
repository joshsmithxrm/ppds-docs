<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_create_relationship

Creates a relationship (one-to-many or many-to-many) between two Dataverse tables. For one-to-many, a lookup column is created on the referencing entity. Supports dry-run mode.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_create_relationship",
  "description": "Creates a relationship (one-to-many or many-to-many) between two Dataverse tables. For one-to-many, a lookup column is created on the referencing entity. Supports dry-run mode.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution to add the relationship to.",
      "type": "string"
    },
    "referencedEntity": {
      "description": "Logical name of the referenced (parent / 'one' side) entity.",
      "type": "string"
    },
    "referencingEntity": {
      "description": "Logical name of the referencing (child / 'many' side) entity.",
      "type": "string"
    },
    "schemaName": {
      "description": "Schema name for the relationship.",
      "type": "string"
    },
    "relationshipType": {
      "description": "Relationship type: 'oneToMany' or 'manyToMany'.",
      "type": "string"
    },
    "lookupSchemaName": {
      "description": "Schema name of the lookup column on the referencing entity (required for oneToMany, ignored for manyToMany).",
      "type": "string",
      "default": null
    },
    "lookupDisplayName": {
      "description": "Display name of the lookup column (required for oneToMany, ignored for manyToMany).",
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
    "referencedEntity",
    "referencingEntity",
    "schemaName",
    "relationshipType"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
