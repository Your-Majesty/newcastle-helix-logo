class HelixLogoRibbon {
  constructor(width, height, colorA, colorB) {
    this.segments = 3000
    this.angle = 0
    this.width =  width
    this.height = height
    this.variation = 0.2
    this.amplitude = 2.5

    this.innerRadius = 4.7
    this.outerRadius = 40.7
    this.totalCurls = 8
    this.variationRatio = 0.004
    this.noiseSize = 80.5

    this.offset = this.width
    this.variator = .0002 
    this.perlin = new ClassicalNoise()

    this.uniform = {
      time: {
        type: 'f',
        value: 0
      },
      offset: {
        type: 'f',
        value: this.offset,
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
    this.angle = (360 / ((this.geometry.vertices.length) / 2)) * (Math.PI / 180)
  }

  drawGeometry() {
    let radius = this.innerRadius + (this.width)
    let R = (this.outerRadius + (this.width)) * Math.sin(20.5)
    let n = this.totalCurls
    this.variation = this.variationRatio * Math.sin(0.5) 
    
    for (var i = 0; i < this.geometry.vertices.length / 2; i++) {
      let noise = this.perlin.noise(i * this.variation * Math.cos(this.noiseSize) * Math.sin(0.3), i * this.variation * Math.cos(this.noiseSize) * Math.sin(0.3), i * this.variation + this.variator * Math.sin(0.3) * Math.cos(0.2) * 4.6)
      let angleVertex = i * this.angle
      this.geometry.vertices[2*i].x = ((R + this.width) + (radius * Math.cos(n * angleVertex))) * Math.cos(angleVertex) + noise
      this.geometry.vertices[2*i].y = ((R + this.width) + (radius * Math.cos(n * angleVertex))) * Math.sin(angleVertex) + noise
      this.geometry.vertices[2*i].z = radius * Math.sin(n * angleVertex) * (this.amplitude * noise) + noise 
      
      this.geometry.vertices[2*i+1].x = ((R + this.width) + ((radius + this.width) * Math.cos(n * angleVertex))) * Math.cos(angleVertex) + noise 
      this.geometry.vertices[2*i+1].y = ((R + this.width) + ((radius + this.width) * Math.cos(n * angleVertex))) * Math.sin(angleVertex) + noise
      this.geometry.vertices[2*i+1].z = (radius + this.width) * Math.sin(n * angleVertex) * (this.amplitude * noise) + noise 
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
    this.ribbonMesh.rotation.x += Math.PI / 2
    this.ribbonMesh.position.x += 60
    this.ribbonMesh.position.y -= 20
  }
}
