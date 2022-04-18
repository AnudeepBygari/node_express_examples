const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())
// routes
app.get('/hello', (req,res) => {
    res.send('Task Manager app')
})

app.use('/api/v1/tasks',tasks)

const start = async () => {
    try{
        // await connectDB()
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Connected to MangoDB and then connected to Server on port ${port}...`))
    }catch(err){
        console.log(err);
    }
}


start()
