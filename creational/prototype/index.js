const wishListPrototype = require('./wishlistPrototype')

const w1 = wishListPrototype.clone()
w1.name = 'student1'
w1.addItem('book')

const w2 = wishListPrototype.clone()
w2.name = 'student2'
w2.addItem('diary')



console.log(`name=${w1.name} :: list=${w1.list}`)
console.log(`name=${w2.name} :: list=${w2.list}`)
