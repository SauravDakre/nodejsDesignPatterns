const fs = require('fs')
const path = require('path')

class strategy {
    static toFile(message){
        const fileName = path.join(__dirname, 'logs.txt');
        const logMsg = `${new Date()} : ${message}\n`
        fs.appendFile(fileName, logMsg, f => f)
    }

    static toConsole(message){
        const logMsg = `${new Date()} : ${message}`
        console.log(logMsg)
    }
}

module.exports = strategy