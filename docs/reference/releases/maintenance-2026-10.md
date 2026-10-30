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

Published versions were verified on October 29, 2026. Each product retains its
own version line; all candidate tags must identify the reviewed release commit.

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

## Release verification

Final combined tests, package-version checks, and public-feed verification
remain release gates. Individual PR results do not certify the combined
candidate. Native extraction coverage spans the five shipped CLI platforms;
it does not substitute for a targeted live Timeline round-trip. No such
round-trip is claimed here.

After publication, the release workflows verify NuGet installs/restores, all
five CLI binaries and checksums, and all four Marketplace VSIX targets and
their bundled CLI versions. Docs generation is a separate explicit dispatch
at the reviewed release ref. See the [release runbook](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/docs/RELEASE.md).
