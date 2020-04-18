class Middleware {
    constructor(f){
        this.f = f
    }

    execute(data){
        return this.f(data)
    }

    linkNext(m){
        this.next = m
    }
}

module.exports = Middleware