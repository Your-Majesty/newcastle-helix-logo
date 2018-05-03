module.exports = (() => {

  const db = require('../lib/db')

  const SensorState = db.model('sensor-state', new db.Schema({
    timestamp: {
      type: Date
    },
    sensors: {
      type: Object
    }
  }, {
    timestamps: true
  }))

  return SensorState

})()
