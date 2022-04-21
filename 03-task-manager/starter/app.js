const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandler = require("./errors/custom-error");
const port = process.env.PORT || 5000;

// middleware
app.use(express.static("./public"));
// 03-task-manager\starter\public
app.use(express.json());
// app.use(notFound)
// routes
app.get("/hello", (req, res) => { 
  res.send("Task Manager app");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    // await connectDB()
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(
        `Connected to MangoDB and then connected to Server on port ${port}...`
      )
    );
  } catch (err) {
    console.log(err);
  }
};

start();
