---
title: Edit views forms and app selections
description: Inspect drafts, preserve view projections, and publish scoped metadata changes
---

# Edit views forms and app selections

Power Platform Developer Suite (PPDS) edits views and forms through the CLI.
This guide describes the **CLI 1.4.2 maintenance candidate**, including fixes
that are not in the published 1.4.1 release. See the [candidate notes](../reference/releases/maintenance-2026-10.md).

## Select and inspect the target

Confirm the intended profile and environment before writing. In the commands
below, replace `<profile>`, `<environment-url>`, `<view-id>`, `<form-id>`, and
`<app-id>` with reviewed values. Use the same overrides on every command.

```text
ppds api request --path /api/data/v9.2/WhoAmI --profile <profile> --environment <environment-url>
ppds views get --entity account --view <view-id> --unpublished --profile <profile> --environment <environment-url>
ppds forms get --entity account --form <form-id> --unpublished --raw --profile <profile> --environment <environment-url>
```

Views are `savedquery` records (Web API collection `savedqueries`); forms are
`systemform` records. Managed views can accept an unmanaged-layer edit when
their managed properties allow it. `View.ManagedComponentNotEditable` means
the platform rejected that write. Save the original draft before an edit.

## Keep visible columns and query projections aligned

The candidate's `views add-column` maintains the layout cell and FetchXML
projection, including repair of an existing cell whose projection is missing.
It preserves other filters, sorts, keys, and links.

```text
ppds views add-column --entity account --view <view-id> --column telephone1 --profile <profile> --environment <environment-url>
ppds views add-column --entity account --view <view-id> --via-relationship parentaccountid --column name --profile <profile> --environment <environment-url>
ppds views update-column --entity account --view <view-id> --column parentaccountid.name --width 220 --profile <profile> --environment <environment-url>
```

Related layout columns use `alias.attribute`, such as `parentaccountid.name`.
Keep that identity when updating, removing, or reordering them; a base `name`
column and related `name` columns are distinct. Removing a visible cell does
not remove its query projection, which other query logic may still need.

There is no typed `views create` command. For raw API creation, supply both
FetchXML and layout XML. This Account example uses its standard ObjectTypeCode
`1`; resolve the actual code for another table. Save the reviewed JSON as
`view.json` before issuing the POST, which creates a new view.

```json
{
  "name": "Account telephone review",
  "returnedtypecode": "account",
  "querytype": 0,
  "fetchxml": "<fetch><entity name='account'><attribute name='accountid'/><attribute name='name'/><attribute name='telephone1'/></entity></fetch>",
  "layoutxml": "<grid name='resultset' object='1' jump='name' select='1' preview='1' icon='1'><row name='result' id='accountid'><cell name='name' width='240'/><cell name='telephone1' width='180'/></row></grid>"
}
```

```text
ppds api request --method POST --path /api/data/v9.2/savedqueries --body-file view.json --include --profile <profile> --environment <environment-url>
```

The `--include` output exposes response headers, including the created view
URI in `OData-EntityId`. Use that view ID for later inspection and edits.

## Verify a draft before publication

View writes compare every written XML field with the intended unpublished
state. Equivalent formatting and platform-maintained root annotations do not
cause a mismatch; query attributes, aliases, filters, and order still matter.

`View.UpdateNotPersisted` means read-back returned different XML or no record.
`View.VerificationFailed` means verification reads were unavailable. Either
error can follow an applied write: inspect the draft before retrying or
publishing. Read-back cannot prevent another editor changing it afterward.

After reviewing the draft, publish only the intended table:

```text
ppds publish --type entity account --profile <profile> --environment <environment-url>
```

`--publish` on a view mutation performs the same table-scoped publication after
verification. Ordinary reads show published state unless `--unpublished` is
specified. Execute the saved query afterward to check what the app displays.

## Preserve app selections and localized navigation

The candidate resolves the complete requested form/view/chart selection
before changing the app. Duplicate names return candidate IDs; use an ID to
disambiguate. Retained selections stay in place, additions precede removals,
and later server failures can leave partial state. Inspect the app draft before
retrying or publishing. `--all` removes explicit selections and returns to
include-all behavior; it does not delete the underlying components.

```text
ppds model-driven-app set-views --app <app-id> --entity account --view <view-id> --profile <profile> --environment <environment-url>
ppds model-driven-app sitemap --app <app-id> --unpublished --profile <profile> --environment <environment-url>
```

Sitemap edits preserve translated labels. Prefer stable area/group IDs across
languages; ambiguous labels require disambiguation. Use app mutations'
`--publish` only when ready to publish that specific app.

## Preserve Timeline configuration

The candidate's FormXML schema accepts the standard Timeline parameter
`UClientActivitiesConfigurationJSON`. Direct XML writes and unrelated
structured edits preserve that configuration while known parameter types and
form structure remain validated. This is a specific schema correction;
arbitrary future control parameters can still need schema updates. Inspect
the unpublished form after an edit before publishing.

See the [source usage guide](https://github.com/joshsmithxrm/power-platform-developer-suite/blob/main/docs/METADATA-EDITING.md)
and the [Timeline correction](https://github.com/joshsmithxrm/power-platform-developer-suite/pull/1468).
