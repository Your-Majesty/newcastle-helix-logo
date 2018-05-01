
HellixLogoApp = function(){
  const helixRibbon = new HelixLogoTexture()
  const gui = new dat.GUI()

  gui.add(helixRibbon, 'colorScale', 0, 0.9999);
  gui.add(helixRibbon, 'colorBackground');
  gui.add(helixRibbon, 'coloredDivisions');
  gui.add(helixRibbon, 'lineSpeed', 0, 0.6);


  gui.add(helixRibbon, 'breakSize', 0.1, 1.);
  gui.add(helixRibbon, 'breakFrequency', 2., 80.);

  gui.add(helixRibbon, 'lineSeparation', 0.2, 0.8);
  gui.add(helixRibbon, 'lineCount', 3., 10.);

  gui.add(helixRibbon, 'innerRadius', -60., 20.);
  gui.add(helixRibbon, 'outerRadius', 80., 120.);
  gui.add(helixRibbon, 'totalCurls', 2., 10.);
  gui.add(helixRibbon, 'variationRatio', 0.001, 0.009);
  gui.add(helixRibbon, 'noiseSize', 10., 100.);

}()



