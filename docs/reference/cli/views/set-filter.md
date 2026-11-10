<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds views set-filter

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-e, -env, --environment &lt;environment&gt;` | Override the environment URL. |
| `--confirm-env &lt;confirm-env&gt;` | Acknowledge writing to this exact resolved environment URL |
| `--entity &lt;entity&gt;` | [Required] Entity logical name (e.g., account) |
| `-v, --view &lt;view&gt;` | [Required] View name or ID |
| `--filter-file &lt;filter-file&gt;` | Path to a file containing a &lt;filter&gt; XML fragment. Mutually exclusive with --condition. |
| `--condition &lt;condition&gt;` | Inline single condition in format &#x27;attribute:operator:value&#x27; (e.g. statecode:eq:0). Mutually exclusive with --filter-file. |
| `--solution &lt;solution&gt;` | Add the view to this solution after the operation |
| `--publish` | Publish the entity after the operation |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Set or replace the filter on a view.
  
  Use --filter-file to apply a <filter> XML fragment from a file:
    <filter type="and">
      <condition attribute="statecode" operator="eq" value="0" />
    </filter>
  
  Use --condition for a quick single-condition filter: --condition "statecode:eq:0"

Usage:
  ppds views set-filter [options]

Options:
  -p, --profile <profile>                Authentication profile name
  -e, -env, --environment <environment>  Override the environment URL.
  --confirm-env <confirm-env>            Acknowledge writing to this exact resolved environment URL
  --entity <entity>                      [Required] Entity logical name (e.g., account)
  -v, --view <view>                      [Required] View name or ID
  --filter-file <filter-file>            Path to a file containing a <filter> XML fragment. Mutually exclusive with --condition.
  --condition <condition>                Inline single condition in format 'attribute:operator:value' (e.g. statecode:eq:0). Mutually exclusive with --filter-file.
  --solution <solution>                  Add the view to this solution after the operation
  --publish                              Publish the entity after the operation
  -q, --quiet                            Show only warnings and errors
  -v, --verbose                          Show detailed output including debug messages
  --debug                                Show trace-level diagnostic output
  --correlation-id <correlation-id>      Correlation ID for distributed tracing
  -f, --output-format <Text|Json>        Output format [default: Text]
  -?, -h, --help                         Show help and usage information
```
