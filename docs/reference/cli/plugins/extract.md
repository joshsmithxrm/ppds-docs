<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins extract

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-i, --input &lt;input&gt;` | [Required] Path to assembly (.dll) or plugin package (.nupkg) |
| `-o, --output &lt;output&gt;` | Output file path (default: registrations.json in input directory) |
| `-s, --solution &lt;solution&gt;` | Solution unique name to add components to |
| `-f, --force` | Overwrite existing file without merging |
| `--reference-dir &lt;reference-dir&gt;` | Additional directory to search for referenced assemblies (repeatable). Use when a plugin&#x27;s dependencies live outside the input assembly&#x27;s own folder. |
| `--registration-version &lt;registration-version&gt;` | Registration contract: 1.0 (legacy) or 2.0 (nonsecret reconciliation); defaults to the existing file version or 1.0 |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Extract plugin step/image attributes from an assembly (.dll) or plugin package (.nupkg) to JSON configuration. Works against Dataverse-supported .NET Framework plugin assemblies and net462/net471/net48 plugin package assets regardless of how the CLI is packaged (single-file, self-contained, or framework-dependent).

Usage:
  ppds plugins extract [options]

Options:
  -i, --input <input>                            [Required] Path to assembly (.dll) or plugin package (.nupkg)
  -o, --output <output>                          Output file path (default: registrations.json in input directory)
  -s, --solution <solution>                      Solution unique name to add components to
  -f, --force                                    Overwrite existing file without merging
  --reference-dir <reference-dir>                Additional directory to search for referenced assemblies (repeatable). Use when a plugin's dependencies live outside the input assembly's own folder.
  --registration-version <registration-version>  Registration contract: 1.0 (legacy) or 2.0 (nonsecret reconciliation); defaults to the existing file version or 1.0
  -q, --quiet                                    Show only warnings and errors
  -v, --verbose                                  Show detailed output including debug messages
  --debug                                        Show trace-level diagnostic output
  --correlation-id <correlation-id>              Correlation ID for distributed tracing
  -f, --output-format <Text|Json>                Output format [default: Text]
  -?, -h, --help                                 Show help and usage information
```
