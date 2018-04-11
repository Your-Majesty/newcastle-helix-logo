class HelixLogoRibbon {
  constructor(width, height, index) {
    this.segments = 3000
    this.index = index
    this.width = width
    this.height = height
    
    this.uniform = {
      time: {
        type: 'f',
        value: 0
      },
      offset: {
        type: 'f',
        value: ((index + 2.) * width),
      },
    }

    this.createGeometry()
    this.createShaderMaterial()
    this.createMeshRibbon()
  }
  
  createGeometry() {
    this.geometry = new THREE.PlaneGeometry(this.width, this.height, 3, this.segments)
  }

  createShaderMaterial() {
    this.shaderMaterial = new THREE.ShaderMaterial({
      depthTest: true,
      vertexShader:   RibbonVertex,
      fragmentShader: RibbonColors,
      uniforms:       this.uniform,
      vertexColors:   true,
    })
  }

  createFaces(colors) {
    for (var k = 0; k < this.geometry.faces.length; ++k) {
      f  = this.geometry.faces[k]
      f.color = colors[this.index % colors.length]

    }
  }

  createMeshRibbon() {
    this.ribbonMesh = new THREE.Mesh(
         this.geometry,
         this.shaderMaterial)

    this.shaderMaterial.side = THREE.DoubleSide
    this.ribbonMesh.rotation.x += Math.PI / 2
    this.ribbonMesh.position.x += .5
  }
}
