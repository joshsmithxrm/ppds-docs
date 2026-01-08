---
description: Create a new reference doc using the reference template
---

Create a new reference documentation page.

Arguments: $ARGUMENTS (format: "type/filename Command or API Name")

Example: `/new-reference cli/solution-export ppds solution export`

Steps:
1. Parse path (cli/ or sdk/) and name from arguments
2. Read reference template from docs/_templates/reference-template.md
3. Create new file at docs/reference/{type}/{filename}.md
4. Replace template placeholders:
   - [Command/API Name] → name
   - sidebar_position → next available
   - description → brief one-liner
5. For CLI commands:
   - Add syntax block with command structure
   - Include common options table
   - Add examples section
6. For SDK APIs:
   - Add method signature
   - Include parameters table
   - Add return type documentation
7. Update sidebars.ts to include the new reference
8. Report the file path

Reference docs are information-oriented: complete, accurate, and scannable.
