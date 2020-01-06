class logger {
    constructor() {
        this.logs = []
    }

    log(msg) {
        const logMsg = `${new Date()} : ${msg}`
        this.logs.push(logMsg)
        console.log(logMsg)
    }
}

module.exports = new logger()