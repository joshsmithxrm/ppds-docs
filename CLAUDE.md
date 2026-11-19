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
| `npm run build` | Production build; fails on broken links (CI runs this) |
| `npm run typecheck` | TypeScript validation (CI runs this) |
| `npm run serve` | Serve the built site locally |

## Authoring

- Adding pages, templates, generated reference pages: `docs/contributing/index.md`.
- Style: `docs/contributing/style-guide.md`.
- Blog posts: the `write-blog` command.
- Screenshot captures for design audits: the `docs-verify` and `docs-audit-capture` skills.
