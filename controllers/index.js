const express = require('express')
const router = express.Router()

const locations = require('./locations')
const users = require('./users')

router.use('/locations', locations)

router.use('/users', users)

router.get('*', (req, res) => {
  res.status(404).send('Not found')
})

module.exports = router
