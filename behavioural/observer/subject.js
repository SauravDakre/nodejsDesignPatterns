class EventSource{
    constructor(){
        this.subscribers = []
    }

    subscribe(subscriber){
        this.subscribers.push(subscriber)
    }

    notify(message){
        this.subscribers.forEach(function(subscriber){
            subscriber.notify(message)
        })
    }
}

module.exports = EventSource