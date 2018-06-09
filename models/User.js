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

  UserSchema.statics.authenticate = function(username, password){
    return new Promise((resolve, reject) => {
      const errMessage = 'Invalid user credentials'
      return this.model('User').findOne({ username }).exec((err, user) => {
        console.log(user)
        if (err) return reject(errMessage)
        else if (!user) {
          return reject('Invalid user credentials')
        }
        return bcrypt.compare(password, user.password, (err, result) => {
          return result ? resolve(user) : reject(errMessage)
        })
      })
    })
  }

  const userModel = connection.model('User', UserSchema, 'users')
  return userModel
}
