class Cart{
    constructor(){
        this.prices = []
    }

    addPriceInCart(price){
        this.prices.push(price)
    }

    getTotalPrice(){
        return this.prices.reduce((iv, price)=>{
            return iv + price
        }, 0)
    }
}

module.exports = Cart