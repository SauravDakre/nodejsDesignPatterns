const Iterator = require('./iterator')
require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const i = new Iterator(["1","2","3","4","5","6","7"])

process.stdin.on('keypress', function (str, key) {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)

    switch (key.name) {
        case 'right':
            process.stdout.write(i.next())
            break;
        case 'left':
            process.stdout.write(i.prev())
            break;
        case 'up':
            process.stdout.write(i.first())
            break;
        case 'down':
            process.stdout.write(i.last())
            break;
        case 'c':
            if (key.ctrl) {
                process.exit()
            }
    }
})