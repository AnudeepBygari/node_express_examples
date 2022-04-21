const mongoose = require('mongoose');
// const connectionString ='mongodb+srv://AnudeepBygari:Learndaily01*@nodeexpressprojects.ec0n1.mongodb.net/10-e-commerce-api?retryWrites=true&w=majority'
const connectDB = (url) => {
  // return mongoose.connect(connectionString);
  return mongoose.connect(url);
};

module.exports = connectDB;
