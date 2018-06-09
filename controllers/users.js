const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const connection = mongoose.createConnection(`${process.env.MONGO_URL}`)

const User = require('../models/User')(connection)

router.post('/', (req, res) => {
  const { email, username, password, passwordConfirm } = req.body
  if ((email, username, password, passwordConfirm)) {
    const userData = { email, username, password, passwordConfirm }
    return User.create(userData)
      .then(data => res.send(data))
      .catch(err => res.status(422).send(err))
  }
  return res.status(422).send('Incomplete registration data.')
})

module.exports = router
