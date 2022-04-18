const express = require('express')
const app = express()
const port = 5000
const tasks = require('./starter/routes/tasks.js')
const connectDB = require('./starter/db/connect.js')
// require('dotenv')

// middleware
app.use(express.json())
// routes
app.get('/hello', (req,res) => {
    res.send('Task Manager app')
})

app.use('/api/v1/tasks',tasks)

const start = async () => {
    try{
        await connectDB()
        // await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Connected to MongoDB and then connected to Server on port ${port}...`))
    }catch(err){
        console.log(err);
    }
}


start()
