---
name: write-blog
description: Authoring blog posts in ppds-docs — first-person voice, technical narrative. Use when drafting a blog post or release recap.
---

# Write Blog

Voice and structure for the blog. Different from `write-docs` — blog
posts are personal, narrative, and opinionated.

## When to Use

- Writing a new blog post under `blog/`
- Drafting a release recap or technical deep-dive
- Reviewing a blog PR

## Voice

- **First person singular** ("I discovered...", "we ran into..." for
  collaborative posts).
- **Conversational but technical** — read like a smart colleague at a
  whiteboard, not a marketing brochure.
- **Show the struggle, not just the solution.** The interesting part is
  what didn't work and why; the fix is usually one paragraph.
- **Include real numbers.** "5x faster" is fine; "much faster" is not.
  Cite the benchmark, the row count, the wall-clock seconds.

## Structure

A typical post:

1. Hook — the question or problem that prompted the work, in 2–3
   sentences.
2. What you tried first — the wrong path, why it seemed right at the
   time.
3. The pivot — the insight that changed the approach.
4. The solution — code, numbers, links to source.
5. What's next — what this enables, what is still open.

## What to Avoid

- Marketing fluff ("revolutionary", "industry-leading"). Cut on sight.
- Posts that are only the solution. The insight is what readers come for.
- Screenshots and informative images without alt text. Write alt text
  that describes what the user should perceive — the data shown, not
  "screenshot of dashboard". Decorative images (banners, dividers) should
  use an empty alt attribute (`alt=""`) per WCAG so screen readers skip
  them.

## Why This Lives in a Skill, Not CLAUDE.md

Blog voice only matters when writing blog posts. Loading it every session
would crowd out rules that always apply.
