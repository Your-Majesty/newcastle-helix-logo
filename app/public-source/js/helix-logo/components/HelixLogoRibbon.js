class HelixLogoRibbon {
  constructor(width, height, index, colorA, colorB) {
    this.segments = 3000
    this.index = index
    this.width = width
    this.height = height

    this.offset = ((index + 2.) * width)
    
    this.uniform = {
      time: {
        type: 'f',
        value: 0
      },
      offset: {
        type: 'f',
        value: this.offset,
      },
      index: {
        type: 'f',
        value: parseFloat(index),
      },
      colorA: {
        type: 'vec3',
        value: colorA
      },
      colorB: {
        type: 'vec3',
        value: colorB
      },
      lineSpeed: {
        type: 'f',
        value: 0.1
      },
      lineBreakSeparation: {
        type: 'f',
        value: 0.95
      },
      lineBreakSize: {
        type: 'f',
        value: 10.
      },
      totalVertices: {
        type: 'f',
        value: 0.
      }, 
      parentRadius: {
        type: 'f',
        value: 20.
      },
      childRadius: {
        type: 'f',
        value: 0.5
      },
      totalLoops: {
        type: 'f',
        'value': 5.0
      },
      width: {
        type: 'f',
        'value': parseFloat(this.width)
      }
    }

    this.createGeometry()
    this.createShaderMaterial()
    this.createMeshRibbon()
  }
  
  createGeometry() {
    this.geometry = new THREE.PlaneGeometry(this.width, this.height, 1, this.segments)
    this.uniform.totalVertices.value = parseFloat(this.geometry.vertices.length)

    // Angle in radians
    let angle = (360 / ((this.geometry.vertices.length) / 2)) * (Math.PI / 180)
    let radius = 0.5 + this.offset
    let R = (40 + this.offset)
    let n = 8
 

    for (var i = 0; i < this.geometry.vertices.length / 2; i++) {
      
      this.geometry.vertices[2*i].x = (R + (radius * Math.cos(n * (i * angle)))) * Math.cos(i * angle)
      this.geometry.vertices[2*i].y = (R + (radius * Math.cos(n * (i * angle)))) * Math.sin(i * angle)
      this.geometry.vertices[2*i].z = radius * Math.sin(n * (i * angle))


      this.geometry.vertices[2*i+1].x = ((R) + ((radius) * Math.cos(n * (i * angle)))) * Math.cos(i * angle)
      this.geometry.vertices[2*i+1].y = ((R) + ((radius) * Math.cos(n * (i * angle)))) * Math.sin(i * angle)
      this.geometry.vertices[2*i+1].z = (radius + this.width) * Math.sin(n * (i * angle))
    }
    this.geometry.verticesNeedUpdate = true;
  }

  createShaderMaterial() {
    this.shaderMaterial = new THREE.ShaderMaterial({
      depthTest: true,
      vertexShader:   RibbonVertex,
      fragmentShader: RibbonColors,
      uniforms:       this.uniform
    })
  }

  createMeshRibbon() {
    this.ribbonMesh = new THREE.Mesh(
         this.geometry,
         this.shaderMaterial)

    this.shaderMaterial.side = THREE.DoubleSide
    // this.ribbonMesh.rotation.x += Math.PI / 2
    // this.ribbonMesh.position.x += .5
  }
}
