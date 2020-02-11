class cartGroup {
    constructor(name, items) {
        this.name = name
        this.items = items
    }

    info(){
        return this.items.reduce((pv, cv)=>{return pv+cv.info()+'\n'}, `--------${this.name}--------\n`)
    }

    price(){
        return this.items.reduce((pv, cv)=>{return pv+cv.price()}, 0)
    }
}

module.exports = cartGroup