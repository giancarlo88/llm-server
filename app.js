const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const controllers = require('./controllers')

app.use(controllers)

module.exports = app
