const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const connection = mongoose.createConnection(`${process.env.MONGO_URL}`)

const User = require('../models/User')(connection)

router.post('/', (req, res) => {
  const { username, password } = req.body
  return User.authenticate(username, password)
    .then(({ _id: id }) => {
      req.session.userId = id
      req.session.save()
      return res.status(200).send({
        authenticated: true,
        id
      })
    })
    .catch(err => res.status(401).send(err))
})

router.delete('/', (req, res) => {
  if (req.session) {
    req.session.destroy((err, next) => {
      return err ? next(err) : res.status(200).send('Logged out successfully')
    })
  }
})

module.exports = router
