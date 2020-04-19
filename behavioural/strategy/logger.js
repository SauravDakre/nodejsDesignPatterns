const strategy = require('./strategy')

class logger {
    constructor(algorithm = 'toConsole') {
        this.algorithm = algorithm
    }

    log(message) {
        strategy[this.algorithm](message)
    }

    changeStrategy(algorithm){
        this.algorithm = algorithm
    }
}

module.exports = new logger()