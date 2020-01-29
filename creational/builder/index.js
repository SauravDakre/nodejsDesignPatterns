const MyDateBuilder = require('./dateBuilder')

const newYear = new MyDateBuilder('newYear')
    .day(1)
    .month(1)
    .year(2020)
    .build()

const christmas = new MyDateBuilder('christmas')
    .day(25)
    .month(12)
    .year(2020)
    .build()

console.log(newYear)
console.log(christmas)