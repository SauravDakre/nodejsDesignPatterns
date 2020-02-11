const CartItem = require('./cartItem')
const CartGroup = require('./cartGroup')

const apple = new CartItem('apple', 15)
const banana = new CartItem('banana', 10)

const fruits = new CartGroup('fruits', [apple, banana])

const eclairs = new CartItem('eclairs', 1)
const vicks = new CartItem('vicks', 2)

const chocolates = new CartGroup('chocolates', [eclairs, vicks])

const carryBag = new CartItem('carryBag', 5)

const boughtItems = new CartGroup('boughtItems', [fruits, chocolates, carryBag])
console.log(boughtItems.info())
console.log("total price: ",boughtItems.price())