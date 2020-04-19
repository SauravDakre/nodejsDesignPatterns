class Observer{
    constructor(name){
        this.name = name
    }

    notify(message){
        console.log(`${this.name}: message received from observer: ${message}`)
    }
}

module.exports = Observer