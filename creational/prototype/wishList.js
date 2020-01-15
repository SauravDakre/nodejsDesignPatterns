class WishList{
    constructor(name){
        this._name = name
        this._items = []
    }

    set name(name){
        this._name = name
    }

    get name(){
        return this._name
    }

    get list(){
        return this._items.join(", ")
    }

    addItem(item){
        this._items.push(item)
    }

    clone(){
        const cloned = Object.create(Object.getPrototypeOf(this))
        cloned._name = this._name
        cloned._items = [...this._items]
        return cloned
    }
}

module.exports = WishList
