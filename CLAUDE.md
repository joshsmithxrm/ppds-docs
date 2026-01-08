# CLAUDE.md - ppds-docs

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
- Use consistent terminology (see Glossary below)

## Project Overview

- **Stack**: Docusaurus 3, TypeScript, React 18, MDX
- **Build**: `npm run build`
- **Dev Server**: `npm start`
- **Type Check**: `npm run typecheck`
- **Deploy**: Automatic via GitHub Actions on push to main

## Structure

```
docs/
├── getting-started/     # First 5 minutes experience
├── guides/              # Task-oriented (How to...)
├── reference/           # API/CLI reference
│   ├── cli/
│   └── sdk/
├── concepts/            # Explain the why (architecture)
├── contributing/        # For contributors
└── _templates/          # Doc templates
```

## Doc Types (Diátaxis Framework)

| Type | Purpose | Pattern |
|------|---------|---------|
| Tutorial | Learning-oriented, step-by-step | "Your First Plugin" |
| Guide | Task-oriented, goal-focused | "How to Migrate Data" |
| Reference | Information-oriented, complete | "CLI Command Reference" |
| Concept | Understanding-oriented, explains why | "Connection Pooling" |

## Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Local dev server at localhost:3000 |
| `npm run build` | Production build to ./build |
| `npm run typecheck` | TypeScript validation |
| `npm run serve` | Serve production build locally |

## Slash Commands

| Command | Purpose |
|---------|---------|
| `/dev` | Start the development server |
| `/serve` | Build and serve production locally |
| `/build-check` | Run typecheck + build validation |
| `/check-links` | Validate all internal links |
| `/new-doc` | Create a new doc page |
| `/new-guide` | Create a how-to guide |
| `/new-reference` | Create reference documentation |
| `/design-session` | Start meta-planning for complex initiatives |

## GitHub CLI (`gh`)

Use `gh` for all GitHub operations:

```bash
# Issues
gh issue create --title "Title" --body "Description" --label "blog"
gh issue list --label "blog"
gh issue view 123

# Pull Requests
gh pr create --title "Title" --body "Description"
gh pr list
gh pr view 123
gh pr merge 123

# Workflow
gh run list
gh run view 123
```

**Backlog Management:**
- Blog posts: `gh issue create --label "blog"`
- Doc improvements: `gh issue create --label "docs"`
- Use issues to track work items, not markdown files

## Blog Voice

When writing blog posts:

- **First person singular** ("I discovered..." not "We discovered...")
- **Conversational but technical** - approachable without dumbing down
- **Show the struggle** - include what didn't work, not just the solution
- **Include real numbers** - time saved, records migrated, errors fixed
- **Link to docs for "how"** - blog is for "why" and "journey"

**Blog categories:**
- `announcements` - Releases, updates
- `workflow` - AI-assisted development
- `deep-dive` - Technical explanations
- `guides` - Narrative tutorials
- `tips` - Quick wins

## Style Guide

- Use second person ("you can...")
- Present tense ("the command exports...")
- Active voice
- Code examples should be copy-pasteable
- Keep paragraphs short (3-4 sentences max)

## Code Block Languages

Use these language hints for syntax highlighting:

- `bash` - Shell commands
- `powershell` - PowerShell commands
- `csharp` - C# code
- `json` - JSON configuration
- `xml` - XML/MSBuild files

## Key Files

| File | Purpose |
|------|---------|
| `docusaurus.config.ts` | Site configuration |
| `sidebars.ts` | Navigation structure |
| `src/css/custom.css` | Theme customization |
| `docs/_templates/` | Templates for new docs |

## Related Repositories

- **Main repo**: https://github.com/joshsmithxrm/power-platform-developer-suite
- **Docs repo**: https://github.com/joshsmithxrm/ppds-docs

## Glossary

| Term | Definition |
|------|------------|
| PPDS | Power Platform Developer Suite |
| CLI | Command-line interface (`ppds` command) |
| SDK | .NET software development kit |
| Environment | A Power Platform environment (org) |
| Solution | A Power Platform solution package |
