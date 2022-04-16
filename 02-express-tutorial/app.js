const express = require('express')
const app = express()
let { people } = require('./../data')
// const ss = require('./02-express-tutorial/methods-public')

// static assets
app.use(express.static('./02-express-tutorial/methods-public'))
// 02-express-tutorial\methods-public

app.get('/api/people', (req, res) => {
    console.log('Success /api/people');
    res.status(200).json({ success: true, data: people })
  })

  app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
      return res.status(200).send(`Welcome ${name}`)
    }
  
    res.status(401).send('Please Provide Credentials')
  })

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
