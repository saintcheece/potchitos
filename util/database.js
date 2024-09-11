const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://reecesantos33:zjZ2GFWar@cluster0.k01vp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
        .then(result=>{
            console.log('Connected');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = mongoConnect;