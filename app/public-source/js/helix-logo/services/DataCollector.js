const DataCollector = (() => {

  const controller = {}
  
  controller.limits = {}
  controller.collection = {}

  controller.getData = () => {
    return new Promise(resolve => {
      const localePath = '/api/data'
      const xhr = new XMLHttpRequest()
        xhr.open('GET', localePath)
        xhr.onload = (data) => {
        if (xhr.status === 200) {
          let collection = JSON.parse(xhr.response)
          controller.limits = collection.limits
          controller.collection = collection.data
          resolve({
            success: true
          })
          return

        } else {
          resolve({
            success: false
          })
        }
      }
      xhr.send()
    })
  }
  return controller

})()
