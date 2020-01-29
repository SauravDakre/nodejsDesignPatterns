const MyDate = require('./date')

class MyDateBuilder{
    constructor(name){
        this.name = name
    }

    day(d){
        this.day = d
        return this
    }

    month(m){
        this.month = m
        return this
    }

    year(y){
        this.year = y
        return this
    }

    build(){
        return new MyDate(this)
    }
}

module.exports = MyDateBuilder