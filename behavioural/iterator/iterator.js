class Iterator {
    constructor(list = []) {
        this.list = list
        this.index = 0
    }

    next() {
        if(this.hasNext()){
            this.index++
        }
        return this.list[this.index]
    }

    prev() {
        if(this.index !== 0){
            this.index--
        }
        return this.list[this.index]
    }

    first() {
        this.index = 0
        const [first] = this.list
        return first
    }

    last() {
        this.index = this.list.length-1
        const [first] = [...this.list].reverse()
        return first
    }

    hasNext() {
        return this.index + 1 < this.list.length
    }

    current() {
        return this.list[this.index]
    }
}

module.exports = Iterator