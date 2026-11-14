<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds metadata column create

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-s, --solution &lt;solution&gt;` | [Required] Solution unique name containing the table |
| `-e, --entity &lt;entity&gt;` | [Required] Logical name of the entity to add the column to (-e is deprecated; use --entity.) |
| `--name &lt;name&gt;` | [Required] Schema name for the new column (e.g., new_MyColumn) |
| `--display-name &lt;display-name&gt;` | [Required] Display name of the column |
| `--type &lt;BigInt\|Boolean\|Choice\|Choices\|DateTime\|Decimal\|Double\|File\|Image\|Integer\|Lookup\|Memo\|Money\|String&gt;` | [Required] Column type: String, Memo, Integer, BigInt, Decimal, Double, Money, Boolean, DateTime, Choice, Choices, Image, File, Lookup |
| `--description &lt;description&gt;` | Description of the column |
| `--required-level &lt;required-level&gt;` | Requirement level: None, Recommended, or Required |
| `--max-length &lt;max-length&gt;` | Maximum length for String/Memo columns |
| `--min-value &lt;min-value&gt;` | Minimum value for numeric columns |
| `--max-value &lt;max-value&gt;` | Maximum value for numeric columns |
| `--precision &lt;precision&gt;` | Precision for Decimal, Double, and Money columns |
| `--format &lt;format&gt;` | Format for String, Integer, or DateTime columns |
| `--date-time-behavior &lt;date-time-behavior&gt;` | DateTime behavior: UserLocal, DateOnly, or TimeZoneIndependent |
| `--option-set-name &lt;option-set-name&gt;` | Name of an existing global option set for Choice/Choices columns |
| `--options &lt;options&gt;` | Option definitions for Choice/Choices columns: &quot;Label1=1,Label2=2&quot; |
| `--default-value &lt;default-value&gt;` | Default value for Choice or Boolean columns |
| `--true-label &lt;true-label&gt;` | Label for the true value of a Boolean column |
| `--false-label &lt;false-label&gt;` | Label for the false value of a Boolean column |
| `--max-size-kb &lt;max-size-kb&gt;` | Maximum file size in KB for Image/File columns |
| `--dry-run` | Validate only, do not persist changes |
| `-p, --profile &lt;profile&gt;` | Authentication profile name |
| `-env, --environment &lt;environment&gt;` | Override the environment URL. Takes precedence over profile&#x27;s bound environment. |
| `-q, --quiet` | Show only warnings and errors |
| `-v, --verbose` | Show detailed output including debug messages |
| `--debug` | Show trace-level diagnostic output |
| `--correlation-id &lt;correlation-id&gt;` | Correlation ID for distributed tracing |
| `-f, --output-format &lt;Text\|Json&gt;` | Output format [default: Text] |
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Create a new column (attribute) on a Dataverse table

Usage:
  ppds metadata column create [options]

Options:
  -s, --solution <solution>                                                                                   [Required] Solution unique name containing the table
  -e, --entity <entity>                                                                                       [Required] Logical name of the entity to add the column to (-e is deprecated; use --entity.)
  --name <name>                                                                                               [Required] Schema name for the new column (e.g., new_MyColumn)
  --display-name <display-name>                                                                               [Required] Display name of the column
  --type <BigInt|Boolean|Choice|Choices|DateTime|Decimal|Double|File|Image|Integer|Lookup|Memo|Money|String>  [Required] Column type: String, Memo, Integer, BigInt, Decimal, Double, Money, Boolean, DateTime, Choice, Choices, Image, File, Lookup
  --description <description>                                                                                 Description of the column
  --required-level <required-level>                                                                           Requirement level: None, Recommended, or Required
  --max-length <max-length>                                                                                   Maximum length for String/Memo columns
  --min-value <min-value>                                                                                     Minimum value for numeric columns
  --max-value <max-value>                                                                                     Maximum value for numeric columns
  --precision <precision>                                                                                     Precision for Decimal, Double, and Money columns
  --format <format>                                                                                           Format for String, Integer, or DateTime columns
  --date-time-behavior <date-time-behavior>                                                                   DateTime behavior: UserLocal, DateOnly, or TimeZoneIndependent
  --option-set-name <option-set-name>                                                                         Name of an existing global option set for Choice/Choices columns
  --options <options>                                                                                         Option definitions for Choice/Choices columns: "Label1=1,Label2=2"
  --default-value <default-value>                                                                             Default value for Choice or Boolean columns
  --true-label <true-label>                                                                                   Label for the true value of a Boolean column
  --false-label <false-label>                                                                                 Label for the false value of a Boolean column
  --max-size-kb <max-size-kb>                                                                                 Maximum file size in KB for Image/File columns
  --dry-run                                                                                                   Validate only, do not persist changes
  -p, --profile <profile>                                                                                     Authentication profile name
  -env, --environment <environment>                                                                           Override the environment URL. Takes precedence over profile's bound environment.
  -q, --quiet                                                                                                 Show only warnings and errors
  -v, --verbose                                                                                               Show detailed output including debug messages
  --debug                                                                                                     Show trace-level diagnostic output
  --correlation-id <correlation-id>                                                                           Correlation ID for distributed tracing
  -f, --output-format <Text|Json>                                                                             Output format [default: Text]
  -?, -h, --help                                                                                              Show help and usage information
```
