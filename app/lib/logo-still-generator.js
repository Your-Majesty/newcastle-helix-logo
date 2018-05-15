module.exports = (() => {

  const sharp = require('sharp')
  const imageCapture = require('./image-capture')
  const controller = {}
  const urlOptions = ['white', 'black', 'color']

  controller.captureCurrentState = async () => {
    for (option of urlOptions) {
      var logoCapture = await imageCapture.capture(`http://localhost:3000/?${option}`, 3100, 2000 )

      sharp(logoCapture)
      .rotate()
      .sharpen()
      .resize(500)
      .toFile(`${__dirname}/../tmp/${Date.now()}-sharpie_helix.png`, (err, info) => 
        console.log(info)
      );
      

      
      //mojyugiyg g
      // extract, resize, get new small image path

      // load text image and overlayWith the new image made


      // Extract Long image,
      // Extract a Wide image
    }
  }

  return controller

})()