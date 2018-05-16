module.exports = (() => {

  const sharp = require('sharp')
  const imageCapture = require('./image-capture')
  const controller = {}
  const urlOptions = ['white', 'black', 'color']

  const screenShotGuide = [  
    {
      name: 'menu',
      width: 1500,
      height: 1200,
    },
    {
      name: 'banner',
      width: 2048,
      height: 400,

    },
    {
      name: 'logo',
      width: 2048,
      height: 400,
      type: 'logo'
    }
  ]

  controller.captureCurrentState = async () => {
    for (option of urlOptions) {
      var logoCapture = await imageCapture.capture(`http://localhost:3000/?${option}`, 3360, 2100 )
      for (capture of screenShotGuide) {
        if (capture.type === 'logo') {
          sharp(logoCapture)
          .resize(capture.width, capture.height)
          .crop(sharp.strategy.entropy)
          .extract({left: 0, top: 0, width: capture.width / 4, height: capture.height })
          .sharpen(2.0)
          .toFile(`${__dirname}/../tmp/${Date.now()}-${capture.name}_helix.png`, (err, info) => 
            console.log(info)
          )
          
        } else {
          sharp(logoCapture)
          .resize(capture.width, capture.height)
          .crop(sharp.strategy.entropy)
          .sharpen(2.0)
          .toFile(`${__dirname}/../tmp/${Date.now()}-${capture.name}_helix.png`, (err, info) => 
            console.log(info)
          )
        }
      }
    }
  }

  return controller

})()