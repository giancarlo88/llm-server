const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('This will send the locations.')
})

module.exports = router
