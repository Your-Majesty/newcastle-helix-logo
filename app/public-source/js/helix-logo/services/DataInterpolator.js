const DataInterpolator = (() => {

  const controller = {}
  
  controller.sensors = [
    {
      name: 'humidity',
      id: 'humidity',
      units: '%rH',
      unitsFull: 'percentage relative humidity'
    },
    {
      name: 'temperature',
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
        min: 4, 
        max: 10
      },
      lineSeparation: {
        min: 0.2, 
        max: 0.8
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
        min: -40,
        max: 60
      },
      totalCurls: {
        min: 3.5,
        max: 10
      }
    },
    wind: {
      variationRatio: {
        min: 0.001,
        max: 0.009
      }
    },
    vehicleSpeed: {
      lineSpeed: {
        min: 0.05,
        max: 0.1
      },
      breakSize: {
        min: 0.21,
        max: 0.30
      }
    },
    vehicleCount: {
      breakFrequency: {
        min: 0,
        max: 19
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
    breakFrequency: 0
  }

  controller.calculatePoint = (dataPoint) => {
    SunCalculator.calculateDay(dataPoint.timestamp)
    
    for (let property of DataCollector.limits) {
      let propertyLimits = controller.limits[property.name]
      for (let key in propertyLimits) {
        if (key == 'colorScale') {
          controller.calculatedPoint[key] = TemperatureAnalizer.calculateDate(dataPoint.timestamp, dataPoint['temperature'])
        } else {
          controller.calculatedPoint[key] = controller.linearInterpolation(
            property.min, 
            property.max,
            dataPoint[property.name],
            controller.limits[property.name][key].min,
            controller.limits[property.name][key].max
          )
        }
      }
    }
  }

  controller.linearInterpolation = (minLimit, maxLimit, currentValue, logoValueMin, logoValueMax) => {
    let diffRange = maxLimit - minLimit
    let diffSize = logoValueMax - logoValueMin
    return logoValueMin + (diffSize * ((currentValue - minLimit) / diffRange))
  }

  return controller
})()