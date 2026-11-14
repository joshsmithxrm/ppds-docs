<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds env config

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-l, --label &lt;label&gt;` | Short display label for status bar and tabs |
| `-t, --type &lt;Development\|Production\|Sandbox\|Test\|Trial\|Unknown&gt;` | Environment type (Production, Sandbox, Development, Test, Trial) |
| `-c, --color &lt;Blue\|BrightBlue\|BrightCyan\|BrightGreen\|BrightRed\|BrightYellow\|Brown\|Cyan\|Gray\|Green\|Red\|White\|Yellow&gt;` | Status bar color. Valid values: Red, Green, Yellow, Cyan, Blue, Gray, Brown, BrightRed, BrightGreen, BrightYellow, BrightCyan, BrightBlue, White |
| `-s, --show` | Show current configuration for the environment |
| `--list` | List all configured environments |
| `--remove` | Remove configuration for the environment |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Configure environment display settings (label, type, color)

Usage:
  ppds env config [<url>] [options]

Arguments:
  <url>  Environment URL to configure

Options:
  -l, --label <label>                                                                                                 Short display label for status bar and tabs
  -t, --type <Development|Production|Sandbox|Test|Trial|Unknown>                                                      Environment type (Production, Sandbox, Development, Test, Trial)
  -c, --color <Blue|BrightBlue|BrightCyan|BrightGreen|BrightRed|BrightYellow|Brown|Cyan|Gray|Green|Red|White|Yellow>  Status bar color. Valid values: Red, Green, Yellow, Cyan, Blue, Gray, Brown, BrightRed, BrightGreen, BrightYellow, BrightCyan, BrightBlue, White
  -s, --show                                                                                                          Show current configuration for the environment
  --list                                                                                                              List all configured environments
  --remove                                                                                                            Remove configuration for the environment
  -?, -h, --help                                                                                                      Show help and usage information
```
