const OfferCart = require('./offerCart')

class OfferCartAdapter{
    constructor(){
        this.oc = new OfferCart()
    }

    addPriceInCart(price){
        this.oc.addPriceInCart(price)
    }

    setDiscount(discount){
        this.oc.setDiscount(discount)
    }

    getTotalPrice(){
        return this.oc.computeTotal()
    }
}

module.exports = OfferCartAdapter