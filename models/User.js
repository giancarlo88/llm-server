const bcrypt = require('bcrypt')

module.exports = connection => {
  const mongoose = require('mongoose')
  const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    passwordConfirm: {
      type: String,
      required: true
    }
  })

  UserSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })

  const userModel = connection.model('User', UserSchema, 'users')
  return userModel
}
