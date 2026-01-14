# PPDS Docs

Documentation site for Power Platform Developer Suite.

## NEVER

- Write marketing fluff - be technical and direct
- Document features before they're implemented
- Duplicate content that exists in code (link instead)
- Use screenshots without alt text

## ALWAYS

- Write for the user's goal, not the feature
- Include working code examples (test them!)
- Link to source code for implementation details
- Use consistent terminology (see `.claude/rules/branding.md`)

## Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript validation |

## Doc Types (Diátaxis)

| Type | Purpose |
|------|---------|
| Tutorial | Learning-oriented, step-by-step |
| Guide | Task-oriented, goal-focused |
| Reference | Information-oriented, complete |
| Concept | Understanding-oriented, explains why |

## Structure

- `docs/getting-started/` - First 5 minutes
- `docs/guides/` - How to... (task-oriented)
- `docs/reference/` - CLI/SDK reference
- `docs/concepts/` - Architecture explanations

## Key Files

- `docusaurus.config.ts` - Site configuration
- `sidebars.ts` - Navigation structure
- `.claude/rules/branding.md` - Colors, voice, terminology

## Style

- Second person ("you can...")
- Present tense, active voice
- Code examples should be copy-pasteable
- Short paragraphs (3-4 sentences max)

## Blog Voice

- First person singular ("I discovered...")
- Conversational but technical
- Show the struggle, not just the solution
- Include real numbers
