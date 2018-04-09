module.exports = (() => {

  var mongoose = require('mongoose')

  mongoose.connect('mongodb://db/helix-logo')
  mongoose.Promise = Promise

  return mongoose

})()
