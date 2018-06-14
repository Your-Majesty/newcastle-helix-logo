const HelixLogoApp = (() => {
  
  const controller = {}
  window.addEventListener('message', function (event) {

    if (event.data) {
      var result = JSON.parse(event.data) 
      if (result.action == 'show-ui') {
        helixUI.animateIn()
      }
      
      if (result.action == 'hide-ui') {
        helixUI.resetValues()
        helixTimeline.calculateTimeline()
        DataInterpolator.calculatePoint(DataCollector.collection[0])
        helixRibbon.updateValues(DataInterpolator.calculatedPoint)
        helixUI.animateOut()
      }
      
      if (result.action == 'start-rendering') {
        helixRibbon.play()
      }
      if (result.action == 'stop-rendering') {
        helixRibbon.pause()
      }
    }
  }) 

  if (!isTabletExperience) {
    DeviceTracker.orientation()
    window.addEventListener('orientationchange', function (e) {
      DeviceTracker.orientation()
    })
  }
  
  window.addEventListener('uiZoomIn', function (e) {
    helixRibbon.zoomInCamera()
  }, false)

  window.addEventListener('uiZoomOut', function (e) {
    helixRibbon.zoomOutCamera()
  }, false)

  window.addEventListener('uiTimeline', function (e) {
    DataInterpolator.calculatePoint(DataCollector.collection[e.detail])
    helixRibbon.updateValues(DataInterpolator.calculatedPoint)
    helixUI.mapValuesTimeline(e.detail)
  }, false)
  
  window.addEventListener('uiDownload', function (e) {
    let screenShot = helixRibbon.createShot()
    helixUI.download.setScreenShot(screenShot)
  })

  window.addEventListener('sunCalculator', function (e) {
    if (!helixRibbon.isMonochrome) {
      helixRibbon.colorBackground = e.detail
      helixRibbon.coloredDivisions = e.detail

      helixUI.updateTheme(e.detail)
    }
  })
  
  window.addEventListener('uiSliderUpdated', function (e) {
    helixUI.mapValuesSlider()
    DataInterpolator.calculateSlider(SliderCollector.sensors)
    helixRibbon.updateValues(DataInterpolator.calculatedPoint)
  })

  window.addEventListener('uiResetPressed', function (e) {
    helixUI.resetValues()
    helixTimeline.calculateTimeline()
    DataInterpolator.calculatePoint(DataCollector.collection[0])
    helixRibbon.updateValues(DataInterpolator.calculatedPoint)
  })

  DataCollector.getData().then(() => {
    if (!helixRibbon.createdElement) {
      helixRibbon.init()
      helixUI.init()
    }

    helixUI.mapValues(TimelineCollector.currentIndex)
    helixTimeline.calculateTimeline()
    DataInterpolator.calculatePoint(DataCollector.collection[0])
    helixRibbon.updateValues(DataInterpolator.calculatedPoint)

  }, () => {
    if (!helixRibbon.createdElement) {
      helixRibbon.init()
    }
  })

  setInterval(() => {
    DataCollector.getData().then(() => {
      if (TimelineCollector.currentIndex == 0 && !helixUI.sliderIsActive) {
        controller.updateLogoData()
      }
    })
    
  }, 90000)

  controller.updateLogoData = () => {
    helixUI.mapValues(TimelineCollector.currentIndex)
    helixTimeline.calculateTimeline()
    DataInterpolator.calculatePoint(DataCollector.collection[0])
    helixRibbon.updateValues(DataInterpolator.calculatedPoint)
  }

  const helixRibbon = new HelixLogoTexture()
  const helixUI = new HelixLogoUI()
  const helixTimeline = new HelixLogoTimeline()
  
  return controller
})()

