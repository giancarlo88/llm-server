module.exports = (connection) => {
  const mongoose = require('mongoose')
  const LocationSchema = new mongoose.Schema({
    index: String,
    'x-cord': Number,
    'y-cord': Number,
    mapkey: Number,
    defaultAnimation: Number,
    title: String,
    info: String
  })
  const connectionModel = connection.model('Location', LocationSchema, process.env.COLLECTION_NAME)

  LocationSchema.pre('save', function (next) {
    if (this.isNew) {
      connectionModel.count().then((res) => {
        console.log(res)
        this.index = res
        next()
      })
    } else {
      next()
    }
  })

  return connectionModel
}
