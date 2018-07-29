const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const corsConfig = { 
  origin: process.env.HOST
}

const app = express()
app.options('*', cors(corsConfig))
app.use(morgan('dev'))
app.use(cors(corsConfig))
app.use(bodyParser.json())
app.use(session({
  secret: 'Hello', 
  resave: true, 
  saveUninitialized: false
}))

const controllers = require('./controllers')

app.use(controllers)

module.exports = app
