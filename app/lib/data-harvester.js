module.exports = (() => {

  const fetch = require('node-fetch')

  const SensorState = require('../models/sensor-state')

  const controller = {}

  controller.harvest = async () => {
    console.log('DataHarvester::harvest()', process.env.HELIX_DATA_ENDPOINT)
    var data = await fetch(process.env.HELIX_DATA_ENDPOINT)
    var dataJson = await data.json()
    // Filter the data

    // Get the 15 min interval

    for (timePoint of dataJson.timeseries) {
      await SensorState.update({
        timestamp: timePoint.timestamp
      }, {
        sensors: timePoint.variables
      }, {
        upsert: true
      })
    }
  }

  return controller

})()
