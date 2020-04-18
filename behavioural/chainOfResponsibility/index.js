const Middleware = require('./Middleware')

const user1 = {
    name: 'abc',
    password: 'xyz',
    auth: 'credentials' 
}
const user2 = {
    token: 'token',
    auth: 'oauth'
}
const user3 = {
}

const cred = new Middleware(function(data){
    console.log("inside credentials middleware...")
    if(data.auth === 'credentials'){
        if(data.name==='abc' && data.password==='xyz'){
            data.valid = true
            return data
        }
        throw new Error('auth error')
    }else{
        throw new Error('auth not supported')
    }
})

const oauth = new Middleware(function(data){
    console.log("inside oauth middleware...")
    if(data.auth === 'oauth'){
        if(data.token==='token'){
            data.valid = true
            return data
        }
        throw new Error('auth error')
    }else{
        return this.next.execute(data)
    }
})
oauth.linkNext(cred)

const middleware = new Middleware(function(data){
    console.log('middleware is processing:', JSON.stringify(data))
    return this.next.execute(data)
})
middleware.linkNext(oauth)

let res = middleware.execute(user1)
console.log(JSON.stringify(res),"\n")

res = middleware.execute(user2)
console.log(JSON.stringify(res),"\n")

res = middleware.execute(user3)