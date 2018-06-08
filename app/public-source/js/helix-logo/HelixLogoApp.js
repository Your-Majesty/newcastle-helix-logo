const HelixLogoApp = (() => {
  
  window.addEventListener('message', function (event) {
    if (event.data) {
      var result = JSON.parse(event.data) 
      if (result.action == 'show-ui') {
        helixUI.animateIn()
      }
      
      if (result.action == 'hide-ui') {
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

  window.addEventListener('uiZoomIn', function (e) {
    console.log('zoom in')
    helixRibbon.zoomInCamera()
  }, false)

  window.addEventListener('uiZoomOut', function (e) {
    console.log('zoom out')
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
        helixUI.mapValues(TimelineCollector.currentIndex)
        helixTimeline.calculateTimeline()
        helixUI.mapValuesSlider()
        DataInterpolator.calculateSlider(SliderCollector.sensors)
        DataInterpolator.calculatePoint(DataCollector.collection[0])
        helixRibbon.updateValues(DataInterpolator.calculatedPoint)
      }
    })
    
  }, 90000)

  const helixRibbon = new HelixLogoTexture()
  const helixUI = new HelixLogoUI()
  const helixTimeline = new HelixLogoTimeline()
  
  // const gui = new dat.GUI()

  // // DAT GUI

  // var f1 = gui.addFolder('Humidity - (lineSeparation, lineCount)');
  //   f1.add(helixRibbon, 'lineSeparation', 0.2, 0.8);
  //   f1.add(helixRibbon, 'lineCount', 4., 10.);

  // var f2 = gui.addFolder('Energy - (amplitud of curves, number of curves)');
  //   f2.add(helixRibbon, 'innerRadius', -40., 20.);
  //   f2.add(helixRibbon, 'totalCurls', 2., 10.);
  
  // var f3 = gui.addFolder('Wind - (velocity)');
  //   f3.add(helixRibbon, 'variationRatio', 0.001, 0.009);

  // var f4 = gui.addFolder('Vehicle Speed - (speed of breaks and size) ');
  //   f4.add(helixRibbon, 'lineSpeed', 0, 0.6);
  //   f4.add(helixRibbon, 'breakSize', 0.11, .3);

  // var f6 = gui.addFolder('Parked Cars - (break breakFrequency)');
  //   f6.add(helixRibbon, 'breakFrequency', 4., 20.);

  // var f5 = gui.addFolder('Temperature - (Temperature)');
  //   f5.add(helixRibbon, 'colorScale', 0, 0.9999);

  
  // gui.add(helixRibbon, 'colorBackground');
  // gui.add(helixRibbon, 'coloredDivisions');


  // let timelineControl = gui.add(helixTimeline, 'currentTimelineValue', 1., 24.);
  // timelineControl.onChange(function(value) {
  //   DataInterpolator.calculatePoint(DataCollector.collection[helixTimeline.collectionIndex()])
  //   helixRibbon.updateValues(DataInterpolator.calculatedPoint)
  // })
})()



