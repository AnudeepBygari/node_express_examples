const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("../example/db/connection");
const bookRoute = require("../example/routes/bookRoutes")

app.use(express.json());
app.use('/api/v1/books' , bookRoute)

const start = async () => {
  try {
    if (await connectDB(process.env.MONGO_URL))
      console.log("Connected to database");
    app.listen(
      process.env.PORT,
      console.log(`Server port is running on ${process.env.PORT} ... `)
    );
  } catch (error) {
    console.log(error);
  }
};
start();