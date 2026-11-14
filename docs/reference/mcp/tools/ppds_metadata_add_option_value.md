<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_metadata_add_option_value

Adds a new option value to an existing option set (global or local choice). Returns the assigned integer value.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_metadata_add_option_value",
  "description": "Adds a new option value to an existing option set (global or local choice). Returns the assigned integer value.",
  "type": "object",
  "properties": {
    "solution": {
      "description": "Unique name of the solution containing the option set.",
      "type": "string"
    },
    "optionSetName": {
      "description": "Name of the option set to add the value to.",
      "type": "string"
    },
    "label": {
      "description": "Label for the new option.",
      "type": "string"
    },
    "value": {
      "description": "Numeric value for the new option. Auto-assigned if omitted (optional).",
      "type": [
        "string",
        "integer",
        "null"
      ],
      "default": 0
    },
    "description": {
      "description": "Description for the new option (optional).",
      "type": "string",
      "default": null
    },
    "color": {
      "description": "Color associated with the option as hex string, e.g., '#FF0000' (optional).",
      "type": "string",
      "default": null
    }
  },
  "required": [
    "solution",
    "optionSetName",
    "label"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
