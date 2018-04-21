const express = require('express')
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

const controllers = require('./controllers')

app.use(controllers)

module.exports = app
