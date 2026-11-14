<!-- Generated from the exact captured CLI help; do not hand-edit. -->

# ppds service-endpoints register

Source: `a0feb138f00575d35634565f3a733deb9e65ca98`, tree `904cce706d298d3f0ed62ea095bdcdd78d584101`. Actual CLI version: `1.4.3-alpha.0.35+a0feb138f00575d35634565f3a733deb9e65ca98`.

## Commands

- [webhook](register/webhook.md)
- [queue](register/queue.md)
- [topic](register/topic.md)
- [eventhub](register/eventhub.md)

## Options

| Accepted spelling / aliases | Description |
|---|---|
| `-?, -h, --help` | Show help and usage information |

## Captured help

```text
Description:
  Register a service endpoint: webhook, queue, topic, eventhub

Usage:
  ppds service-endpoints register [command] [options]

Options:
  -?, -h, --help  Show help and usage information

Commands:
  webhook <name>   Register an HTTP webhook endpoint
  queue <name>     Register an Azure Service Bus queue endpoint
  topic <name>     Register an Azure Service Bus topic endpoint
  eventhub <name>  Register an Azure Event Hub endpoint
```
