HelixLogoApp = function(){
  DataCollector.getData().then(() => {
    DataTimeline.calculatePoint(DataCollector.collection[0], DataCollector.collection.length)
    helixRibbon.updateValues(DataTimeline.calculatedPoint)
    

  })
  
  const helixRibbon = new HelixLogoTexture()
  const gui = new dat.GUI()
  var f1 = gui.addFolder('Humidity');
    f1.add(helixRibbon, 'lineSeparation', 0.2, 0.8);
    f1.add(helixRibbon, 'lineCount', 3., 10.);

  var f2 = gui.addFolder('Energy');
    f2.add(helixRibbon, 'innerRadius', -60., 20.);
    f2.add(helixRibbon, 'totalCurls', 2., 10.);
  
  var f3 = gui.addFolder('Wind');
    f3.add(helixRibbon, 'variationRatio', 0.001, 0.009);

  var f4 = gui.addFolder('Vehicle Speed');
    f4.add(helixRibbon, 'lineSpeed', 0, 0.6);
    f4.add(helixRibbon, 'breakSize', 0., .27);
    f4.add(helixRibbon, 'breakFrequency', 4., 20.);

  var f5 = gui.addFolder('Temperature');
    f5.add(helixRibbon, 'colorScale', 0, 0.9999);

  gui.add(helixRibbon, 'colorBackground');
  gui.add(helixRibbon, 'coloredDivisions');

}()



