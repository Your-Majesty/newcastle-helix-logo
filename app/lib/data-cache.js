module.exports = (() => {
  
  const SensorState = require('../models/sensor-state')
  const controller = {}

  const sensorsNames = ['Humidity', 'Temperature', 'Energy consumption at Newcastle Helix', 'Average wind speed', 'Average vehicle speed']
  const sensorsIds = ['humidity', 'temperature', 'energy', 'wind', 'vehicle-speed']
  let sensors = []

  let sensorLimits = sensorsNames.map(function (a, i) {
    return { name: sensorsIds[i], data: [], min: 0, max: 0 }
  })

  controller.cache = {}
  controller.limits = {}

  controller.update = async () => {

    var data = await SensorState.find().sort({
    timestamp: 'asc'}).limit(10)

    data.forEach(function (dataPoint) {
      sensors.push(dataPoint.sensors)
    })
    
    sensors.forEach(function (a) {
      sensorsNames.forEach(function (k, i) {
        sensorLimits[i].data.push(a[k])
      });
    });

    sensorLimits.forEach(function (m) {
      m.min = Math.min(...m.data)
      m.max = Math.max(...m.data)
      delete m['data']
    })
 
    controller.cache = data
    controller.limits = sensorLimits
  }

  return controller

})()