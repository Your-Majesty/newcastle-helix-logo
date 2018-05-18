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
    },
    {
      name: 'vehicle Count',
      id: 'vehicleCount',
      units: '',
      unitsFull: 'total number of vehicles passing'
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
        max: 6
      },
      totalCurls: {
        min: 3.5,
        max: 6.9
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
        min: 5,
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
    
    for (let property of DataCollector.limits) {
      let propertyLimits = controller.limits[property.name]
      for (let key in propertyLimits) {
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

  controller.linearInterpolation = (minLimit, maxLimit, currentValue, logoValueMin, logoValueMax) => {
    let diffRange = maxLimit - minLimit
    let diffSize = logoValueMax - logoValueMin
    return logoValueMin + (diffSize * ((currentValue - minLimit) / diffRange))
  }

  return controller
})()