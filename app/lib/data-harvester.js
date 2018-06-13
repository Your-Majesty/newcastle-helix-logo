module.exports = (() => {

  const fetch = require('node-fetch')

  const SensorState = require('../models/sensor-state')

  const controller = {}
  const selectedMinutes = ['00', '15', '30', '45']

  controller.harvest = async () => {
    console.log('DataHarvester::harvest()', process.env.HELIX_DATA_ENDPOINT)
    var data = await fetch(process.env.HELIX_DATA_ENDPOINT)
    var dataJson = await data.json()
    
    for (timePoint of dataJson.timeseries) {
      let hour = timePoint.timestamp.split('T')[1]
      let minutes = hour.split(':')[1]
      for (var i = 0; i < selectedMinutes.length; i++) {
        if (minutes.indexOf(selectedMinutes[i]) >= 0) {
          await SensorState.update({
            timestamp: timePoint.timestamp
          }, {
            sensors: timePoint.variables
          }, {
            upsert: true
          })
        }
      }
    }
  }

  return controller

})()
