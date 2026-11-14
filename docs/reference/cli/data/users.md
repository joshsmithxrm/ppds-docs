<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds data users

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-sp, --source-profile &lt;source-profile&gt;` | Authentication profile for source environment (defaults to active profile) |
| `-tp, --target-profile &lt;target-profile&gt;` | Authentication profile for target environment (defaults to active profile) |
| `-se, --source-env &lt;source-env&gt;` | [Required] Source environment - accepts URL, friendly name, unique name, or ID |
| `-te, --target-env &lt;target-env&gt;` | [Required] Target environment - accepts URL, friendly name, unique name, or ID |
| `-o, --output &lt;output&gt;` | [Required] Output user mapping XML file path |
| `--analyze` | Analyze user differences without generating mapping file |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-v, --verbose` | Enable verbose logging output |
| `--debug` | Enable diagnostic logging output |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Generate user mapping file from source to target environment

Usage:
  ppds data users [options]

Options:
  -sp, --source-profile <source-profile>  Authentication profile for source environment (defaults to active profile)
  -tp, --target-profile <target-profile>  Authentication profile for target environment (defaults to active profile)
  -se, --source-env <source-env>          [Required] Source environment - accepts URL, friendly name, unique name, or ID
  -te, --target-env <target-env>          [Required] Target environment - accepts URL, friendly name, unique name, or ID
  -o, --output <output>                   [Required] Output user mapping XML file path
  --analyze                               Analyze user differences without generating mapping file
  -f, --output-format <Text|Json>         Output format [default: Text]
  -v, --verbose                           Enable verbose logging output
  --debug                                 Enable diagnostic logging output
  -?, -h, --help                          Show help and usage information
```
