class Txt_Proxy {
    constructor(fs){
        this.fs = fs
    }

    readFile(path, format, callback){
        if(!path.match(/.txt$/)){
            return callback(new Error('only .txt file is allowed'))
        }

        this.fs.readFile(path, format, function(err, data){
            if(err){
                return callback(err)
            }

            return callback(null, data)
        })
    }
}

module.exports = Txt_Proxy
