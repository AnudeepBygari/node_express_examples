const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {    type: String  },
  description: { type: String},
  author: { type: String },
  price: { type: Number },
})
// console.log('BookModel..............................................',BookSchema);
module.exports = mongoose.model('Book',BookSchema)
// module.exports = mongoose.model('Task', TaskSchema)
