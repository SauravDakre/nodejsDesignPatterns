const EventSource = require('./subject')
const Observer = require('./observer')

const person1 = new Observer('person1')
const person2 = new Observer('person2')
const shop = new EventSource()
shop.subscribe(person1)
shop.subscribe(person2)

shop.notify('discout 10%')