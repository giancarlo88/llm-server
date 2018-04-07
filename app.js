const express = require('express')
const app = express()

const controllers = require('./controllers')

app.use(controllers)

module.exports = app
