---
title: October 2026 maintenance candidate
description: Proposed PPDS patch versions and changes awaiting release validation
---

# October 2026 maintenance candidate

The Power Platform Developer Suite (PPDS) maintenance release is **in
preparation**. These versions are proposed, not published. Public installation
commands continue to select the [published versions](../../getting-started/installation.md).

| Product | Published version | Candidate target |
|---------|-------------------|------------------|
| PPDS.Auth | 1.1.1 | 1.1.2 |
| PPDS.Dataverse | 1.3.1 | 1.3.2 |
| PPDS.Migration | 1.2.1 | 1.2.2 |
| PPDS.Query | 1.0.1 | 1.0.2 |
| PPDS.Plugins | 3.0.0 | 3.0.1 |
| PPDS.Cli | 1.4.1 | 1.4.2 |
| PPDS.Mcp | 1.2.1 | 1.2.2 |
| PPDS Extension | 1.6.1 | 1.6.2 |
| PPDS Skills | 0.1.1 | 0.1.2 |
| PPDS.Tools | 1.1.0 stable; 1.2.0-alpha2 prerelease | 1.2.0-alpha3 prerelease |
| PPDS ALM | 1.0.0 (`v1` / `v1.0.0`) | 1.0.1 |

Published versions were verified on October 29, 2026, with Tools and ALM
checked on October 30. Each product retains its
own version line; all candidate tags must identify the reviewed release commit.
Skills, Tools, and ALM each have their own reviewed repository commit. The Extension row refers to
the maintained extension in the main PPDS repository; the retired standalone
extension repository and Demo are outside this release.

The reference pages in this branch were generated from commit
`6fec5a6909900b5356defdef3eea893fdaece685`, using CLI 1.4.2 / MCP 1.2.2
assemblies from a disposable local release simulation. Those version strings
do not establish public availability. The
[generation provenance](https://github.com/joshsmithxrm/ppds-docs/blob/codex/maintenance-docs-20261029/validation/candidate-provenance.json)
records source/generator commits, binary hashes, and the existing API-index
route mapping. Re-capture from public artifacts remains a release follow-up.

## Metadata editing

[View and app correctness fixes](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1449)
already merged after the previous release are included: visible view columns
and FetchXML projections stay aligned, related columns retain qualified
identities, writes verify intended draft XML, app selections validate before
mutation, and sitemap editing preserves localized labels.

The [Timeline correction](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1468)
accepts `UClientActivitiesConfigurationJSON` without relaxing known parameter
types or form structure. It does not promise arbitrary unknown control support.
See the [metadata editing guide](../../guides/metadata-editing.md).

## Plugin packages and extraction

[Package identity validation](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1414)
checks the primary assembly, runtime plugin types, official attribute
identities, and extraction evidence before upload. This includes concrete
`IPlugin` types without PPDS registration attributes and does not synthesize
steps for them. Post-upload failures provide inspection/retry guidance.

The candidate accepts `lib/net48` plugin packages and qualifies the supported
framework/signing requirements for loose DLLs. It repairs incomplete reference
caches and protects new caches within the OS account's local application data.
Legacy shared-temp caches are left untouched. See the [plugin package guide](../../guides/plugin-packages.md).

## Dependency servicing

Auth and Dataverse pin PKCS 10.0.13 and XML cryptography 8.0.5. The RPC update
resolves MessagePack 2.5.307. These fixes flow into downstream libraries, CLI,
MCP, and the bundled Extension daemon. Already merged identity, Dataverse SDK,
Microsoft.Extensions, and SourceLink updates are also included. Plugins 3.0.1
refreshes build/package inputs and its packed README; it adds no attributes
and retains its strong-name identity and `net462` target.

The Extension includes patched DOMPurify in notebook rendering, updates
vscode-jsonrpc, and targets bundled CLI 1.4.2. Node modernization is deferred.
See the [cryptography servicing PR](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1470)
and [RPC update](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1462).

## PowerShell and ALM compatibility

### PPDS.Tools

[Tools #16](https://github.com/joshsmithxrm/ppds-tools/pull/16) prepares
**1.2.0-alpha3**, repairing all 12 cmdlets in the prerelease CLI-wrapper API.
Stable **1.1.0** retains its native implementation and is unchanged. The fixes
redact supplied credentials in diagnostics, parse complete JSON and plugin
envelopes, read migration progress from stderr, and propagate failures. They
also preserve arguments, relative paths and interactive prompts, and terminate
the owned CLI process when PowerShell cancels a call.

The tested baseline is published CLI **1.4.1**: 143 Pester tests pass, including
offline extraction and schema checks. The three packaged offline checks also
pass against the **1.4.2 candidate**. Authentication, deployment and migration
use mock boundaries; no live-service success is claimed. See the
[reviewed compatibility details](https://github.com/joshsmithxrm/ppds-tools/blob/a7ca62bd97810d3837a8a602bdf8487e9faa512b/docs/CLI_COMPATIBILITY.md).
The source merge does not publish alpha3 or promote the API to stable.

### PPDS ALM

[ALM #35](https://github.com/joshsmithxrm/ppds-alm/pull/35) prepares **1.0.1**.
Plugin builds select the evaluated MSBuild `TargetPath` using the selected
solution's context. Ambiguous builds require `plugin-project` or
`plugin-target-framework`. Plugin workflows use current extraction,
authentication, diff and deployment contracts; failed or invalid drift results
stop deployment, while a valid drift exit code 1 remains successful. Cleanup
removes only the temporary named profile.

The workflows keep the consumer checkout separate from their composite
actions, fetched from `job.workflow_repository` at `job.workflow_sha`.
These identity fields require **GitHub.com**; this patch does not support
GitHub Enterprise Server. The 19 offline tests pass against both published
CLI **1.4.1** and the **1.4.2 candidate**, including real MSBuild selection
and synthetic `net462` extraction. Authentication, diff and deploy parser
checks use `--help`, with mocked execution boundaries; they do not validate
live deployment. See the [reviewed test scope](https://github.com/joshsmithxrm/ppds-alm/blob/b96ef053de12be54121f55e97ee51628244174aa/tests/README.md).

The stable `v1` and `v1.0.0` refs remain unchanged until publication approval.
The source merge affects consumers that explicitly opt into `main`; it does
not deliver these fixes to stable-tag consumers. The release will create
`v1.0.1` and update `v1`, preserving the existing `v1.0.0` tag.

## Release verification

### Companion documentation and skills

The [AI agent installation guide](../../getting-started/ai-agent-skills.md)
covers Claude Code and GitHub Copilot CLI. Skills 0.1.2 includes candidate
capture provenance inside the core skill, so copying all seven skill folders
retains it. Static validation rejects relative links outside that installed
tree. The Linux static, release-recapture, and opt-in live-evaluation workflows
use Ubuntu 24.04 to preserve Python 3.8 support; the latter remains opt-in.

Docs and skills stay on their reviewed preparation branches until publication
is approved: merging docs deploys the public site, and merging skills makes
the plugin available through its repository-backed marketplace. Public CLI
and MCP packages must be verified and captured before skills are presented
as tested against those published packages. For equal-version recapture,
use the [manual contributor procedure](https://github.com/joshsmithxrm/ppds-skills/blob/codex/maintenance-skills-20261029/CONTRIBUTING.md#manual-offline-or-what-the-automation-runs-under-the-hood);
the scheduled workflow skips versions that are not newer than its capture.

### Combined product checks

Final combined tests, package-version checks, and public-feed verification
remain release gates. Individual PR results do not certify the combined
candidate. Native extraction coverage spans the five shipped CLI platforms;
it does not substitute for a targeted live Timeline round-trip. No such
round-trip is claimed here.

After publication, the release workflows verify NuGet installs/restores, all
five CLI binaries and checksums, and all four Marketplace VSIX targets and
their bundled CLI versions. Docs generation is a separate explicit dispatch
at the reviewed release ref. See the [release runbook](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/docs/RELEASE.md).
