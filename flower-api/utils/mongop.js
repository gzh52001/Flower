const {mongoClient} = require('mongodb')

let mongoOpen = ({dbName='flowers',collectionName,url='mongodb://127.0.0.1:27017'})=>{
    return new Promise((resolve,reject)=>{
        mongoClient.connect(url,({ useUnifiedTopology: true }),(err,client) =>{
            if(err){
                reject(err)
            }else{
                let db = client.db(dbName)
                let loc = db.collection(collectionName)
                resolve(loc,client)
            }
        })
    })
}

module.exports = {
    mongoOpen
}

