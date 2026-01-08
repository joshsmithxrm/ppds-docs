---
description: Validate all internal documentation links
---

Check all internal links in the documentation are valid.

Steps:
1. Find all .md and .mdx files in docs/
2. Extract all internal links:
   - Markdown links: `[text](/docs/path)`
   - Reference links: `[text]: /docs/path`
3. For each link:
   - Parse the target path
   - Check if the corresponding file exists
   - Track line number where link appears
4. Report results:
   - Total links checked
   - Valid links count
   - Broken links with:
     - Source file and line number
     - Target path that's missing
     - Suggested fix if obvious (typo, moved file)
5. Exit with error if broken links found

Common issues to detect:
- Missing .md extension in paths
- Incorrect case (case-sensitive filesystems)
- Renamed or deleted pages
- Wrong folder structure
