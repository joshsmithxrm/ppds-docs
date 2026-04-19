# PPDS Docs

Documentation site for Power Platform Developer Suite (Docusaurus).

Governance for THIS file: **<https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/docs/CLAUDE-MD-GOVERNANCE.md>**.

## NEVER

- Document a feature that is not yet implemented in PPDS.
- Duplicate content that already exists in code or specs — link instead.

## ALWAYS

- Test every code example before merge — broken examples are the #1 source of bug reports.
- Link to source code for implementation details rather than re-explaining logic.
- Use canonical terminology — see `.claude/rules/branding.md` for the name list.

## Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript validation |

## Authoring

For Diátaxis classification, voice, and style: see the `write-docs` skill.
For blog posts: see the `write-blog` skill.
