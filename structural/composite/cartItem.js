class cartItem{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }

    info(){
        return `${this.name} : ${this.cost}`
    }

    price(){
        return this.cost
    }
}

module.exports = cartItem