const SunCalculator = (() => {
  const controller = {}

  controller.calculateDay = (timestamp) => {

    var times = SunCalc.getTimes(new Date(timestamp.split('T')[0]), 54.9783, 1.6178);

    let hours = timestamp.split('T')[1].split(':')[0]
    let minutes = timestamp.split('T')[1].split(':')[1]

    console.log('CURRENT')
    console.log(hours)
    console.log(minutes)

    
    console.log('SUNSET AND SUNRISE')

    let sunset = times.sunset
    console.log(sunset.toString().split(':')[0].split(' ')[1])

    console.log(times.sunrise)

    // console.log('Something was done.')
  }

  return controller
})()
