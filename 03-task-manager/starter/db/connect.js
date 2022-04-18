const mongoose = require('mongoose')
// const connectionString = 'mongodb+srv://AnudeepBygari:Learndaily01*@nodeexpressprojects.ec0n1.mongodb.net/03-task-manager?retryWrites=true&w=majority'
const connectDB = (url) => {
  return mongoose.connect(url)
  // return mongoose.connect(url)

  // })
}

module.exports = connectDB
