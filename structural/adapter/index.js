const Cart = require('./cart')
const OfferCartAdapter = require('./offerCartAdapter')

const c = new Cart()
c.addPriceInCart(10)
c.addPriceInCart(20)
console.log("Old cart object: ",c)
console.log(c.getTotalPrice())

const oca = new OfferCartAdapter()
oca.addPriceInCart(20)
oca.addPriceInCart(30)
oca.setDiscount(10)
console.log("new cart object: ", oca)
console.log(oca.getTotalPrice())