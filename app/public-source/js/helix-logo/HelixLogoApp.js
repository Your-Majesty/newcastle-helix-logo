const HelixLogoApp = (() => {

  const controller = {}
  controller.currentTime = null
  controller.newCurrentTime = null

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
    SliderCollector.getCurrentValues(e.detail)
  }, false)

  window.addEventListener('uiDownload', function (e) {
    let screenShot = helixRibbon.createShot()

    // If we are in Internet Explorer, make a blob and use msSaveBlob
    if (navigator.msSaveBlob) {
      // Make a blob
      var binary = atob(screenShot.split(',')[1])
      var arr = [];
      for (var i = 0; i < binary.length; i++) arr.push(binary.charCodeAt(i));
      var blob = new Blob([new Uint8Array(arr)], {type: 'image/jpg'});
      navigator.msSaveBlob(blob, 'newcastle-helix-logo-export.jpg')
      return
    }

    // Trigger click on a new link
    var a = document.createElement('a')
    a.download = 'newcastle-helix-logo-export.jpg'
    a.href = screenShot
    a.target = '_blank' // for ios devices
    a.click()
  })

  window.addEventListener('sunCalculator', function (e) {

    if (!helixRibbon.isMonochrome) {
      helixRibbon.colorBackground = e.detail
      helixRibbon.coloredDivisions = e.detail

      if (e.detail && (SliderCollector.sensors['temperature'].percentage < 0.27)) {
        controller.newCurrentTime = 'black'
        helixUI.updateTheme(false)
      } else if(!e.detail) {
        controller.newCurrentTime = 'black'
        helixUI.updateTheme(false)
      } else {
        controller.newCurrentTime = 'white'
        helixUI.updateTheme(true)
      }

      if (controller.newCurrentTime !== controller.currentTime) {
        controller.currentTime = controller.newCurrentTime
        let color = {
          color: controller.newCurrentTime
        }
        window.parent.postMessage(JSON.stringify(color), '*')
      }
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
    SliderCollector.getCurrentValues(0)
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
    SliderCollector.getCurrentValues(0)

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

  controller.helixUI = helixUI

  return controller
})()
