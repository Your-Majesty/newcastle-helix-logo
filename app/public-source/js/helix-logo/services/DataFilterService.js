const HelixLogoDataFilter = (() => {
  const controller = {}
  const helixLogoData = {
    properties: {
      humidity: {
        min: '',
        max: ''
      },
      temperature: {
        min: '',
        max: ''
      },
      energy: {
        min: '',
        max: ''
      },
      wind: {
        min: '',
        max: ''
      },
      carSpeed: {
        min: '',
        max: ''
      }
    },
    dataPoints: []
  } 

  controller.getData = () => {
    const localePath = '/api/data'
    const xhr = new XMLHttpRequest()
      xhr.open('GET', localePath)
      xhr.onload = (data) => {

      if (xhr.status === 200) {

        console.log(xhr.response + 'data')

        // if (helixLogoData.dataPoints.length > 0) {
            
        //   console.log('new data perros')

        // } else {

        //   HelixLogoDataFilter.sortDataPoints(JSON.parse(xhr.response))
        // }
      }
    }
    xhr.send()
  }

  controller.sortDataPoints = (data) => {

    console.log(data + 'prili')
    // data.timeseries.forEach((timePoint, index) => {
    //   helixLogoData.dataPoints.push({
    //     timestamp: timePoint.timestamp,
    //     carSpeed: timePoint.variables['Average vehicle speed'],
    //     humidity: timePoint.variables['Humidity'],
    //     temperature: timePoint.variables['Temperature'],
    //     energy: timePoint.variables['Energy consumption at Newcastle Helix'],
    //     wind: timePoint.variables['Average wind speed']
    //   })
    // })

    console.log(helixLogoData)
  }

  controller.pushDataPoint = () => {


  }

  controller.popDataPoint = () => {


  
  }

  controller.calculateNewMin = () => {


  }

  controller.calculateNewMax = () => {

    
  }

  return controller

})()
