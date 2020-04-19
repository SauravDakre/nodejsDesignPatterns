// commands

class TurnOnCommand {
    constructor(light) {
        this.light = light
    }

    name() {
        return 'turnOnLight'
    }

    execute() {
        this.light.turnOn()
    }
}

class TurnOffCommand {
    constructor(light) {
        this.light = light
    }

    name() {
        return 'turnOffLight'
    }

    execute() {
        this.light.turnOff()
    }
}
module.exports =  {
    TurnOnCommand,
    TurnOffCommand 
}  

