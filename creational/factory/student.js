const User = require('./user')

class Student extends User{
    constructor(name, age, divison){
        super(name, age)
        this.divison = divison
    }
}

module.exports = Student;