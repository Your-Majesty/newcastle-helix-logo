
HellixLogoApp = function(){
  const helixRibbon = new HelixLogoTexture()
  const gui = new dat.GUI()

  gui.add(helixRibbon, 'colorScale', 0, 0.9999);
  gui.add(helixRibbon, 'lineSpeed', 0, 0.6);
  gui.add(helixRibbon, 'lineSeparation', 0.1, 0.99);
  gui.add(helixRibbon, 'lineBreakSize', 1., 50.);
}()



