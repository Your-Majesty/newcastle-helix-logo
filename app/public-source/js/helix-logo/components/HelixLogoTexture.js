class HelixLogoTexture {
  constructor() {
    this.element = document.querySelector('.helix-logo-element')
    this.time = 0
    this.totalRibbons = 15
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

    this.calculateColors(0.43)
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
    let width = 0.5 / this.totalRibbons
    let height = 10
    
    for (var i = 0; i < this.totalRibbons; i++) {
      this.ribbons.push(new HelixLogoRibbon(width, height, i))
      this.ribbons[i].createFaces(this.colors)
      this.scene.add(this.ribbons[i].ribbonMesh)
    }
  }

  calculateColors(temperatureAverage) {
    console.log(temperatureAverage)
    console.log(this.gradientColors)

    let colorSegments = 1 / (this.gradientColors.length - 1) 
    console.log(colorSegments)

    // Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
  }

  animate() {
    requestAnimationFrame(() => { this.animate() })
    this.stats.begin()
    this.time += .007

    // Update Ribbons
    this.ribbons.forEach((ribbon) => {
      ribbon.uniform.time.value = this.time
    })

    this.controls.update()

    this.stats.end()
    this.renderer.render( this.scene, this.camera )
  }
}