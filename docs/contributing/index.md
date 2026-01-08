---
sidebar_position: 1
title: Contributing
description: How to contribute to Power Platform Developer Suite
---

# Contributing

Thank you for your interest in contributing to Power Platform Developer Suite!

## Ways to Contribute

- **Report bugs** - [Open an issue](https://github.com/joshsmithxrm/power-platform-developer-suite/issues/new)
- **Suggest features** - [Start a discussion](https://github.com/joshsmithxrm/power-platform-developer-suite/discussions)
- **Improve documentation** - Submit a PR to [ppds-docs](https://github.com/joshsmithxrm/ppds-docs)
- **Contribute code** - Fork, branch, and submit a PR

## Development Setup

### Prerequisites

- .NET 8.0 SDK
- Node.js 20+ (for docs)
- A Power Platform environment for testing

### Clone the Repository

```bash
git clone https://github.com/joshsmithxrm/power-platform-developer-suite.git
cd power-platform-developer-suite
```

### Build

```bash
dotnet build
```

### Run Tests

```bash
dotnet test
```

## Documentation Contributions

The documentation site uses Docusaurus. To contribute:

```bash
git clone https://github.com/joshsmithxrm/ppds-docs.git
cd ppds-docs
npm install
npm start
```

### Documentation Style Guide

- Use second person ("you can...")
- Present tense ("the command exports...")
- Active voice
- Include working code examples
- Keep paragraphs short and scannable

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Write/update tests as needed
5. Commit with a clear message
6. Push to your fork
7. Open a Pull Request

## Code of Conduct

Be respectful, inclusive, and constructive. We're all here to build great tools.

## Questions?

- [GitHub Discussions](https://github.com/joshsmithxrm/power-platform-developer-suite/discussions)
- [Open an Issue](https://github.com/joshsmithxrm/power-platform-developer-suite/issues)
