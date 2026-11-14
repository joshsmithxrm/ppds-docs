<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [api](api/api-reference.md)
- [auth](auth/api-reference.md)
- [env](env/api-reference.md)
- [org](org/api-reference.md)
- [data](data/api-reference.md)
- [plugins](plugins/api-reference.md)
- [plugin-traces](plugin-traces/api-reference.md)
- [service-endpoints](service-endpoints/api-reference.md)
- [custom-apis](custom-apis/api-reference.md)
- [data-providers](data-providers/api-reference.md)
- [data-sources](data-sources/api-reference.md)
- [metadata](metadata/api-reference.md)
- [schema](schema/api-reference.md)
- [query](query/api-reference.md)
- [solutions](solutions/api-reference.md)
- [import-jobs](import-jobs/api-reference.md)
- [environment-variables](environment-variables/api-reference.md)
- [flows](flows/api-reference.md)
- [connections](connections/api-reference.md)
- [connection-references](connection-references/api-reference.md)
- [deployment-settings](deployment-settings/api-reference.md)
- [users](users/api-reference.md)
- [roles](roles/api-reference.md)
- [model-driven-app](model-driven-app/api-reference.md)
- [views](views/api-reference.md)
- [forms](forms/api-reference.md)
- [webresources](webresources/api-reference.md)
- [publish](publish.md)
- [docs](docs.md)
- [version](version.md)
- [logs](logs/api-reference.md)
- [interactive](interactive.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |
| `--version` | Show version information |

## Captured help

```text
Description:
  PPDS CLI - Power Platform Developer Suite command-line tool
  
  Documentation: https://joshsmithxrm.github.io/ppds-docs/

Usage:
  ppds [command] [options]

Options:
  -?, -h, --help  Show help and usage information
  --version       Show version information

Commands:
  api                                          Send raw HTTP requests to the Dataverse Web API
  auth                                         Manage authentication profiles
  env                                          Manage environment selection
  org                                          Manage environment selection (alias for 'env')
  data                                         Data operations: export, import, copy, analyze, schema, users, load, update, delete, truncate
  plugins                                      Plugin registration management: extract, deploy, register, diff, list, get, clean, download, update, unregister, enable, disable
  plugin-traces, plugintraces                  Query and manage plugin trace logs: list, get, related, timeline, settings, delete
  service-endpoints                            Service endpoint management: list, get, register, update, unregister
  custom-apis                                  Custom API management: list, get, register, update, unregister, add-parameter, update-parameter, remove-parameter
  data-providers                               Data provider management: list, get, register, update, unregister
  data-sources                                 Data source management: list, get, register, update, unregister
  metadata                                     Browse Dataverse entity metadata: entities, attributes, relationships, option sets
  schema                                       Compare Dataverse schemas across environments and data packages.
  query                                        Execute FetchXML and SQL queries against Dataverse
  solutions                                    Manage Dataverse solutions: list, get, export, import, publish
  import-jobs, importjobs                      Monitor solution import jobs: list, get, data, wait
  environment-variables, environmentvariables  Manage environment variables
  flows                                        Manage cloud flows (Power Automate)
  connections                                  Manage Power Platform connections (Power Apps Admin API)
  connection-references, connectionreferences  Manage connection references
  deployment-settings                          Generate, sync, and validate deployment settings files
  users                                        Manage users
  roles                                        Manage security roles
  model-driven-app                             Manage model-driven app navigation and components
  views                                        Manage Dataverse savedqueries views: list, get, add-column, remove-column, update-column, reorder-columns, set-sort, clear-sort, set-filter, clear-filter, set-fetchxml
  forms                                        Inspect and modify Dataverse systemform records: list forms, view form structure, and manage tabs, sections, fields, and sub-grids
  webresources                                 Manage Dataverse web resources: list, get, url, publish, pull, push, create, update
  publish <names>                              Publish Dataverse customizations
  docs                                         Open CLI documentation in browser
  version                                      Show version information for the PPDS CLI
  logs                                         Show recent PPDS log entries or bundle diagnostics for a bug report
  interactive                                  Launch interactive TUI mode for profile selection and SQL queries
```
