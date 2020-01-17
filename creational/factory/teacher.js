const User = require('./user')

class Teacher extends User{
    constructor(name, age, ratings){
        super(name, age)
        this.ratings = ratings
    }

    addRatings(ratings){
        this.ratings += ratings
    }
}

module.exports = Teacher;