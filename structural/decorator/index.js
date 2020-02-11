const Person = require('./person')
const {Vanilla, CherryTopping, ChocolateSyrup} = require('./icecream')

const querty = new Person('querty', 150)

const icecream = new Vanilla()
const cherryIcecream = new CherryTopping(icecream)
const syrupIcecream = new ChocolateSyrup(icecream)

querty.buy(icecream)
querty.buy(cherryIcecream)
querty.buy(syrupIcecream)
querty.info()

