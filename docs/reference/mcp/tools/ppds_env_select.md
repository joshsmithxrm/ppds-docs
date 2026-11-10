<!-- Generated from actual final-C tools/list; do not hand-edit. -->

# ppds_env_select

Select a Dataverse environment for subsequent queries. You can specify the environment by URL (e.g., &#x27;https://contoso.crm.dynamics.com&#x27;), display name (e.g., &#x27;Contoso Production&#x27;), or unique name. All subsequent ppds tools will use this environment.

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Candidate server `1.2.3-alpha.0.35`.

## Input schema

```json
{
  "title": "ppds_env_select",
  "description": "Select a Dataverse environment for subsequent queries. You can specify the environment by URL (e.g., 'https://contoso.crm.dynamics.com'), display name (e.g., 'Contoso Production'), or unique name. All subsequent ppds tools will use this environment.",
  "type": "object",
  "properties": {
    "environment": {
      "description": "Environment URL, display name, or unique name",
      "type": "string"
    }
  },
  "required": [
    "environment"
  ]
}
```

The tools/list response does not declare an output schema. This capture does not infer one.
