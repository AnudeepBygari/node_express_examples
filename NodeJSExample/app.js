const express = require("express");
require('dotenv').config()
const app = express();
const booksRoutes = require('../NodeJSExample/routes/booksRoute')
const connectDB = require('../NodeJSExample/db/MongoDB_Commection')
app.use(express.json())
// const port = 9000;
app.use('/api/v1/books',booksRoutes)  

// app.get('/hello',(req,res) => {
// res.send('web page display ')
// console.log('console page display ');
// })
// app.listen(port, console.log(`Server started on port ${port} ...`));

const start= async ()=> {
    try {
        // console.log('process.env.MONGO_URI',process.env.MONGO_URL);
        // console.log('process.env.PORT',process.env.PORT);
        // if(await connectDB()){
        if(await connectDB(process.env.MONGO_URL)){
            // console.log('Inside process.env.MONGO_URI',process.env.MONGO_URL);
            // console.log('INside process.env.PORT',process.env.PORT);
            // console.log('INside Connected to MongoDB');
            // app.listen(port, console.log(`Server started on port ${port} ...`));
            app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT} ...`));
        }
    } catch (error) {
        console.log(error);
    }
    
}
start()

// express().listen(port, console.log(`Server started on port ${port} ...`));
