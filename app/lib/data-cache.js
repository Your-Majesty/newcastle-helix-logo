module.exports = (() => {
  
  const SensorState = require('../models/sensor-state')
  const controller = {}

  const sensorIds = ['humidity', 'temperature', 'energy', 'wind', 'vehicleSpeed']
  let sensors = []
  
  let sensorLimits = sensorIds.map(function (a, i) {
    return { name: sensorIds[i], data: [], min: 0, max: 0 }
  })

  controller.cache = {}
  controller.limits = {}

  controller.update = async () => {

    var data = await SensorState.find().sort({
    timestamp: 'desc'}).limit(380)
    
    // Here I change the names 
    data.forEach(function (dataPoint, index) {
      sensors.push({
        timestamp: dataPoint.timestamp,
        humidity: dataPoint.sensors['Humidity'],
        temperature: dataPoint.sensors['Temperature'],
        energy: dataPoint.sensors['Energy consumption at Newcastle Helix'],
        wind: dataPoint.sensors['Average wind speed'],
        vehicleSpeed: dataPoint.sensors['Average vehicle speed']
      })      
    })
    
    // Here I fill the limits
    sensors.forEach(function (a) {
      sensorIds.forEach(function (k, i) {
        sensorLimits[i].data.push(a[k])
      });
    });

    sensorLimits.forEach(function (m) {
      m.min = Math.min(...m.data)
      m.max = Math.max(...m.data)
      delete m['data']
    })
    
    controller.cache = sensors
    controller.limits = sensorLimits
  }

  return controller

})()