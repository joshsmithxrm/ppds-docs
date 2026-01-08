---
sidebar_position: 1
title: Architecture
description: Understanding PPDS architecture and design decisions
---

# Architecture

:::info Coming Soon
This section is under development. Check back soon for detailed architecture documentation.
:::

## Overview

Power Platform Developer Suite is designed with these principles:

- **Developer-first** - Optimize for common development workflows
- **Composable** - Use what you need, ignore what you don't
- **Reliable** - Built-in retry logic and error handling
- **Modern** - Async-first, DI-friendly, strongly-typed

## Components

```
┌─────────────────────────────────────────────────────┐
│                    CLI (ppds)                       │
├─────────────────────────────────────────────────────┤
│                      SDK                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │Solutions │ │ Entities │ │ Plugins  │  ...      │
│  └──────────┘ └──────────┘ └──────────┘           │
├─────────────────────────────────────────────────────┤
│               Core / HTTP Client                    │
├─────────────────────────────────────────────────────┤
│            Power Platform Web API                   │
└─────────────────────────────────────────────────────┘
```

## Design Decisions

Documentation for architecture decision records (ADRs) coming soon.

## Next Steps

- [Installation](/docs/getting-started/installation)
- [CLI Reference](/docs/reference/cli/overview)
- [SDK Reference](/docs/reference/sdk/overview)
