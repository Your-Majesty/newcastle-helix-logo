const HelixLogoDataFilter = (() => {

  const controller = {}
  
  controller.limits = {}
  controller.data = {}

  controller.getData = () => {
    const localePath = '/api/data'
    const xhr = new XMLHttpRequest()
      xhr.open('GET', localePath)
      xhr.onload = (data) => {
      if (xhr.status === 200) {
        HelixLogoDataFilter.sortDataPoints(JSON.parse(xhr.response))
      }
    }
    xhr.send()
  }

  controller.sortDataPoints = (data) => {

    console.log(data.data[3].sensors)
    console.log(data.limits)
    // console.log(data[0]['limits'])
    // console.log(data['limits'])


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

    // console.log(helixLogoData)
  }

  return controller

})()
