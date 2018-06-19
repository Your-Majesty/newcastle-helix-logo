const DataInterpolator = (() => {

  const controller = {}

  controller.temperature = 0
  controller.sensors = [
    {
      name: 'humidity',
      id: 'humidity',
      units: '%',
      unitsFull: 'percentage relative humidity'
    },
    {
      name: 'temp',
      id: 'temperature',
      units: '°C',
      unitsFull: 'degrees celsius'
    },
    {
      name: 'energy',
      id: 'energy',
      units: 'kW',
      unitsFull: 'kilowatts'
    },
    {
      name: 'wind',
      id: 'wind',
      units: 'm/s',
      unitsFull: 'metres per second'
    },
    {
      name: 'vehicle Speed',
      id: 'vehicleSpeed',
      units: 'mph',
      unitsFull: 'miles per hour'
    }
  ]

  controller.limits = {
    humidity: {
      lineCount: {
        min: 1, 
        max: 10
      },
      lineSeparation: {
        min: 4, 
        max: 16
      }
    },
    temperature: {
      colorScale: {
        min: 0,
        max: 0.9
      }
    },
    energy: {
      innerRadius: {
        min: -50,
        max: 50
      },
      totalCurls: {
        min: 2,
        max: 2
      }
    },
    wind: {
      variationRatio: {
        min: 0.002,
        max: 0.004
      }, 
      amplitude: {
        min: 4,
        max: 6
      }
    },
    vehicleSpeed: {
      lineSpeed: {
        min: 0.05,
        max: 0.1
      },
      breakSize: {
        min: 0.1,
        max: 0.14
      }
    },
    vehicleCount: {
      breakFrequency: {
        min: 20,
        max: 70
      }
    }
  }

  controller.calculatedPoint = {
    lineCount: 0,
    lineSeparation: 0,
    colorScale: 0,
    innerRadius: 0,
    totalCurls: 0,
    variationRatio: 0,
    lineSpeed: 0,
    breakSize: 0,
    breakFrequency: 0,
    amplitude: 0
  }

  controller.calculatePoint = (dataPoint) => {
    SunCalculator.calculateDay(dataPoint.timestamp)

    DataCollector.limits.forEach((property) => {
      let propertyLimits = controller.limits[property.name]
      for (let key in propertyLimits) {
        if (key == 'colorScale') {
          controller.calculatedPoint[key] = TemperatureAnalizer.calculateDate(dataPoint.timestamp, dataPoint['temperature'])
          controller.temperature = controller.calculatedPoint[key]
        } else {
          controller.calculatedPoint[key] = controller.linearInterpolation(
            property.min, 
            property.max,
            dataPoint[property.name] !== null ? dataPoint[property.name] : 0,
            controller.limits[property.name][key].min,
            controller.limits[property.name][key].max
          )
        }
      }
    })
  }

  controller.calculateSlider = (sliderPoint) => {
    DataCollector.limits.forEach((property) => {
      let propertyLimits = controller.limits[property.name]
      for (let key in propertyLimits) {
        
        if (key == 'colorScale') {
          controller.calculatedPoint['colorScale'] = sliderPoint['temperature'].percentage
        } else {
          controller.calculatedPoint[key] = controller.linearInterpolation(
          property.min, 
          property.max,
          sliderPoint[property.name].value,
          controller.limits[property.name][key].min,
          controller.limits[property.name][key].max
          )

        }
      }

    })
  }

  controller.linearInterpolation = (minLimit, maxLimit, currentValue, logoValueMin, logoValueMax) => {
    let diffRange = maxLimit - minLimit
    let diffSize = logoValueMax - logoValueMin
    return logoValueMin + (diffSize * ((currentValue - minLimit) / diffRange))
  }

  return controller
})()