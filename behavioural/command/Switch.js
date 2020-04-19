// invoker function

class Switch {
    constructor() {
        this.history = []
    }

    trackAndExecute(command) {
        this.history.push(command.name())
        command.execute()
    }
}

module.exports = Switch

