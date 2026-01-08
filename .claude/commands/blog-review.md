---
description: Review a blog draft for voice, tone, and completeness
---

# Blog Review

Review the specified blog post draft for voice, tone, and completeness.

## Review Checklist

### Voice & Tone
- [ ] First person singular ("I" not "We")
- [ ] Conversational but technical
- [ ] Shows the struggle, not just the solution
- [ ] Includes real numbers where relevant
- [ ] Links to docs for technical details

### Structure
- [ ] Strong opening hook (first paragraph)
- [ ] `<!-- truncate -->` placed after hook
- [ ] Logical flow between sections
- [ ] Clear takeaways or next steps

### Completeness
- [ ] No incomplete thoughts
- [ ] Technical claims are supported
- [ ] Code examples are tested
- [ ] Links are valid

### Frontmatter
- [ ] Appropriate slug
- [ ] Clear, descriptive title
- [ ] Correct author
- [ ] Relevant tags

## Process

1. Read the blog post file specified by the user
2. Evaluate against each checklist item
3. Provide specific feedback:
   - What works well
   - What needs improvement (with suggestions)
   - Any gaps or incomplete thoughts
4. Offer to help fix issues identified

## Output Format

```
## Review: [Post Title]

### What Works Well
- [Specific positive feedback]

### Suggested Improvements
- [Issue]: [Specific suggestion]

### Questions/Gaps
- [Any unclear points or missing context]

### Checklist Status
[Summarize which items pass/need attention]
```

## Usage

User should specify which blog post to review:
- `/blog-review blog/2024-01-15-my-post.md`
- Or ask to review "the latest blog draft"
