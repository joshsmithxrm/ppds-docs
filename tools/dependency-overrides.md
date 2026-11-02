# Documentation build dependency overrides

Use Node 24 (`.nvmrc` and `engines`) and `npm ci`. Docusaurus 3.10.2 remains on the supported 3.x line with React 18; the site does not opt into `future.v4` or enable SSG worker threads. The lockfile refresh also selects patched releases within existing dependency ranges.

The following overrides are scoped to the consumers that still constrain vulnerable versions. Remove each override when its upstream range can select a patched version, after rerunning `npm run test:dependency-contracts`, typecheck and the production build.

| Consumer constraint | Override | Compatibility evidence |
| --- | --- | --- |
| `@docusaurus/core` → `tinypool ^1.0.2` | `2.1.2` | The [v2 breaking change](https://github.com/tinylibs/tinypool/releases/tag/v2.0.0) drops Node 18; Node 24 is supported. [2.1.2 fixes the run gadget](https://github.com/tinylibs/tinypool/releases/tag/v2.1.2). The contract test uses Docusaurus's actual worker options, `workerData[1].params`, worker identity, queued `run()` calls and `destroy()`. Production workers remain disabled. |
| `copy-webpack-plugin` and `css-minimizer-webpack-plugin` → `serialize-javascript ^6` | `7.1.4` | [v7 requires Node 20+](https://github.com/yahoo/serialize-javascript/releases/tag/v7.0.0) and retains the CommonJS serialization function. The contract test compiles real copy transforms with cached keys and parallel CSS minimization, exercising both callers' serialization paths. [7.1.4](https://github.com/yahoo/serialize-javascript/releases/tag/v7.1.4) includes the security fixes and correct method serialization. |
| `sockjs` → `uuid ^8.3.2` | `11.1.1` | [uuid 11 supports CommonJS](https://github.com/uuidjs/uuid/blob/v11.1.1/README.md). SockJS uses only the unchanged no-argument `v4()` string API; the test constructs real SockJS connections and validates distinct v4 IDs. No change to its transport configuration. |

## Remaining lower-severity findings

The full audit is intentionally unsuppressed. On 2026-11-02 it reports zero high/critical findings, with 18 moderate and 3 low package nodes tracing to two advisory roots:

- **minimatch 3.1.5, moderate** ([GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)): the latest `serve-handler` 6.1.7 pins 3.1.5 and calls its CommonJS export as a function. The patched 11.x export has a different shape, so forcing that major would break local `docusaurus serve`. The described `optimizationLevel >= 2` preprocessing is absent from the installed 3.x source; the broad advisory range still reports it. This dependency serves local previews, not the deployed static site. Do not expose preview servers to untrusted networks.
- **deepmerge 4.3.1, low** ([GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)): no patched version is published. `@svgr/plugin-svgo` 8.1.0 declares it but its distributed runtime does not import it. Downgrading below the reported range would leave the consumer's supported range without establishing a patched version. Keep it visible until upstream removes or patches the dependency.

These are bounded source/reachability observations, not a claim that the dependency graph is vulnerability-free. CI audits the full graph, including build and development dependencies, and blocks high or critical findings. Reassess lower findings when upstream publishes a compatible fix or their reachability changes.
