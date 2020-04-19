const Light = require('./Light')
const commands = require('./Commands')
const Switch = require('./Switch')


const l = new Light()  
const onc = new commands.TurnOnCommand(l)
const offc = new commands.TurnOffCommand(l)
const s = new Switch()

s.trackAndExecute(onc)
console.log(l.state())
s.trackAndExecute(offc)
console.log(l.state())
console.log(s.history)