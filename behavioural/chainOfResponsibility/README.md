# Chain of Responsibility

## motivation

- Coupling the sender of a request to its receiver should be avoided.
- It should be possible that more than one receiver can handle a request.

Implementing a request directly within the class that sends the request is inflexible because it couples the class to a particular receiver and makes it impossible to support multiple receivers.

## What solution does the Chain of Responsibility design pattern describe?

- Define a chain of receiver objects having the responsibility, depending on run-time conditions, to either handle a request or forward it to the next receiver on the chain (if any).

This enables to send a request to a chain of receivers without having to know which one handles the request. The request gets passed along the chain until a receiver handles the request. The sender of a request is no longer coupled to a particular receiver.
