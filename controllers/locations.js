const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const connection = mongoose.createConnection(`${process.env.MONGO_URL}`)

const Location = require('../models/Location')(connection)

router.get('/', (req, res) => {
  Location.find({})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => res.status(422).send('There was an error', err))
})

router.get('/:index', (req, res) => {
  const index = req.params.index
  Location.find({ index })
    .then((data) => {
      if (!data.length) return res.status(404).send('No location with that index.')
      return res.send(data)
    })
    .catch((err) => res.status(404).send(err))
})

router.post('/', (req, res) => {
  const { xCord, yCord, title, info } = req.body
  Location.create({
    'x-cord': xCord,
    'y-cord': yCord,
    title,
    info
  })
    .then((data) => {
      res.send({
        msg: 'Location successfully added to database',
        index: data.index
      })
    })
    .catch((err) => res.status(422).send('Error uploading to database', err))
})

module.exports = router
