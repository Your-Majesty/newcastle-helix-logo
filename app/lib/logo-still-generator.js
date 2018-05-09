module.exports = (() => {

  const imageCapture = require('./image-capture')
  const controller = {}

  controller.captureCurrentState = async () => {
    var logoCapture = await imageCapture.capture('http://localhost:3000/', 1000, 1000 )
  

  }

  return controller

})()