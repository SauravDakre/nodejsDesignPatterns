class Vanilla{
    constructor(){
        this.price = 50
        this.name = 'vanilla'
    }

    info(){
        console.log(`- Vanilla costs: ${this.price}`)
    }
}

class CherryTopping{
    constructor(baseItem){
        this.price = 5 + baseItem.price
        this.name = baseItem.name + ' with cherryTopping'
    }

    info(){
        console.log(`- CherryTopping costs: ${this.price}`)
    }
}

class ChocolateSyrup{
    constructor(baseItem){
        this.price = 10 + baseItem.price
        this.name = baseItem.name + ' with chocolateSyrup'
    }

    info(){
        console.log(`- ChocolateSyrup costs: ${this.price}`)
    }
}

module.exports = {
    Vanilla,
    CherryTopping,
    ChocolateSyrup
}