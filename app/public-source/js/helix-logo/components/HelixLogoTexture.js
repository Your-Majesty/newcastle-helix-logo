class HelixLogoTexture {
  constructor() {
    this.element = document.querySelector('.helix-logo-element')
    this.time = 0
    this.totalRibbons = 15
    this.ribbons = []

    this.uniforms = []
    this.colors = [
      new THREE.Color(0x7292b6),
      new THREE.Color(0x4a4c90),
      new THREE.Color(0x513a80),
      new THREE.Color(0x503c81)
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
    let width = 0.2 / this.totalRibbons
    let height = 60
    
    for (var i = 0; i < this.totalRibbons; i++) {
      this.ribbons.push(new HelixLogoRibbon(width, height, i))
      this.ribbons[i].createFaces(this.colors)
      this.scene.add(this.ribbons[i].ribbonMesh)
    }
  }

  animate() {
    requestAnimationFrame(() => { this.animate() })
    this.stats.begin()
    this.time += .009

    // Update Ribbons
    this.ribbons.forEach((ribbon) => {
      ribbon.uniform.time.value = this.time
    })

    this.controls.update()

    this.stats.end()
    this.renderer.render( this.scene, this.camera )
  }
}