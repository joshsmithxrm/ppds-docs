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
   - Filter to bot/AI accounts: `gemini-code-assist[bot]`, `Copilot`, `github-actions[bot]`, `dependabot[bot]`
   - IMPORTANT: Some bots (like Copilot) don't have `[bot]` suffix - check for known bot names explicitly

3. **Display comments**
   - Group by file/line
   - Show the bot name and comment body
   - Number each comment for reference

4. **For each comment:**
   - Read the relevant file/code to understand context
   - Provide your **recommendation** (Address, Skip, or Dismiss)
   - Provide your **rationale** explaining why
   - Offer options:
     - **Address it** - Make the suggested change
     - **Skip** - Move to next comment
     - **Dismiss** - Mark as won't fix (explain why)

5. **After user confirms action, resolve the comment on GitHub:**
   ```bash
   # Get the GraphQL node_id for the comment
   gh api repos/{owner}/{repo}/pulls/{pr}/comments/{comment_id} --jq '.node_id'

   # Resolve the comment thread
   gh api graphql -f query='mutation { resolveReviewThread(input: {threadId: "NODE_ID"}) { thread { isResolved } } }'
   ```
   - This signals to the user that the comment was reviewed
   - Unresolved comments indicate missed items

6. **After all comments processed:**
   - Summarize what was changed vs skipped
   - Ask if user wants to commit and push

## Notes

- Bot comments often have valid suggestions but sometimes miss context
- Use judgment on whether suggestions improve the code
- If a suggestion doesn't apply, explain why when dismissing
