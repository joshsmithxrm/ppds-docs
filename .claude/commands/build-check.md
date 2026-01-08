---
description: Run full build and type check to validate site
---

Perform complete validation of the documentation site.

Steps:
1. Run `npm run typecheck`
   - Report any TypeScript errors with file locations
   - If errors, stop and report
2. Run `npm run build`
   - Capture all warnings and errors
   - Report broken links detected by Docusaurus
   - Report missing images
3. Summarize results:
   - Build status (pass/fail)
   - Total warnings
   - Total errors
   - Any broken internal links
   - Any missing assets
4. If build succeeds, report build output size

This validates the site is deployable before pushing.
