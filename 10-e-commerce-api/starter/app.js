require("dotenv").config();
// express
const express = require("express");
const app = express();

//rest of packages
const morgan = require('morgan')

// database
const connectDB = require("./db/connect");

// routers
const authRoutes = require('../starter/routes/authRoutes')


//middleware
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
app.use(express.json)

//
app.get("/", (req, res) => {
    res.send('10-e-commerce-api')
    console.log('Simple get request.');
});

app.use('/api/v1/auth',authRoutes)
app.use(morgan('tiny'))
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
// app.set('port', (process.env.PORT || 3000));
const port = process.env.PORT || 3000;
// const port =6000
const start = async () => {
  try {
    // await connectDB();  
    await connectDB(process.env.MONGO_URI);  
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    // app.listen(app.get('port'), function() {
    //     console.log('Server started on port '+app.get('port'));
    // });
  } catch (error) {
    console.log(error);
  }
};

start();
