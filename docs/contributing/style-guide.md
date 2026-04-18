---
title: Documentation Style Guide
sidebar_position: 2
description: Documentation conventions for the PPDS ecosystem
---

# Documentation Style Guide

Ensures consistency and maintainability across all documentation in the Power Platform Developer Suite ecosystem.

## File Naming

### For Source Repos

Source repositories use SCREAMING_SNAKE_CASE:

```
GETTING_STARTED.md
API_REFERENCE.md
CLEAN_ARCHITECTURE_GUIDE.md
```

### For Documentation Site

The documentation site (ppds-docs) uses lowercase-kebab-case:

```
getting-started.md
api-reference.md
consumption-patterns.md
```

### File Name Suffixes (Source Repos)

| Suffix | Purpose | Example |
|--------|---------|---------|
| `_GUIDE.md` | How-to, workflows, step-by-step | `GETTING_STARTED_GUIDE.md` |
| `_PATTERNS.md` | Reusable design patterns | `VALUE_OBJECT_PATTERNS.md` |
| `_REFERENCE.md` | Quick lookup, API docs | `PAC_CLI_REFERENCE.md` |
| `_STRATEGY.md` | High-level approach | `BRANCHING_STRATEGY.md` |

### Standard Files

| File | Convention |
|------|------------|
| `README.md` | Industry standard |
| `CHANGELOG.md` | Industry standard |
| `CLAUDE.md` | AI context file |
| `.github/pull_request_template.md` | GitHub convention (lowercase required) |

## Writing Style

### Voice and Tense

- Use second person ("you can...")
- Present tense ("the command exports...")
- Active voice
- Keep paragraphs short (3-4 sentences max)

### Good/Bad Example Pattern

Use clear labels for code examples:

```csharp
// ✓ Correct - Nullable annotation indicates optional value
public string? OptionalProperty { get; set; }

// ✗ Wrong - Missing nullable annotation for optional property
public string OptionalProperty { get; set; }
```

## Document Structure

### Header Levels

```markdown
# Document Title           (only one per doc)
## Major Section
### Subsection             (if needed)
#### Detail                (avoid if possible)
```

### Tables for Rules

Structure rules as tables:

```markdown
## Don't Do This

| Rule | Why |
|------|-----|
| Hardcode GUIDs | Breaks across environments |
| Commit sample secrets | Rotates become painful |

## Always Do This

| Rule | Why |
|------|-----|
| Use config/queries | Environment-portable |
| Test code samples before publishing | Copy-paste users expect working code |
```

## Cross-References

### Internal Links

```markdown
See [Authentication Guide](../guides/authentication.md)
```

### Code References

Include file paths for code examples:

```markdown
See `src/domain/Environment.ts:45-67` for the implementation.
```

## Document Length

| Length | Recommendation |
|--------|---------------|
| < 400 lines | Single document, no Quick Reference needed |
| 400-800 lines | Add Quick Reference section at top |
| > 800 lines | Consider splitting into multiple documents |

## Code Block Languages

Use these language hints for syntax highlighting:

| Language | Use For |
|----------|---------|
| `bash` | Shell commands |
| `csharp` | C# code |
| `json` | JSON configuration |
| `xml` | XML/MSBuild files |
| `yaml` | YAML configuration |

## Code Examples

- Code examples should be copy-pasteable
- Test all examples before publishing
- Include necessary imports/setup
- Show expected output when helpful

```csharp
// Include the using statement
using PPDS.Migration;

// Then show the actual code
var exporter = provider.GetRequiredService<IExporter>();
await exporter.ExportAsync(schemaPath, outputPath);
```

## Documentation Lifecycle

### Permanent Documentation

- Architecture patterns
- Workflow guides
- Code quality standards
- Reference documentation

### Temporary Documentation (Delete After Use)

- Design documents → Delete after implementation complete
- Investigation reports → Delete after issue resolved
- Migration guides → Delete after migration complete

**Rationale:** Outdated documentation wastes time and creates confusion.
