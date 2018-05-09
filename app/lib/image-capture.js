module.exports = (() => {

  const puppeteer = require('puppeteer');

  const controller = {}


  controller.capture = async (url, width, height) => {
    console.log("capturing...")
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

    console.log("making page...")
    const page = await browser.newPage();

    let path =  `${__dirname}/../tmp/${Date.now()}_helix.png`
  

    await page.setViewport({
      width: width,
      height: height
    })
    await page.goto(url);
  
    await page.screenshot({path: path});

    await browser.close();

    return path

  }

  return controller

})()