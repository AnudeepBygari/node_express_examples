
const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors/custom-error')

const login = async (req, res) => {

    const { username, password } = req.body
    if (!username || !password) {
        // console.log('Please provide email and password')
        throw new BadRequestError('Please provide email and password',400)
      }
    
};

const dashboard = async (req, res) => {
    const luckyNumber = await  Math.floor(Math.random() * 100)
  
    res.status(200).json({
      msg: `Hello, Dvanshi`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
  }

  module.exports = {
    login,
    dashboard,
  }