const Txt_Proxy = require('./Txt_Proxy')
const path = require('path')

const f = new Txt_Proxy(require('fs'))

f.readFile(path.join(__dirname, 'q.txt'), 'UTF-8', function(err, data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})