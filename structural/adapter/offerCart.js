class OfferCart{
    constructor(){
        this.prices = []
        this.discount = 0
    }

    addPriceInCart(price){
        this.prices.push(price)
    }

    setDiscount(discount){
        this.discount = discount
    }

    computeTotal(){
        let total = this.prices.reduce((iv, price)=>{
            return iv + price
        }, 0)
        total -= ((total * this.discount)/100)
        return total
    }

}

module.exports = OfferCart