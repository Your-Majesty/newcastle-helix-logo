const DataTimeline = (() => {

  const controller = {}
  
  controller.limits = {
    humidity: {
      lineCount: {
        min: 0, 
        max: 0
      }
    },
    temperature: {
      colorScale: {
        min: 0,
        max: 0
      }
    },
    energy: {
      innerRadius: {
        min: 0,
        max: 0
      },
      totalCurls: {
        min: 0,
        max: 0
      }
    },
    wind: {
      variationRatio: {
        min: 0,
        max: 0
      }
    },
    vehicleSpeed: {
      lineSpeed: {
        min: 0,
        max: 0
      },
      breakSize: {
        min: 0,
        max: 0
      },
      breakFrequency: {
        min: 0,
        max: 0
      }
    }
  }

  controller.calculatePoint() = () => {
    


  }

  return controller
})()