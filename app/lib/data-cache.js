module.exports = (() => {
  
  const SensorState = require('../models/sensor-state')

  const controller = {}

  controller.cache = {}

  controller.update = async () => {
  // Here just get latest 96 - 24 hours
    
  // Here also I will filter the min and max value
    var data = await SensorState.find({}).sort({
      timestamp: 'asc'}).limit(96)

    controller.cache = data
  }

  return controller

})()