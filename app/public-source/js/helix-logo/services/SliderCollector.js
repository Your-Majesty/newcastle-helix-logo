const SliderCollector = (() => {
  const controller = {}
  
  controller.currentIndex = 0
  controller.currentSensor = null

  controller.sensors = {
    energy: {
      value:0,
      percentage: 0
    }, 
    humidity: {
      value:0,
      percentage: 0
    }, 
    temperature: {
      value:0,
      percentage: 0
    },
    vehicleSpeed:{
      value:0,
      percentage: 0
    },
    wind: {
      value:0,
      percentage: 0
    },
    vehicleCount: {
      value:0,
      percentage: 0
    }
  }

  controller.getCurrentSensor = () => {

    return parseFloat(controller.sensors[`${controller.currentSensor}`].value).toFixed( 2 )

  }

  controller.getCurrentValues = (dataPointIndex) => {
    let sensorValue = DataCollector.collection[dataPointIndex]
    let sensors = controller.sensors
    for (let property of DataCollector.limits) {
      sensors[`${property.name}`].value = sensorValue[`${property.name}`]
      sensors[`${property.name}`].percentage = (sensorValue[`${property.name}`] - property.min) / (property.max - property.min)
    }
  }

  controller.updateValues = (percentage) => {
    let sensors = controller.sensors
    DataCollector.limits.forEach(function( sensor ) {
      if (sensor.name == controller.currentSensor) {
        sensors[`${sensor.name}`].value = ((sensor.max - sensor.min) * percentage) + sensor.min
        sensors[`${sensor.name}`].percentage = percentage

        controller.event = new CustomEvent('uiSliderUpdated', {bubbles: true})
        window.dispatchEvent(controller.event)
      }
    })
  }
  
  return controller

})()
