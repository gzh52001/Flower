// 可以采用结构的方法
const { MongoClient } = require('mongodb');
// const MongoClient = mongodb.MongoClient;

let url = "mongodb://localhost:27017"
let dbName = "flowers"
//连接mongoDB
module.exports = ({collectionName, success, error}) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            error(err)
        } else {
            let db = client.db(dbName)
            let loc = db.collection(collectionName)
            success(loc,client)
        }
    })
}
