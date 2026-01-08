---
description: PPDS documentation branding guidelines
globs: ["docs/**/*.md", "blog/**/*.md"]
---

# PPDS Branding

## Product Name

**Full name:** Power Platform Developer Suite
**Abbreviation:** PPDS

Use the full name on first reference in a document, then PPDS thereafter.

## Components

| Component | Name | Description |
|-----------|------|-------------|
| CLI | PPDS CLI | Interactive TUI and command-line tool |
| Extension | PPDS Extension | VS Code extension |
| Libraries | PPDS.* | NuGet packages (Plugins, Migration, Dataverse, Auth) |
| PowerShell | PPDS.Tools | PowerShell module |
| ALM | PPDS ALM | GitHub Actions and Azure DevOps templates |
| MCP | PPDS.Mcp | MCP server for AI assistant integration (Claude Code) |

## NuGet Packages

- `PPDS.Cli` - CLI tool with TUI (.NET tool)
- `PPDS.Mcp` - MCP server for AI assistants (.NET tool)
- `PPDS.Plugins` - Declarative plugin registration attributes
- `PPDS.Migration` - Data migration engine
- `PPDS.Dataverse` - Connection pooling and bulk operations
- `PPDS.Auth` - Authentication profiles

## Repositories

| Repo | GitHub Name | Display Name |
|------|-------------|--------------|
| Main | power-platform-developer-suite | PPDS |
| Docs | ppds-docs | PPDS Docs |
| ALM | ppds-alm | PPDS ALM |
| Tools | ppds-tools | PPDS.Tools |
| Demo | ppds-demo | PPDS Demo |

## Links

- Docs site: https://joshsmithxrm.github.io/ppds-docs/
- Main repo: https://github.com/joshsmithxrm/power-platform-developer-suite
- NuGet: https://www.nuget.org/packages?q=ppds
- PSGallery: https://www.powershellgallery.com/packages/PPDS.Tools

## Visual Identity

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #0078d4 | Microsoft Blue - links, primary actions |
| Secondary | #25c2a0 | PPDS Green - accents, highlights |
| Background (dark) | #1e1e1e | Dark theme background |
| Background (light) | #ffffff | Light theme background |

### Typography

- Headings: System fonts (Segoe UI on Windows, SF Pro on Mac)
- Code: Cascadia Code, Consolas, monospace

### Usage Notes

- **Marketing surfaces** (docs site, logos): Use brand colors
- **Application UIs** (TUI, Extension): Respect system/user themes

## Positioning

**Tagline:** Pro-grade tooling for Power Platform developers

**Value Props:**

1. **Unified tooling** - CLI, TUI, VS Code Extension, and MCP in one suite
2. **Performance** - 10x throughput over standard SDK patterns
3. **AI-native** - MCP integration for Claude Code and other AI assistants
4. **Complements Microsoft's tools** - Works alongside PAC CLI, not against it

**Target Audience:**

- Professional Power Platform developers
- DevOps engineers managing Dataverse deployments
- ISVs building Power Platform solutions

## Voice

- Technical and direct
- No marketing fluff
- User goal-oriented
- Include working code examples
