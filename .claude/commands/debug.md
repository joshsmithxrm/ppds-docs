# Debug

Give Claude an interactive feedback loop for docs development using Playwright MCP.

## Usage

`/debug` - Verify dev server, pages render, styles look correct
`/debug <issue>` - Diagnose a specific issue

## Process

### 1. Check dev server status

```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000
```

If not running, start it:
```bash
npm start
```

### 2. Navigate with Playwright MCP

Use Playwright MCP to open the site:
1. Call `playwright_navigate` with URL `http://localhost:3000`
2. Wait for page to load

### 3. Capture diagnostic data

1. **Screenshot**: Capture current visual state
2. **Console logs**: Check for JavaScript errors
3. **Build check**: Run `npm run build` to catch broken links

### 4. Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Blank page | Build error | Check `npm run build` output |
| Broken links | Missing page | Run `/check-links` |
| Style issues | CSS/Tailwind problem | Check browser console |
| Missing images | Wrong path | Verify image paths in `/static/` |

### 5. Fix and verify

1. Make code changes
2. Refresh page via Playwright
3. Take screenshot to verify
4. Run `npm run build` to ensure no broken links

## Notes

- Dev server runs on http://localhost:3000
- Docusaurus hot-reloads on file changes
- Use `npm run build` for full validation before shipping
