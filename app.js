const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', `${process.env.HOST}`)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
}

const app = express()
app.use(bodyParser.json())
app.use(allowCrossDomain)
app.use(session({
  secret: 'Hello', 
  resave: true, 
  saveUninitialized: false
}))

const controllers = require('./controllers')

app.use(controllers)

module.exports = app
