module.exports = (() => {

  const sharp = require('sharp')
  const imageCapture = require('./image-capture')
  const controller = {}
  const urlOptions = ['white', 'black', 'color']
  const fs = require('fs-extra')

  const screenShotGuide = [  
    {
      name: 'menu',
      width: 900,
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
      height: 600,
      type: 'logo',
      overlay: `${__dirname}/../static/logo-black-template.png`
    }
  ]

  controller.captureCurrentState = async () => {
    await fs.ensureDir(`${__dirname}/../public/latest/`)
    await fs.ensureDir(`${__dirname}/../tmp/`)

    for (option of urlOptions) {
      
      var logoCapture = await imageCapture.capture(`http://localhost:3000/?${option}`, 3360, 2100 )
      
      for (capture of screenShotGuide) {
        if (capture.type === 'logo') {
        let colorBackground = option !== 'black' ? `${__dirname}/../static/logo-white-template.png` : `${__dirname}/../static/logo-black-template.png`
        
        let logoElement = await sharp(logoCapture)
          .resize(capture.width, capture.height)
          .crop(sharp.strategy.entropy)
          .extract({left: 0, top: 0, width: capture.width / 4, height: capture.height })
          .toBuffer()
          
          await sharp(logoElement)
            .resize(82, 82)
            .sharpen(2.0)
            .toFile(`${__dirname}/../tmp/${capture.name}-86-86.png`)
          await sharp(colorBackground)
            .overlayWith(`${__dirname}/../tmp/${capture.name}-86-86.png`, { left: 170, top: 0 } )
            .toFile(`${__dirname}/../public/latest/${capture.name}-${option}.png`)

          if (option == 'color') {
            await sharp(logoElement)
              .resize(128, 128)
              .sharpen(2.0)
              .toFile(`${__dirname}/../public/latest/favicon.png`)
          }
        } else {
          sharp(logoCapture)
          .resize(capture.width, capture.height)
          .crop(sharp.strategy.entropy)
          .toFile(`${__dirname}/../public/latest/${capture.name}-${option}.jpg`)
        }
      }
    }
    await fs.emptyDir(`${__dirname}/../tmp/`)
  }

  return controller

})()