<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [extract](extract.md)
- [deploy](deploy.md)
- [register](register.md)
- [diff](diff.md)
- [list](list.md)
- [get](get.md)
- [clean](clean.md)
- [download](download.md)
- [update](update.md)
- [unregister](unregister.md)
- [enable](enable.md)
- [disable](disable.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Plugin registration management: extract, deploy, register, diff, list, get, clean, download, update, unregister, enable, disable

Usage:
  ppds plugins [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  extract                         Extract plugin step/image attributes from an assembly (.dll) or plugin package (.nupkg) to JSON configuration. Works against Dataverse-supported .NET Framework plugin assemblies and net462/net471/net48 plugin package assets regardless of how the CLI is packaged (single-file, self-contained, or framework-dependent).
  deploy                          Deploy plugin registrations to environment
  register                        Register plugin components: assembly, package, type, step, image
  diff                            Compare managed registration fields against environment state
  list                            List registered plugins in the environment
  get <type> <name-or-id>         Get details for a specific plugin entity
  clean                           Version 1: legacy parent cleanup; version 2: prune owned images on configured steps
  download                        Download plugin assembly or package binary from Dataverse
  update                          Update existing plugin registrations
  unregister <type> <name-or-id>  Unregister plugin entities from Dataverse
  enable <step-name-or-id>        Enable a plugin processing step
  disable <step-name-or-id>       Disable a plugin processing step
```
