const SliderCollector = (() => {
  const controller = {}
  
  controller.currentIndex = 0
  controller.currentSensor = null

  controller.sensors = {
    energy: {
      id: 'energy',
      value:0,
      percentage: 0
    }, 
    humidity: {
      id: 'humidity',
      value:0,
      percentage: 0
    }, 
    temperature: {
      id: 'temperature',
      value:0,
      percentage: 0
    },
    vehicleSpeed:{
      id: 'vehicleSpeed',
      value:0,
      percentage: 0
    },
    wind: {
      id: 'wind',
      value:0,
      percentage: 0
    },
    vehicleCount: {
      id:'vehicleCount',
      value:0,
      percentage: 0
    }
  }

  controller.getCurrentSensor = () => {
    return {name: controller.currentSensor, value:parseFloat(controller.sensors[`${controller.currentSensor}`].value).toFixed( 2 )}
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
