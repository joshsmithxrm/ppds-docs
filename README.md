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

## Contributing

See [Contributing Guide](https://joshsmithxrm.github.io/ppds-docs/docs/contributing/).

## License

MIT
