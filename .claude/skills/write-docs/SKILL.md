---
name: write-docs
description: Authoring docs in ppds-docs — Diátaxis classification, voice, style. Use when writing or restructuring tutorials, guides, reference, or concept docs.
---

# Write Docs

Conventions for the documentation site. Triggers when authoring or
reorganizing prose under `docs/`.

## When to Use

- Writing a new doc page
- Refactoring an existing page that does not fit cleanly in one Diátaxis bucket
- Reviewing a PR that touches `docs/`

## Diátaxis Classification

Every doc fits exactly one of these buckets. If you cannot pick one, the
doc needs to be split.

| Type | Purpose | Voice |
|------|---------|-------|
| Tutorial | Learning-oriented, step-by-step | Hand-hold the reader through a complete experience |
| Guide | Task-oriented, goal-focused | Show the most direct path to the user's goal |
| Reference | Information-oriented, complete | Be exhaustive and predictable; no opinions |
| Concept | Understanding-oriented, explains why | Explain the model and tradeoffs; no procedure |

Mixing types in one page is the most common drift. A tutorial that becomes
a reference table is two pages.

## Style Rules

- **Second person** ("you can...") for tutorials and guides.
- **Third person** for reference and concept docs.
- **Present tense, active voice.**
- **Short paragraphs** — 3–4 sentences max. Long paragraphs scan poorly.
- **Code blocks must be correct and ready for use.** Assume the reader
  will copy them verbatim — no `todo`, no `fix in prod`, no untested
  placeholders. If a value must be substituted, surface it with an
  explicit callout immediately above the block.

## Doc Lifecycle

1. **Draft** under `docs/<bucket>/<slug>.md` with the right Diátaxis bucket.
2. **Add to sidebar** in `sidebars.ts` if surfacing to users.
3. **Run the docs site locally** (`npm start`) and proof at
   `localhost:3000`.
4. **Submit PR** — the docs CI runs link-checking and broken-image checks.

## Why This Lives in a Skill, Not CLAUDE.md

Doc-authoring conventions only matter when writing prose. Loading them
into every Claude session in the docs repo would crowd out genuinely
global rules. The skill auto-loads when it is needed; otherwise it sits
idle.
