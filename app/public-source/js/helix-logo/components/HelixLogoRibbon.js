class HelixLogoRibbon {
  constructor(width, height, index, colorA, colorB, noise) {
    this.segments = 3000
    this.index = index
    this.width = width
    this.height = height

    this.variation = 0.002
    this.amplitude = 10

    this.offset = ((index + 2.) * width)
    this.variator = .00002 * (this.index)
    this.perlin = noise


    console.log(this.variator)


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
    // Angle in radians

 
    
  }

  drawGeometry() {
    let angle = (360 / ((this.geometry.vertices.length) / 2)) * (Math.PI / 180)
    // let radius = 30 
    // let n = 25
    let radius = 0.6 + this.offset
    let R = (40 + this.offset)
    let n = 2


    for (var i = 0; i < this.geometry.vertices.length / 2; i++) {
      let angleDeg = i * (360 / ((this.geometry.vertices.length) / 2))
      let noise = this.perlin.noise(i * this.variation * Math.cos(50.5), i * this.variation, i * this.variation + this.variator * Math.cos(0.3))
      // let noise2 = this.perlin.noise(i * this.variation + this.variator * Math.cos(0.5), i * this.variation, i * this.variation + this.variator * Math.cos(0.3))
      // this.geometry.vertices[2*i].x = (radius + (this.width * this.index)) * Math.cos((i * angle)) 
      // this.geometry.vertices[2*i].y = (radius + (this.width * this.index)) * Math.sin((i * angle))
      // this.geometry.vertices[2*i].z = (this.amplitude * noise)

      // this.geometry.vertices[2*i+1].x = (radius + (this.width * this.index) + this.width) * Math.cos((i * angle))
      // this.geometry.vertices[2*i+1].y = (radius + (this.width * this.index) + this.width) * Math.sin((i * angle))
      // this.geometry.vertices[2*i+1].z = (this.amplitude * noise) 

      this.geometry.vertices[2*i].x = (R + (radius * Math.cos(n * (i * angle)))) * Math.cos(i * angle) + noise
      this.geometry.vertices[2*i].y = (R + (radius * Math.sin(n * (i * angle)))) * Math.sin(i * angle) 
      this.geometry.vertices[2*i].z = radius * Math.sin(n * (i * angle)) * (this.amplitude * noise)


      this.geometry.vertices[2*i+1].x = ((R + this.width) + ((radius + this.width) * Math.cos(n * (i * angle)))) * Math.cos(i * angle) + noise
      this.geometry.vertices[2*i+1].y = ((R + this.width) + ((radius + this.width) * Math.sin(n * (i * angle)))) * Math.sin(i * angle)
      this.geometry.vertices[2*i+1].z = (radius + this.width) * Math.sin(n * (i * angle)) * (this.amplitude * noise) 

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
