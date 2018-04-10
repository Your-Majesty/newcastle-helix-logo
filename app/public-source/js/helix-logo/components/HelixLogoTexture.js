class HelixLogoTexture {
  constructor() {
    this.element = document.querySelector('.helix-logo-element')
    this.time = 0
    this.totalRibbons =20
    this.uniforms = []
    this.colors = [
      new THREE.Color(0x7292b6),
      new THREE.Color(0xffffff),
      new THREE.Color(0x4a4c90),
      new THREE.Color(0xffffff),
      new THREE.Color(0x513a80),
      new THREE.Color(0xffffff),
      new THREE.Color(0x503c81)
    ]
    
    this.resize()
    this.createScene()
    this.createRibbons()
    this.animate()
  }

  resize() {
    this.width = window.innerWidth,
    this.height = window.innerHeight
  }

  createScene() {

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 45, this.width / this.height, 1, 1000 )

    // Create Renderer
    this.renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true} )
    this.renderer.setSize( this.width, this.height )
    this.renderer.setPixelRatio( window.devicePixelRatio )
    this.element.appendChild( this.renderer.domElement)

    this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )
    this.controls.update()

    this.controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.25
    this.controls.panningMode = THREE.HorizontalPanning // default is THREE.ScreenSpacePanning
    this.controls.minDistance = 1
    this.controls.maxDistance = 500
    this.controls.maxPolarAngle = Math.PI / 2;
  }

  createRibbons() {
    let width = 0.2 / this.totalRibbons
    let height = 16
    let segments = 3000
      
    for (var i = 0; i < this.totalRibbons; i++) {
      let geometry = new THREE.PlaneGeometry(width, height, 3, segments)
      this.uniforms.push({
          time: {
            type: 'f', // a float
            value: 0
          },
          offset: {
            type: 'f', // a float
            value: (i + 1.5) * width,
          },
      });

      let shaderMaterial = new THREE.ShaderMaterial({
        uniforms:       this.uniforms[i],
        vertexShader:   RibbonVertex,
        fragmentShader: RibbonColors,
        vertexColors:   true,
      })

      for (var k = 0; k < geometry.faces.length; ++k) {
        f  = geometry.faces[k]
        n = (f instanceof THREE.Face3) ? 3 : 4
        f.color = this.colors[i % this.colors.length]
      }

      let ribbon = new THREE.Mesh(
         geometry,
         shaderMaterial)

      ribbon.doubleSided = true
      ribbon.rotation.x += Math.PI / 2
      this.scene.add(ribbon)
    }

  }

  animate() {
    requestAnimationFrame(() => { this.animate() })
    this.time += .01
    
    for (var i = 0; i < this.totalRibbons; ++i) {
      this.uniforms[i].time.value = this.time
    }
    
    this.controls.update()
    this.renderer.render( this.scene, this.camera )
  }
}

const helixRibbon = new HelixLogoTexture()

