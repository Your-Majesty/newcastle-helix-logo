class HelixLogoRibbon {
  constructor(colorA, colorB, isMonochrome, monochromeColor, index) {
    this.segments = 2000
    this.angle = 0
    this.width = 16
    this.outerWidth = 16

    this.height = 100
    this.variation = 0.1
    this.amplitude = 5

    this.innerRadius = 50.7
    this.outerRadius = 500
    this.totalCurls = 2
    this.variationRatio = 0.004
    this.noiseSize = 280.5
    this.index = index

    this.offset = 0

    this.variator = .0002

    this.isMonochrome = isMonochrome
    this.monochromeColor = monochromeColor
    
    this.minWidth = 16
    this.maxWidth = 10
    this.offset = this.index % 2 === 0 ? ((this.index/2) * this.maxWidth) + ((this.index/2) * this.minWidth) : (Math.ceil(this.index/2) * this.maxWidth) + (Math.floor(this.index/2) * this.minWidth)
    this.width = this.index % 2 === 0 ? this.maxWidth : this.minWidth

    this.uniform = {
      time: {
        type: 'f',
        value: 0
      },
      width: {
        type: 'f',
        'value': parseFloat(this.width)
      },
      outerWidth: {
        type: 'f',
        'value': parseFloat(this.outerWidth)
      },
      index: {
        type: 'float',
        value: parseFloat(this.index)
      }, 
      offset: {
        type: 'f',
        value: this.offset
      },
      offsetLines : {
        type: 'f',
        value: Math.random()

      },
      coloredDivisions: {
        type: 'bool',
        value: false,
      },
      colorA: {
        type: 'vec3',
        value: colorA
      },
      colorB: {
        type: 'vec3',
        value: colorB
      },
      colorLastA: {
        type: 'vec3',
        value: colorA
      },
      colorLastB: {
        type: 'vec3',
        value: colorB
      },
      colorTiming: {
        type: 'f',
        'value': 1.
      },
      colorIsDark: {
        type: 'bool',
        value: false,
      },
      isMonochrome: {
        type: 'bool',
        value: this.isMonochrome,
      },
      monochromeColorA: {
        type: 'float',
        value: this.monochromeColor,
      },
      monochromeColorB: {
        type: 'float',
        value: this.monochromeColor > 0. ? .9 : .2,
      },
      lineSpeed: {
        type: 'f',
        value: 0.1
      },
      lineBreakSeparation: {
        type: 'f',
        value: 0.95
      },
      lineCount: {
        type: 'f',
        value: 20.
      },
      childRadius: {
        type: 'f',
        value: 0.5
      },
      breakSize: {
        type: 'f',
        'value': 0.3
      },
      breakFrequency: {
        type: 'f',
        'value': 20.
      },
      outerRadius: {
        type: 'f',
        'value': this.outerRadius
      },
      innerRadius: {
        type: 'f',
        'value': this.innerRadius
      },
      amplitude: {
        type: 'f',
        'value': this.amplitude
      },
      totalCurls: {
        type: 'f',
        'value': this.totalCurls
      }, 
      totalVertices: {
        type: 'f',
        'value': 0.
      },
    }

    this.createGeometry()
    this.createShaderMaterial()
    this.createMeshRibbon()
  }


  calculateThickness(maxValue) {
    this.maxWidth = maxValue
    this.offset = this.index % 2 === 0 ? ((this.index/2) * this.maxWidth) + ((this.index/2) * this.minWidth) : (Math.ceil(this.index/2) * this.maxWidth) + (Math.floor(this.index/2) * this.minWidth)
    this.width = this.index % 2 === 0 ? this.maxWidth : this.minWidth
    this.uniform.offset.value = this.offset
    this.uniform.width.value = this.width
  }

  createGeometry() {

    this.bufferGeometry = new THREE.PlaneBufferGeometry( this.width, this.height, 1, this.segments);
    this.angle = (720 / ((this.bufferGeometry.attributes.position.count))) * (Math.PI / 180) 
    
    this.vertexIndex = new Float32Array(this.bufferGeometry.attributes.position.count)
    this.vertexAngle = new Float32Array(this.bufferGeometry.attributes.position.count)
    this.vertexNoise = new Float32Array(this.bufferGeometry.attributes.position.count)
    
    for (let v = 0; v < this.bufferGeometry.attributes.position.count; v++) {
      this.vertexIndex[v] = v
    }

    this.bufferGeometry.addAttribute( 'vertexIndex', new THREE.BufferAttribute( this.vertexIndex, 1 ) )
    this.bufferGeometry.addAttribute( 'vertexAngle', new THREE.BufferAttribute( this.vertexAngle, 1 ) )
    this.bufferGeometry.addAttribute( 'vertexNoise', new THREE.BufferAttribute( this.vertexNoise, 1 ) )
  }

  createShaderMaterial() {
    this.shaderMaterial = new THREE.ShaderMaterial({
      vertexShader:   RibbonVertex,
      fragmentShader: RibbonColors,
      uniforms:       this.uniform
    })
  }

  createMeshRibbon() {
    this.ribbonMesh = new THREE.Mesh(
      this.bufferGeometry,
      this.shaderMaterial
    )

    this.ribbonMesh.position.y = 750
    this.ribbonMesh.position.z = -250
    this.shaderMaterial.side = THREE.DoubleSide
  }

  drawGeometry(noiseArray) {
    for (let i = 0; i < this.bufferGeometry.attributes.position.count; i=i+2) {
      this.vertexAngle[i] = i * this.angle
      this.vertexAngle[i+1] = i * this.angle
      this.vertexNoise[i] = noiseArray[i]
      this.vertexNoise[i+1] = noiseArray[i]      
      // this.vertexNoise[i] = 1
      // this.vertexNoise[i+1] = 1
    }
    this.bufferGeometry.attributes.position.needsUpdate = true
    this.bufferGeometry.attributes.vertexAngle.needsUpdate = true
    this.bufferGeometry.attributes.vertexNoise.needsUpdate = true
  
  }
}
