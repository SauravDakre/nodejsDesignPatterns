## What problems can the Visitor design pattern solve?
It should be possible to define a new operation for (some) classes of an object structure without changing the classes.

## What solution does the Visitor design pattern describe?
- Define a separate (visitor) object that implements an operation to be performed on elements of an object structure.
- Clients traverse the object structure and call a dispatching operation accept (visitor) on an element — that "dispatches" (delegates) the request to the "accepted visitor object". The visitor object then performs the operation on the element ("visits the element").
This makes it possible to create new operations independently from the classes of an object structure by adding new visitor objects.


## Uses
Moving operations into visitor classes is beneficial when

- many unrelated operations on an object structure are required,
- the classes that make up the object structure are known and not expected to change,
- new operations need to be added frequently,
- an algorithm involves several classes of the object structure, but it is desired to manage it in one single location,
- an algorithm needs to work across several independent class hierarchies.
A drawback to this pattern, however, is that it makes extensions to the class hierarchy more difficult, as new classes typically require a new visit method to be added to each visitor.