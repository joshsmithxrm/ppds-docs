---
description: Create a new documentation page with proper frontmatter
---

Create a new documentation page at the specified path with appropriate frontmatter and structure.

Arguments: $ARGUMENTS (format: "path/to/doc Title of Document")

Example: `/new-doc guides/webhooks Working with Webhooks`

Steps:
1. Parse path and title from arguments
2. Determine appropriate sidebar_position by checking existing docs in that folder
3. Create the MDX file with frontmatter (sidebar_position, title, description)
4. Add initial structure based on doc location:
   - guides/ → Use guide template (Prerequisites, Steps, Next Steps)
   - reference/ → Use reference template (Syntax, Options, Examples)
   - concepts/ → Overview, explanation, diagrams placeholder
5. Update sidebars.ts if needed
6. Report created file path

Do NOT include marketing language. Be technical and direct.
