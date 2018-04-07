const express = require('express')
const router = express.Router()

const locations = require('./locations')

router.use('/locations', locations)

router.get('*', (req, res) => {
  res.status(404).send('Not found')
})

module.exports = router
