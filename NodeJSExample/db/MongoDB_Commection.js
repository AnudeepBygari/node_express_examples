const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://AnudeepBygari:Learndaily01*@nodeexpressprojects.ec0n1.mongodb.net/NodeJSExample?retryWrites=true&w=majority'
const connectMongoosDB = (url) => {
// return mongoose.connect(connectionString)
return mongoose.connect(url)
}
module.exports = connectMongoosDB