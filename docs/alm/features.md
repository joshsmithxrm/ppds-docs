---
title: Features Guide
sidebar_position: 3
description: Deep dive into PPDS ALM advanced features
---

# Features Guide

Deep dive into PPDS ALM's advanced features.

## Smart Import

The `import-solution` action includes intelligent features that prevent unnecessary deployments and handle transient failures gracefully.

### Version Comparison

Before importing, the action:

1. **Extracts version** from the solution zip file (parses `Other/Solution.xml`)
2. **Queries target environment** for the existing solution version
3. **Compares versions** using semantic version comparison
4. **Skips import** if target version is same or newer

**Why This Matters:**
- Prevents redundant deployments
- Saves time when multiple pipelines target the same environment
- Handles concurrent deployment scenarios gracefully

**To Disable:**

```yaml
- uses: joshsmithxrm/ppds-alm/.github/actions/import-solution@v1
  with:
    solution-path: ./MySolution_managed.zip
    skip-if-same-version: 'false'  # Force import regardless of version
```

### Retry Logic

The import action intelligently retries only **transient** failures.

**Transient Errors (Retried):**
- "Cannot start another solution at the same time"
- Concurrent import conflicts
- "Try again later" messages

**Deterministic Errors (Fail Immediately):**
- File not found
- Missing dependencies
- Access denied
- Invalid solution structure

**Retry Behavior:**
1. First attempt fails with transient error
2. Wait `retry-delay-seconds` (default: 300 = 5 minutes)
3. **Re-check version** before retry (another process may have succeeded)
4. Retry up to `max-retries` times
5. If version check shows success, skip retry and report success

**Configuration:**

```yaml
- uses: joshsmithxrm/ppds-alm/.github/actions/import-solution@v1
  with:
    solution-path: ./MySolution_managed.zip
    max-retries: '3'
    retry-delay-seconds: '300'  # 5 minutes between retries
```

### Deployment Settings

The import action supports Power Platform deployment settings files for environment-specific configuration.

**What Deployment Settings Configure:**
- Connection references
- Environment variables
- Component ownership

**Usage:**

```yaml
- uses: joshsmithxrm/ppds-alm/.github/actions/import-solution@v1
  with:
    solution-path: ./MySolution_managed.zip
    settings-file: ./config/qa.deploymentsettings.json
```

**Auto-Detection:**
When using `solution-deploy.yml`, settings files are auto-detected:
1. `./config/{SolutionName}.{EnvironmentName}.deploymentsettings.json`
2. `./config/{SolutionName}.deploymentsettings.json`
3. `{solution-folder}/../config/{SolutionName}.deploymentsettings.json`

## Noise Filtering

Power Platform solution exports often contain changes that aren't real customizations - volatile values that change on every export.

### The Problem

Without noise filtering, your git history becomes polluted with meaningless commits:
- "Sync solution" - only version timestamp changed
- "Export update" - only session IDs regenerated
- "Nightly sync" - only whitespace differences

This makes it hard to:
- Review actual changes in PRs
- Track when real customizations were made
- Identify the cause of issues

### The Solution

The `analyze-changes` action examines each file change and categorizes it as "noise" or "real".

**Noise Patterns Detected:**

| Pattern | Example | Why It's Noise |
|---------|---------|----------------|
| Version-only changes | `<Version>1.0.0.1</Version>` | Auto-incremented on every export |
| Canvas App URIs | `DocumentUri: "...?suffix=abc123"` | Random suffix changes each export |
| Workflow session IDs | `workflowName: "session_xxx"` | Regenerated every export |
| Whitespace changes | Trailing spaces, line endings | No functional impact |
| R100 renames | File renamed, 100% identical content | Git metadata noise |
| Dependency versions | `<MissingDependency>` references | System version updates |

### Usage

```yaml
# Stage all changes first
- run: git add -A

# Analyze for noise
- id: analyze
  uses: joshsmithxrm/ppds-alm/.github/actions/analyze-changes@v1
  with:
    solution-folder: solutions/MySolution/src
    debug: 'false'

# Only commit if real changes exist
- if: steps.analyze.outputs.has-real-changes == 'true'
  run: |
    git commit -m "chore: sync solution from Dev"
    git push

- if: steps.analyze.outputs.has-real-changes == 'false'
  run: |
    echo "No real changes detected - skipping commit"
    git reset HEAD
```

## Solution Checker Integration

PowerApps Solution Checker validates solution quality by analyzing for:
- Unsupported customizations
- Performance issues
- Security vulnerabilities
- Deprecated APIs
- Best practice violations

### Severity Levels

| Level | Description | Typical Action |
|-------|-------------|----------------|
| Critical | Blocking issues | Must fix before deployment |
| High | Serious problems | Should fix promptly |
| Medium | Moderate issues | Review and plan fixes |
| Low | Minor concerns | Fix when convenient |
| Informational | Best practices | Consider implementing |

### Configuration Options

**Fail on Different Thresholds:**

```yaml
# Strict: Fail on any High or Critical issue
- uses: joshsmithxrm/ppds-alm/.github/actions/check-solution@v1
  with:
    solution-path: ./MySolution_managed.zip
    fail-on-level: High

# Lenient: Only fail on Critical issues
- uses: joshsmithxrm/ppds-alm/.github/actions/check-solution@v1
  with:
    solution-path: ./MySolution_managed.zip
    fail-on-level: Critical
```

**Geography Selection:**

```yaml
- uses: joshsmithxrm/ppds-alm/.github/actions/check-solution@v1
  with:
    solution-path: ./MySolution_managed.zip
    geography: europe  # or unitedstates, asia, australia, etc.
```

## Build Pipeline

The build actions support full .NET solution compilation with automatic plugin integration.

### Plugin Types Supported

**Classic Plugin Assemblies:**
- Single DLL containing all plugins
- Target: `PluginAssemblies/{AssemblyName}-{GUID}/`

**Plugin Packages (NuGet-based):**
- Modern plugin deployment format
- Target: `pluginpackages/{PackageId}/package/`

### Automatic Output Location

The build action finds outputs automatically based on folder conventions:

```
src/
├── Plugins/                    # Classic plugin projects
│   └── MyProject.Plugins/
│       └── bin/Release/net462/
│           └── MyProject.Plugins.dll  ← Found automatically
├── PluginPackages/             # Plugin package projects
│   └── MyProject.PluginPackage/
│       └── bin/Release/
│           └── MyPackage.1.0.0.nupkg  ← Found automatically
└── Shared/                     # Shared projects
    └── MyProject.Entities/
        └── bin/Release/
            └── MyProject.Entities.dll  ← Found automatically
```

## Best Practices

### Use Reusable Workflows for Standard Scenarios

```yaml
# Simple: use pre-built workflow
jobs:
  deploy:
    uses: joshsmithxrm/ppds-alm/.github/workflows/solution-deploy.yml@v1
```

### Use Composite Actions for Custom Scenarios

```yaml
# Complex: compose your own workflow
jobs:
  custom:
    steps:
      - uses: joshsmithxrm/ppds-alm/.github/actions/setup-pac-cli@v1
      - uses: joshsmithxrm/ppds-alm/.github/actions/pac-auth@v1
      # ... custom steps ...
```

### Pin Versions in Production

```yaml
# Development: use major version
uses: joshsmithxrm/ppds-alm/.github/workflows/solution-deploy.yml@v1

# Production: pin specific version
uses: joshsmithxrm/ppds-alm/.github/workflows/solution-deploy.yml@v1.0.0
```
