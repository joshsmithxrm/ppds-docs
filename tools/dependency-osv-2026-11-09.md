# November 9, 2026 — local OSV lock-graph comparison

This dated comparison is distinct from the November 2 npm-registry audit. The original18 Moderate/3 Low propagated Docs audit nodes remain historical. No lock, override, source behavior or package was changed by this maintenance update.

The official OSV npm bulk snapshot was last modified2026-11-09T17:33:10Z, generation1794245590849312, SHA256 `f2c66d082a5d4e9094c7bd271ac14690343991ad05bbfde73dff56281b8b0c5a`. The reviewed local comparison covered all1197 distinct Docs package/version pairs (1323 locations), including development, optional and platform entries; Docs lock SHA256 `1b7f6cf7408781fd97188a89afc7bf11111997f08e6c3df23c60b75ec3d058cd`. It found no affected Critical/High or malicious-package record and no unresolved applicable comparison at these pins. This is neither an npm-registry audit result nor final-site/dependency-vulnerability absence.

| Graph / pair | Current advisory result | Bound at the reviewed sources |
|---|---|---|
| Docs minimatch3.1.5 | Outside the updated `>=7.0.0,<11.0.1` range of [GHSA-g3hv-75wg-m249](https://osv.dev/vulnerability/GHSA-g3hv-75wg-m249) | Preserve the earlier npm flag as dated history; do not force an incompatible major solely because of that stale range |
| Docs deepmerge4.3.1 | Low, [GHSA-gcqx-w48m-w2h4](https://osv.dev/vulnerability/GHSA-gcqx-w48m-w2h4); no fixed version listed | Sole declaring parent `@svgr/plugin-svgo`8.1.0 does not import deepmerge in the inspected runtime. No consumer import was observed across the inspected installed JS/CJS/MJS. That narrows current reachability; npm's production flag alone is not browser execution proof |
| Separate Extension minimatch10.2.6 | Moderate, [GHSA-g3hv-75wg-m249](https://osv.dev/vulnerability/GHSA-g3hv-75wg-m249); fixed11.0.1 | Trigger requires attacker-controlled patterns with optimizationLevel>=2. Current reviewed inputs do not enable it. Import-x can forward patternOptions, so this is configuration-bound mitigation, not a claim that every caller always uses defaults or that10.2.6 is fixed |

The Extension comparison covered531 exact package/version pairs (538 locations), lock SHA256 `3684ffa17329fe9cb5ac75b7783bed94039e521c28e34db383634a5c516834d2`. Root accepted both documented residuals as nonblocking for continued release preparation and checked core integration. That decision does not waive an applicable Critical/High exposure or unknown final artifacts. Recheck locks, callers, configuration, the actual final four VSIX payloads and static-site inclusion before publication; any changed bound reopens the disposition.

Primary record sources are the linked OSV advisories. Local comparison provenance: `npm-local-advisory-review-20261109/report.md` SHA256 `f22965df1d40307bda5cb8019cb4ff796358628aa849f9e242aa72ad342a335e`, its full graph/range/caller evidence manifest, and `npm-residual-disposition-ROOT-20261109.md`. No package graph was sent externally by that local comparison.
