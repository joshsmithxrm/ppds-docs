---
sidebar_position: 3
title: Plugin Deployment
description: Deploy Dataverse plugins using PPDS
---

# Plugin Deployment

:::info Coming Soon
This guide is under development. Check back soon for plugin deployment documentation.
:::

## Overview

Deploy and manage Dataverse plugins with PPDS:

- Register plugin assemblies
- Configure plugin steps
- Manage secure/unsecure configuration
- Deploy across environments

## Quick Preview

```bash
# Register a plugin assembly
ppds plugin register --assembly ./bin/Release/MyPlugin.dll

# List registered plugins
ppds plugin list

# Update plugin steps
ppds plugin update --assembly ./bin/Release/MyPlugin.dll
```

## Next Steps

- [Installation](/docs/getting-started/installation)
- [Authentication](/docs/guides/authentication)
