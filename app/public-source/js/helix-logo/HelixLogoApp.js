
HellixLogoApp = function(){
  const helixRibbon = new HelixLogoTexture()
  const gui = new dat.GUI()

  gui.add(helixRibbon, 'colorScale', 0, 0.9999);
  gui.add(helixRibbon, 'lineSpeed', 0, 0.6);
  gui.add(helixRibbon, 'lineSeparation', 0.1, 0.99);
  gui.add(helixRibbon, 'lineBreakSize', 1., 50.);

  gui.add(helixRibbon, 'innerRadius', -60., 60.);
  gui.add(helixRibbon, 'outerRadius', -100., 100.);
  gui.add(helixRibbon, 'totalCurls', 2., 10.);
  gui.add(helixRibbon, 'variationRatio', 0.001, 0.009);
  gui.add(helixRibbon, 'noiseSize', 10., 100.);

  gui.add(helixRibbon, 'spaceWidth', 1., 4.);

var controller = gui.add(helixRibbon, 'lineWidth', 1, 10);

controller.onFinishChange(function(value) {
  helixRibbon.updateLineSize(value)
});

}()



