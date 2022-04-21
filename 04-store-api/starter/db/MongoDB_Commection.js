const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://AnudeepBygari:Learndaily01*@nodeexpressprojects.ec0n1.mongodb.net/04-store-api?retryWrites=true&w=majority'
console.log('INside connectMongoosDB');
const connectMongoosDB = (url) => {
return mongoose.connect(connectionString)
// return mongoose.connect(url)
}
module.exports = connectMongoosDB