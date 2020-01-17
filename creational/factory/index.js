const userFactory = require('./userFactory')

const student1 = userFactory('student1', 15, 'student', {division: 5})
const teacher1 = userFactory('teacher1', 35, 'teacher', {ratings: 3})

console.log(student1.info())
console.log(teacher1)
teacher1.addRatings(1)
console.log(teacher1)