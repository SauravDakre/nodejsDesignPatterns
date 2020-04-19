// Receiver function

let state = "off"
class Light {
    constructor() {
        state = "off"
    }

    turnOn() {
        state = "on"
    }

    turnOff() {
        state = "off"
    }

    state() {
        return state
    }
}

module.exports =Light
