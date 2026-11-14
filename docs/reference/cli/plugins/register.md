<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds plugins register

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [assembly](register/assembly.md)
- [package](register/package.md)
- [type](register/type.md)
- [step](register/step.md)
- [image](register/image.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Register plugin components: assembly, package, type, step, image

Usage:
  ppds plugins register [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  assembly <path>  Register a plugin assembly (DLL)
  package <path>   Register a plugin package (NuGet)
  type <assembly>  Register a plugin type within an assembly
  step <type>      Register a processing step for a plugin type
  image <step>     Register an image for a processing step
```
