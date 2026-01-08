---
description: Generate/update documentation from source repositories
---

# Documentation Generation

Scan source repositories and update documentation in ppds-docs.

## Source Repositories

| Repo | Path | Content |
|------|------|---------|
| ppds | ../ppds | CLI reference, SDK API |
| ppds-alm | ../ppds-alm | ALM workflows, actions |
| ppds-demo | ../ppds-demo | Guides, patterns |
| ppds-tools | ../ppds-tools | PowerShell cmdlets |

## Process

1. **Scan** - Check each source repo for doc changes
2. **Compare** - Identify docs that need updating in ppds-docs
3. **Report** - Show what needs updating
4. **Update** - With user approval, update the docs
5. **Verify** - Run build to ensure no broken links

## What to Look For

### ppds (SDK)
- `docs/` - Architecture docs, ADRs
- `src/*/README.md` - Package documentation
- CLI command help text changes

### ppds-alm
- `docs/` - Workflow and action documentation
- Action input/output changes
- New workflows or actions

### ppds-demo
- `docs/guides/` - New or updated guides
- `docs/reference/` - Reference material
- Pattern documentation

### ppds-tools
- `docs/` - Cmdlet documentation
- Module help changes

## Output

Report format:
```
## Documentation Sync Report

### Changes Detected
| Source | File | Status |
|--------|------|--------|
| ppds-alm | AUTHENTICATION.md | Updated |
| ppds-demo | TESTING_PATTERNS.md | New |

### Recommended Actions
1. Update alm/authentication.md with new content
2. Create guides/testing-patterns.md

### Run Verification
npm run build
```

## Notes

- Don't blindly copy - adapt content for Docusaurus format
- Add frontmatter to new docs
- Update sidebar if adding new pages
- Run build after updates to verify
