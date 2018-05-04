const DataTimeline = (() => {

  const controller = {}
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
        max: 10
      }
    },
    energy: {
      innerRadius: {
        min: -40,
        max: 20
      },
      totalCurls: {
        min: 3.5,
        max: 10
      }
    },
    wind: {
      variationRatio: {
        min: 0.002,
        max: 0.009
      }
    },
    vehicleSpeed: {
      lineSpeed: {
        min: 0,
        max: 10
      },
      breakSize: {
        min: 0.27,
        max: 0
      },
      breakFrequency: {
        min: 4,
        max: 20
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

  controller.calculatePoint = (dataPoint, totalPoints) => {

    console.log(DataCollector)

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

    console.log(controller.calculatedPoint)
  }

  controller.linearInterpolation = (minLimit, maxLimit, currentValue, logoValueMin, logoValueMax) => {
    let diffRange = maxLimit - minLimit
    let diffSize = logoValueMax - logoValueMin
    return logoValueMin + (diffSize * ((currentValue - minLimit) / diffRange))
  }

  return controller
})()