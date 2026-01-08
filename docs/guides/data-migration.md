---
sidebar_position: 2
title: Data Migration
description: Migrate data between Power Platform environments
---

# Data Migration

:::info Coming Soon
This guide is under development. Check back soon for comprehensive data migration documentation.
:::

## Overview

PPDS provides tools for migrating data between Power Platform environments, including:

- Bulk data export and import
- Reference data management
- Environment-to-environment sync
- Incremental migrations

## Quick Preview

```bash
# Export data from source environment
ppds data export --entity account --output ./data/accounts.json

# Import data to target environment
ppds data import --file ./data/accounts.json --target https://target.crm.dynamics.com
```

## Next Steps

- [Installation](/docs/getting-started/installation)
- [Authentication](/docs/guides/authentication)
