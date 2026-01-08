---
description: Review and address bot comments on a PR
---

Review automated bot comments on a pull request and help address them.

## Arguments

- `$ARGUMENTS` - PR number (optional, defaults to current branch's PR)

## Steps

1. **Find the PR**
   - If PR number provided, use it
   - Otherwise, find PR for current branch: `gh pr view --json number`

2. **Fetch bot comments**
   ```bash
   gh api repos/{owner}/{repo}/pulls/{pr}/comments
   ```
   - Filter to bot accounts (login ends with `[bot]`)
   - Include: gemini-code-assist, github-actions, dependabot, etc.

3. **Display comments**
   - Group by file/line
   - Show the bot name and comment body
   - Number each comment for reference

4. **For each comment, offer options:**
   - **Address it** - Make the suggested change
   - **Skip** - Move to next comment
   - **Dismiss** - Mark as won't fix (explain why)

5. **After addressing comments:**
   - Summarize what was changed
   - Ask if user wants to commit and push

## Notes

- Bot comments often have valid suggestions but sometimes miss context
- Use judgment on whether suggestions improve the code
- If a suggestion doesn't apply, explain why when dismissing
