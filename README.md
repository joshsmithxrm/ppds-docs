# ppds-docs

Documentation site for [Power Platform Developer Suite](https://github.com/joshsmithxrm/power-platform-developer-suite).

**Live site**: https://joshsmithxrm.github.io/ppds-docs

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
npm install
```

### Local Development

```bash
npm start
```

Opens http://localhost:3000 with hot reload.

### Build

```bash
npm run build
```

Generates static content in `./build`.

### Type Check

```bash
npm run typecheck
```

## Project Structure

```
docs/               # Documentation content (MDX)
├── getting-started/
├── guides/
├── reference/
├── concepts/
└── contributing/
src/                # React components and pages
static/             # Static assets (images, etc.)
```

## Deployment

Automatic via GitHub Actions on push to `main`. Deploys to GitHub Pages.

Before publishing a stable reference refresh:

- Verify the final core release ref and the public CLI/MCP pair used by both Docs and Skills. Review the paired API-baseline rollover, or record its verified no-op.
- Preserve `validation/candidate-provenance.json` as candidate history. Add a separate stable provenance record under `validation/` with the actual source, versions, package/binary hashes and capture/runtime evidence, then update `docs/reference/capture-provenance.md` to link that record by immutable commit SHA. The core generator updates four reference subdirectories; it does not refresh either of these provenance records.
- Require the reviewed core generator's complete library coverage route: all thirteen package/TFM inputs (Auth, Dataverse, Migration and Query at net8.0/net9.0/net10.0; Plugins at net462), actual DLL/XML hashes, exported-type inventory and explicit framework variants. Ordinary single-directory reflection is insufficient. Preserve unavailable-summary notes, and record intentional hidden/synthesized-member exclusions without claiming complete CLR signature coverage. Adopt the resulting coverage receipt under `validation/`; input hashes do not by themselves prove public-package authenticity.
- Compose generated output with the held authored documentation, explicitly review removed or renamed generated paths, and keep each differing framework variant. The current writing helper overlays reference files on its clone; it does not prove stale pages were removed or compose unpublished authored changes automatically.
- Validate the composed documentation branch and review the stable links before a separately approved main merge. A successful product publish or generated-reference PR does not complete this handoff.

## Contributing

See [Contributing Guide](https://joshsmithxrm.github.io/ppds-docs/docs/contributing/).

## License

MIT
