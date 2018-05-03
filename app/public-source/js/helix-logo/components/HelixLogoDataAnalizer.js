// This Should actually be a service
class HelixDataAnalizer {
  constructor() {
    
    this.filteredData = {
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

    this.getData()
    // window.setTimeout(() =>{ 
      
    //   this.getData()

    // }, 500);


  }

  getData() {
    // This is provisional, this should be our own API 
    // Help here HUGO
    const localePath = 'https://api.newcastle.urbanobservatory.ac.uk/api/v2.0a/bandstand/logo'
    const xhr = new XMLHttpRequest()
      xhr.open('GET', localePath)
      xhr.onload = (data) => {
      if (xhr.status === 200) {

        if (this.filteredData.dataPoints.length > 0) {
            console.log('new data perros')

        } else {
          
          this.sortDataPoints(JSON.parse(xhr.response))
         

          // Here I will then get the last datapoint and update Min and max Elements
        }
      } else {

        // What happen if error

      }
    }
    xhr.send()
  }

  pushDataPoint() {


  }

  popDataPoint() {


  
  }

  calculateNewMin() {


  }

  calculateNewMax() {

    
  }


  sortDataPoints(rawData) {
    // Still need to talk about Temperature
    rawData.timeseries.forEach((timePoint, index) => {
      this.filteredData.dataPoints.push({
        timestamp: timePoint.timestamp,
        carSpeed: timePoint.variables['Average vehicle speed'],
        humidity: timePoint.variables['Humidity'],
        temperature: timePoint.variables['Temperature'],
        energy: timePoint.variables['Energy consumption at Newcastle Helix'],
        wind: timePoint.variables['Average wind speed']
      })
    })

    
    console.log(this.filteredData.properties)
  }  
}