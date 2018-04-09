class HelixLogoRibbon {
  
  constructor() {
    this.element = document.querySelector('.helix-logo-element')
    this.time = 0
    this.totalRibbons = 5
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
    this.camera = new THREE.PerspectiveCamera( 45, this.width / this.height, 1, 1700 )

    // Create Renderer
    this.renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true} )
    this.renderer.setSize( this.width, this.height )
    this.element.appendChild( this.renderer.domElement)

    this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )
    this.controls.addEventListener( 'change', this.render )
    this.controls.enableZoom = false
  }

  createRibbons() {
    this.colors = this.colors.reverse()

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
    this.controls.update()
    
    for (var i = 0; i < this.totalRibbons; ++i) {
      this.uniforms[i].time.value = this.time
    }
    
    this.renderer.render( this.scene, this.camera )
  }
}


const helixRibbon = new HelixLogoRibbon()

