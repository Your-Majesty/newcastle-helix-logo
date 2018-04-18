class HelixLogoTexture {
  constructor() {
    this.element = document.querySelector('.helix-logo-element')
    this.time = 0
    this.totalRibbons = 15

    this.colorScale = 0.2
    this.lineSpeed = 0.1
    this.lineSeparation = 0.95
    this.lineBreakSize = 10.
    this.perlin = new ClassicalNoise()

    this.ribbons = []

    this.uniforms = []
    this.colors = [
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
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 65, this.width / this.height, 1, 2000 )

    // Create Renderer
    this.renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true} )
    this.renderer.setSize( this.width, this.height )
    this.renderer.setPixelRatio( window.devicePixelRatio )
    this.element.appendChild( this.renderer.domElement)

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
    let width = 0.5
    let height = 16
    
    for (var i = 0; i < this.totalRibbons; i++) {
      this.ribbons.push(new HelixLogoRibbon(width, height, i, this.gradientColors[3], this.gradientColors[4], this.perlin))
      this.scene.add(this.ribbons[i].ribbonMesh)
    }
  }

  calculateColors(temperatureAverage) {
    let colorSegments = 1 / (this.gradientColors.length - 1) 
    let gradientGuide = Math.floor(temperatureAverage / colorSegments)

    this.ribbons.forEach((ribbon) => {
      ribbon.uniform.colorA.value = this.gradientColors[gradientGuide]
      ribbon.uniform.colorB.value = this.gradientColors[gradientGuide + 1]
    })
  }

  animate() {
    requestAnimationFrame(() => { this.animate() })
    this.stats.begin()
    this.time += .005

    // Update Ribbons
    this.ribbons.forEach((ribbon) => {
      ribbon.uniform.time.value = this.time
      ribbon.drawGeometry()
      ribbon.variator +=  .004;
    })

    this.controls.update()

    this.calculateColors(this.colorScale)
    this.ribbons.forEach((ribbon) => {
      ribbon.uniform.lineSpeed.value = this.lineSpeed
      ribbon.uniform.lineSpeed.value = this.lineSpeed
      ribbon.uniform.lineBreakSeparation.value = this.lineSeparation
      ribbon.uniform.lineBreakSize.value = this.lineBreakSize
    })

    this.stats.end()
    this.renderer.render( this.scene, this.camera )
  }
}