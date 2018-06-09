const checkAuthentication = (req, res, next) =>
  new Promise((resolve, reject) => {
    if (req.session && req.session.userId) {
      return resolve(req)
    } else {
      return reject('error')
    }
  })

module.exports = checkAuthentication
