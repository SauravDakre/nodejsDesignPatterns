const Student = require('./student')
const Teacher = require('./teacher')

function userFactory(name, age, type, extraParams){
    if(type === 'student'){
        return new Student(name, age, extraParams.divison)
    } else {
        return new Teacher(name, age, extraParams.ratings)
    }
}

module.exports = userFactory;