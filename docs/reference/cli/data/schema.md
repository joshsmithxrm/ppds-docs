<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data schema

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-e, --entities &lt;entities&gt;` | [Required] Entity logical names to include (comma-separated or multiple -e flags) (-e is deprecated; use --entities.) |
| `-o, --output &lt;output&gt;` | [Required] Output schema file path |
| `-p, --profile &lt;profile&gt;` | Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota. |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `--include-audit-fields` | Include audit fields (createdon, createdby, modifiedon, modifiedby, overriddencreatedon) |
| `--disable-plugins` | Set disableplugins=true on all entities |
| `-a, --include-attributes &lt;include-attributes&gt;` | Only include these attributes (whitelist, comma-separated or multiple flags) |
| `--exclude-attributes &lt;exclude-attributes&gt;` | Exclude these attributes (blacklist, comma-separated) |
| `--filter &lt;filter&gt;` | SQL-like filter per entity. Format: entity:expression (e.g., &quot;account:statecode = 0&quot;). Repeatable. |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-v, --verbose` | Enable verbose logging output |
| `--debug` | Enable diagnostic logging output |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Generate a migration schema from Dataverse metadata

Usage:
  ppds data schema [options]

Options:
  -e, --entities <entities>                      [Required] Entity logical names to include (comma-separated or multiple -e flags) (-e is deprecated; use --entities.)
  -o, --output <output>                          [Required] Output schema file path
  -p, --profile <profile>                        Profile name(s). For high-throughput pooling, specify multiple Application User profiles comma-separated (e.g., app1,app2,app3) - each profile multiplies API quota.
  -env, --environment <environment>              Override the environment URL. Takes precedence over profile's bound environment.
  --include-audit-fields                         Include audit fields (createdon, createdby, modifiedon, modifiedby, overriddencreatedon)
  --disable-plugins                              Set disableplugins=true on all entities
  -a, --include-attributes <include-attributes>  Only include these attributes (whitelist, comma-separated or multiple flags)
  --exclude-attributes <exclude-attributes>      Exclude these attributes (blacklist, comma-separated)
  --filter <filter>                              SQL-like filter per entity. Format: entity:expression (e.g., "account:statecode = 0"). Repeatable.
  -f, --output-format <Text|Json>                Output format [default: Text]
  -v, --verbose                                  Enable verbose logging output
  --debug                                        Enable diagnostic logging output
  -?, -h, --help                                 Show help and usage information
```
