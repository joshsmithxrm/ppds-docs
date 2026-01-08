---
description: Create a new how-to guide using the guide template
---

Create a new task-oriented guide in docs/guides/.

Arguments: $ARGUMENTS (format: "filename Title of Guide")

Example: `/new-guide plugin-debugging How to Debug Plugins`

Steps:
1. Parse filename and title from arguments
2. Read the guide template from docs/_templates/guide-template.md
3. Create new file at docs/guides/{filename}.md
4. Replace template placeholders:
   - [Action] → title
   - sidebar_position → next available position
   - description → derived from title
5. Update sidebars.ts to include the new guide in the Guides category
6. Report the file path

Guide structure (from template):
- Title (How to...)
- Introduction paragraph
- Prerequisites checklist
- Numbered steps with code examples
- Verification section
- Troubleshooting section
- Next steps links

Remember: Write for the user's goal, not the feature.
