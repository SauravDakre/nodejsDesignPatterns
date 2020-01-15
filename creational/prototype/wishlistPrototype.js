const WishList = require('./wishList')

const wl = new WishList()
wl.name = 'generic'
wl.addItem('pencil')
wl.addItem('eraser')

module.exports = wl
