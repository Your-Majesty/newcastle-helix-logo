module.exports = (() => {

  var mongoose = require('mongoose')

  mongoose.connect(process.env.MONGO)
  mongoose.Promise = Promise

  return mongoose

})()
