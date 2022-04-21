const express = require("express");
const app = express();
const bookRoutes = require("./routes/booksRoute");
const connectDB = require("./db/MongoDB_Commection");
require("dotenv").config();
const bookModel = require("./model/bookModel");
const port = 8000;

// app.use(express.static('./public'));
app.use(express.json())

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/books',bookRoutes)

// app.use('/api/v1/books', bookRoutes);
const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    // if(await connectDB(process.env.MONGO_URI)){

    if (await connectDB()) {
      // console.log('bookModel.BookSchema app.js',bookModel.BookSchema);
      // console.log('process.env.PORT',process.env.MONGO_URI);
      // console.log('process.env.PORT',process.env.PORT);
      // console.log(await connectDB());
      // console.log(await connectDB());
      app.listen(
        process.env.PORT,
        console.log(`Servr is running on port ${port}...`)
      );
    }
  } catch (error) {
    console.log("error");
    console.log("unable to connect to database");
  }
};

start();
