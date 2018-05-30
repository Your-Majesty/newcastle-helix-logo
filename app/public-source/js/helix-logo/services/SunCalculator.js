const SunCalculator = (() => {
  const controller = {}
  controller.darkTheme = false

  controller.calculateDay = (timestamp) => {

    let times = SunCalc.getTimes(new Date(timestamp.split('T')[0]), 54.9783, 1.6178);
    let hours = timestamp.split('T')[1].split(':')[0]
    let minutes = timestamp.split('T')[1].split(':')[1]

    let sunset = times.sunset
    let sunrise = times.sunrise
    
    if (parseInt(hours) >= sunset.getHours() || (parseInt(hours) <= sunrise.getHours())) {
      if (parseInt(minutes) >= sunset.getMinutes() || parseInt(minutes) <= sunrise.getMinutes()) {
        controller.darkTheme = true
      } else {
        controller.darkTheme = false
      }
     } else {
      controller.darkTheme = false
    }

    controller.event = new CustomEvent('sunCalculator', {bubbles: true, detail: controller.darkTheme})
    window.dispatchEvent( controller.event)
  }

  return controller
  
})()
