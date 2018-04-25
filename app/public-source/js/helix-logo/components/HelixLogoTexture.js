class HelixLogoTexture {
  constructor() {
    this.element = document.querySelector('.helix-logo-element')
    this.time = 0

    this.colorScale = 0.2
    this.lineSpeed = 0.1
    this.lineSeparation = 0.5
    this.lineCount = 10.
 
    this.innerRadius = 20.7
    this.outerRadius = 100
    this.totalCurls = 8
    this.variationRatio = 0.004
    this.noiseSize = 80.5

    this.ribbon = null
    this.uniforms = []

    this.ribbonWidth = 60
    this.ribbonHeight = 40
    
    this.colors = [
      new THREE.Color(0x7292b6),
      new THREE.Color(0xffffff),
      new THREE.Color(0x4a4c90),
      new THREE.Color(0xffffff),
      new THREE.Color(0x513a80),
      new THREE.Color(0xffffff)
    ]

    this.backgroundColors = [
      new THREE.Color(0x7292b6),
      new THREE.Color(0xffffff),
      new THREE.Color(0x4a4c90),
      new THREE.Color(0xffffff),
      new THREE.Color(0x513a80),
      new THREE.Color(0xffffff)
    ]
    
    this.gradientColors = [
      // Teal
      new THREE.Color("rgb(51, 255, 204)"),
      // Blue
      new THREE.Color("rgb(0, 51, 255)"),
      // Indigo
      new THREE.Color("rgb(51, 0, 102)"),
      // Magenta
      new THREE.Color("rgb(166, 10, 122)"),
      // Orange
      new THREE.Color("rgb(255, 107, 0)")
    ]
    
    this.createStats()
    this.resize()
    this.createScene()
    
    this.createRibbons()
    this.animate()


  }

  resize() {
    this.width = window.innerWidth,
    this.height = window.innerHeight
  }

  createStats() {
    this.stats = new Stats()
    this.stats.showPanel( 0 )
    document.body.appendChild( this.stats.dom )
  }

  createScene() {
    // Create Renderer
    this.renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true} )
    this.renderer.setSize( this.width, this.height )
    this.renderer.shadowMapType = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio( window.devicePixelRatio )
    this.element.appendChild( this.renderer.domElement)
    
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 65, this.width / this.height, 1, 2000 )
    this.scene.fog = new THREE.Fog( 0x000000, 1, 1000 )

    this.composer = new THREE.EffectComposer( this.renderer )
    this.composer.addPass( new THREE.RenderPass( this.scene, this.camera ) )

    this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )
    this.controls.update()

    this.controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.25
    this.controls.panningMode = THREE.ScreenSpacePanning // default is THREE.ScreenSpacePanning
    this.controls.minDistance = 1
    this.controls.maxDistance = 100
    this.controls.maxPolarAngle = Math.PI / 2;
  }

  createRibbons() {
    this.ribbon = new HelixLogoRibbon(this.ribbonWidth, this.ribbonHeight, this.gradientColors[3], this.gradientColors[4])
    this.scene.add(this.ribbon.ribbonMesh)
  }

  calculateColors(temperatureAverage) {
    let colorSegments = 1 / (this.gradientColors.length - 1) 
    let gradientGuide = Math.floor(temperatureAverage / colorSegments)
    this.ribbon.uniform.colorA.value = this.gradientColors[gradientGuide]
    this.ribbon.uniform.colorB.value = this.gradientColors[gradientGuide + 1]
  }

  animate() {
    requestAnimationFrame(() => { this.animate() })
    this.stats.begin()
    this.time += .006

    // Update Ribbons
    this.ribbon.uniform.time.value = this.time
    this.ribbon.innerRadius = this.innerRadius
    this.ribbon.outerRadius = this.outerRadius
    this.ribbon.totalCurls = Math.floor(this.totalCurls)
    this.ribbon.variationRatio = this.variationRatio
    this.ribbon.noiseSize = this.noiseSize
 
    this.ribbon.drawGeometry()
    this.ribbon.variator +=  this.variationRatio;
    
    this.calculateColors(this.colorScale)
    
    this.ribbon.uniform.lineSpeed.value = this.lineSpeed
    this.ribbon.uniform.lineBreakSeparation.value = this.lineSeparation
    this.ribbon.uniform.lineCount.value = this.lineCount

    this.controls.update()
    this.stats.end()
    this.renderer.render( this.scene, this.camera )
  }
}