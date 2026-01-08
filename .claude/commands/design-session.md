---
description: Start a meta-planning session for complex initiatives
---

This command initiates a design session for planning complex, multi-phase work.

## What This Command Does

1. Enter plan mode (shift+tab twice or start with planning prompt)
2. Explore relevant codebases to understand current state
3. Ask clarifying questions about goals and constraints
4. Iterate on approach with user
5. Produce a comprehensive planning prompt for implementation session
6. Create GitHub issues for trackable work items

## When to Use

- Starting a new major feature or initiative
- Planning cross-repo changes
- Designing automation systems
- Creating backlogs for large efforts
- Any work that benefits from structured discussion before implementation

## Outputs

1. **Decisions document** - What was agreed (written to plan file)
2. **Planning prompt** - Detailed prompt for implementation session
3. **Work items** - GitHub issues via `gh issue create`

## Process

### Phase 1: Explore
Scan relevant folders and documentation to understand current state.

```
Launch Explore agents to understand:
- Current implementation
- Existing patterns
- Related documentation
- Potential impacts
```

### Phase 2: Discuss
Present options and gather user input.

```
For each decision point:
1. Present 2-3 options with tradeoffs
2. Give a recommendation with reasoning
3. Ask user for preference
4. Document the decision
```

### Phase 3: Align
Confirm all decisions before proceeding.

```
Summarize:
- Decisions made
- Open questions
- Scope boundaries
- Success criteria
```

### Phase 4: Document
Write the planning prompt to the plan file.

```
Include:
- Context and background
- Specific tasks with acceptance criteria
- File paths and dependencies
- Verification steps
- Constraints and guidelines
```

### Phase 5: Create Issues
Create GitHub issues for trackable work items.

```bash
gh issue create --title "Phase 1: [Description]" --body "..." --label "enhancement"
gh issue create --title "Phase 2: [Description]" --body "..." --label "enhancement"
```

## Example Session

**User:** "I want to add a new authentication provider"

**Claude:**
1. Explores current auth implementation in `src/auth/`
2. Asks: "Which provider? OAuth, SAML, or API keys?"
3. Presents architecture options with tradeoffs
4. Documents decisions in plan file
5. Creates planning prompt with phases:
   - Phase 1: Add provider configuration
   - Phase 2: Implement auth flow
   - Phase 3: Update documentation
   - Phase 4: Add tests
6. Creates GitHub issues for each phase

## Tips

- **Start broad, narrow down** - Understand the full scope before diving into details
- **Document as you go** - Write decisions to the plan file incrementally
- **Use questions liberally** - Better to clarify than assume
- **Include verification** - Every phase should have a way to confirm success
- **Keep prompts actionable** - The output prompt should be immediately usable
