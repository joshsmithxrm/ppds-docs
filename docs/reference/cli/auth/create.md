<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds auth create

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-n, --name &lt;name&gt;` | The name you want to give to this authentication profile (maximum 30 characters) |
| `-env, --environment &lt;environment&gt;` | Default environment (ID, url, unique name, or partial name) |
| `-ci, --cloud &lt;China\|Public\|UsGov\|UsGovDod\|UsGovHigh&gt;` | Optional: The cloud instance to authenticate with [default: Public] |
| `-t, --tenant &lt;tenant&gt;` | Tenant ID if using application ID/client secret or application ID/client certificate |
| `-dc, --deviceCode` | Use the Microsoft Entra ID Device Code flow for interactive sign-in |
| `-id, --applicationId &lt;applicationId&gt;` | Optional: The application ID to authenticate with |
| `-cs, --clientSecret &lt;clientSecret&gt;` | Optional: The client secret to authenticate with |
| `-cdp, --certificateDiskPath &lt;certificateDiskPath&gt;` | Optional: The certificate disk path to authenticate with |
| `-cp, --certificatePassword &lt;certificatePassword&gt;` | Optional: The certificate password to authenticate with |
| `-ct, --certificateThumbprint &lt;certificateThumbprint&gt;` | Certificate thumbprint for Windows certificate store authentication |
| `-mi, --managedIdentity` | Use Azure Managed Identity |
| `-un, --username &lt;username&gt;` | Optional: The username to authenticate with; shows a Microsoft Entra ID dialog if not specified |
| `-p, --password &lt;password&gt;` | Optional: The password to authenticate with |
| `-ghf, --githubFederated` | Use GitHub Federation for Service Principal Auth; requires --tenant and --applicationId arguments |
| `-adof, --azureDevOpsFederated` | Use Azure DevOps Federation for Service Principal Auth; requires --tenant and --applicationId arguments |
| `-?, -h, --help` | Show help and usage information |

## Platform-specific source contract

Accept cleartext credential storage on Linux when secure storage (libsecret) is unavailable

`--accept-cleartext-caching`: shown on Linux; hidden on other operating systems. Default: `false`. This flag is source-derived from `f404b9258bffc456efa259b6ba53c89f3c05750b2df06842ff621a5a6a016269`; it is not a Linux help-process capture.

## Captured help

```text
Description:
  Create and store authentication profiles on this computer

Usage:
  ppds auth create [options]

Options:
  -n, --name <name>                                     The name you want to give to this authentication profile (maximum 30 characters)
  -env, --environment <environment>                     Default environment (ID, url, unique name, or partial name)
  -ci, --cloud <China|Public|UsGov|UsGovDod|UsGovHigh>  Optional: The cloud instance to authenticate with [default: Public]
  -t, --tenant <tenant>                                 Tenant ID if using application ID/client secret or application ID/client certificate
  -dc, --deviceCode                                     Use the Microsoft Entra ID Device Code flow for interactive sign-in
  -id, --applicationId <applicationId>                  Optional: The application ID to authenticate with
  -cs, --clientSecret <clientSecret>                    Optional: The client secret to authenticate with
  -cdp, --certificateDiskPath <certificateDiskPath>     Optional: The certificate disk path to authenticate with
  -cp, --certificatePassword <certificatePassword>      Optional: The certificate password to authenticate with
  -ct, --certificateThumbprint <certificateThumbprint>  Certificate thumbprint for Windows certificate store authentication
  -mi, --managedIdentity                                Use Azure Managed Identity
  -un, --username <username>                            Optional: The username to authenticate with; shows a Microsoft Entra ID dialog if not specified
  -p, --password <password>                             Optional: The password to authenticate with
  -ghf, --githubFederated                               Use GitHub Federation for Service Principal Auth; requires --tenant and --applicationId arguments
  -adof, --azureDevOpsFederated                         Use Azure DevOps Federation for Service Principal Auth; requires --tenant and --applicationId arguments
  -?, -h, --help                                        Show help and usage information
```
