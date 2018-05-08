HelixLogoApp = function(){
  DataCollector.getData().then(() => {
    if (!helixRibbon.createdElement) {
      helixRibbon.init()
    }
    
    helixTimeline.calculateTimeline()
    DataTimeline.calculatePoint(DataCollector.collection[0])
    helixRibbon.updateValues(DataTimeline.calculatedPoint)

  }, () => {
    if (!helixRibbon.createdElement) {
      helixRibbon.init()
    }
  })

  const helixRibbon = new HelixLogoTexture()
  const helixTimeline = new HelixLogoTimeline()
  const gui = new dat.GUI()

  // DAT GUI

  var f1 = gui.addFolder('Humidity - (lineSeparation, lineCount)');
    f1.add(helixRibbon, 'lineSeparation', 0.2, 0.8);
    f1.add(helixRibbon, 'lineCount', 4., 10.);

  var f2 = gui.addFolder('Energy - (amplitud of curves, number of curves)');
    f2.add(helixRibbon, 'innerRadius', -40., 20.);
    f2.add(helixRibbon, 'totalCurls', 2., 10.);
  
  var f3 = gui.addFolder('Wind - (velocity)');
    f3.add(helixRibbon, 'variationRatio', 0.001, 0.009);

  var f4 = gui.addFolder('Vehicle Speed - (speed of breaks and size) ');
    f4.add(helixRibbon, 'lineSpeed', 0, 0.6);
    f4.add(helixRibbon, 'breakSize', 0.11, .3);

  var f6 = gui.addFolder('Parked Cars - (break breakFrequency)');
    f6.add(helixRibbon, 'breakFrequency', 4., 20.);

  var f5 = gui.addFolder('Temperature - (Temperature)');
    f5.add(helixRibbon, 'colorScale', 0, 0.9999);

  
  gui.add(helixRibbon, 'colorBackground');
  gui.add(helixRibbon, 'coloredDivisions');


  let timelineControl = gui.add(helixTimeline, 'currentTimelineValue', 1., 24.);
  timelineControl.onChange(function(value) {
    DataTimeline.calculatePoint(DataCollector.collection[helixTimeline.collectionIndex()])
    helixRibbon.updateValues(DataTimeline.calculatedPoint)
  })
}()



