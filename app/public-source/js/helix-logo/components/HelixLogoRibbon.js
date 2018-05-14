class HelixLogoRibbon {
  constructor(colorA, colorB) {
    this.segments = 3000
    this.angle = 0
    this.width =  300
    this.height = 70
    this.variation = 0.1
    this.amplitude = 2.5

    this.innerRadius = 4.7
    this.outerRadius = 10.7
    this.totalCurls = 8
    this.variationRatio = 0.004
    this.noiseSize = 280.5

    this.offset = Math.random()
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
      coloredDivisions: {
        type: 'bool',
        value: true,
      },
      colorA: {
        type: 'vec3',
        value: colorA
      },
      colorB: {
        type: 'vec3',
        value: colorB
      },
      colorIsDark: {
        type: 'bool',
        value: false,
      },
      lineSpeed: {
        type: 'f',
        value: 0.1
      },
      lineBreakSeparation: {
        type: 'f',
        value: 0.5
      },
      lineCount: {
        type: 'f',
        value: 10.
      },
      childRadius: {
        type: 'f',
        value: 0.5
      },
      width: {
        type: 'f',
        'value': parseFloat(this.width)
      },
      breakSize: {
        type: 'f',
        'value': 0.3
      },
      breakFrequency: {
        type: 'f',
        'value': 10.
      },
      line1: {
        type: 'f',
        'value': .4
      },
      line2: {
        type: 'f',
        'value': .2
      },
      line3: {
        type: 'f',
        'value': .1
      },
      line4: {
        type: 'f',
        'value': .6
      },
      line5: {
        type: 'f',
        'value': .9
      },
      line6: {
        type: 'f',
        'value': .6
      },
      line7: {
        type: 'f',
        'value': .2
      },
      line8: {
        type: 'f',
        'value': .1
      },
      line9: {
        type: 'f',
        'value': .7
      },
      line10: {
        type: 'f',
        'value': .3
      },

    }

    this.createGeometry()
    this.createShaderMaterial()
    this.createMeshRibbon()
  }
  
  createGeometry() {
    this.geometry = new THREE.PlaneGeometry(this.width, this.height, 1, this.segments)
    this.angle = (360 / ((this.geometry.vertices.length) / 2)) * (Math.PI / 180)

    console.log(this.geometry)
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
      this.shaderMaterial
    )
    this.ribbonMesh.castShadow = true
    this.ribbonMesh.receiveShadow = true
    this.shaderMaterial.side = THREE.DoubleSide
    this.ribbonMesh.position.x += 60
    this.ribbonMesh.position.y -= 20
  }

  drawGeometry() {
    // Put this on Vertex shader
    this.variation = this.variationRatio * Math.cos(0.5) + Math.sin(0.001)  
    for (var i = 0; i < this.geometry.vertices.length / 2; i++) {
      let R = (this.outerRadius) + (Math.cos(noise) * this.amplitude ) * Math.sin(noise)
      let noise = this.perlin.noise(i * this.variation * Math.cos(this.noiseSize) * Math.sin(0.3), i * this.variation * Math.cos(this.noiseSize) * Math.sin(0.3), i * this.variation + this.variator * Math.sin(0.3) * Math.cos(0.2) * 6.6)
      let angleVertex = i * this.angle
      this.geometry.vertices[2*i].x = ((R + this.width) + (this.innerRadius * Math.cos(this.totalCurls * angleVertex))) * Math.cos(angleVertex) + (noise * Math.cos(140.5))
      this.geometry.vertices[2*i].y = ((R + this.width) + (this.innerRadius * Math.cos(this.totalCurls * angleVertex))) * Math.sin(angleVertex) + (noise * Math.sin(150.5)) * (this.amplitude * Math.sin(noise))
      this.geometry.vertices[2*i].z = this.innerRadius * Math.sin(this.totalCurls * angleVertex) * (this.amplitude * Math.sin(noise)) + Math.cos(-noise)
      
      this.geometry.vertices[2*i+1].x = ((R + this.width) + ((this.innerRadius + this.width) * Math.cos(this.totalCurls * angleVertex))) * Math.cos(angleVertex) + (noise * Math.cos(140.5)) 
      this.geometry.vertices[2*i+1].y = ((R + this.width) + ((this.innerRadius + this.width) * Math.cos(this.totalCurls * angleVertex))) * Math.sin(angleVertex) + (noise * Math.cos(150.5)) * (this.amplitude * Math.sin(noise))
      this.geometry.vertices[2*i+1].z = (this.innerRadius + this.width) * Math.sin(this.totalCurls * angleVertex) * (this.amplitude * Math.sin(noise)) + Math.cos(noise) 
    }
    this.geometry.verticesNeedUpdate = true;
  }
}
