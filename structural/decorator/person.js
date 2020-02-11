class Person {
    constructor(name, availableMoney){
        this.name = name
        this.availableMoney = availableMoney
        this.boughtItems = []
    }

    buy(item){
        if(this.availableMoney >= item.price){
            this.boughtItems.push(item)
            this.availableMoney -= item.price
        } else {
            console.log("cannot afford:", item.name)
        }
    }

    info(){
        console.log(`bought ${this.boughtItems.length} items, availableMoney=${this.availableMoney}`)
        this.boughtItems.forEach((item) => item.info())
    }
}

module.exports = Person