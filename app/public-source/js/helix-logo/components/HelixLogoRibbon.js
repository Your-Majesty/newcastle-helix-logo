class HelixLogoRibbon {
  constructor(colorA, colorB, isMonochrome, monochromeColor, index) {
    this.segments = 3000
    this.angle = 0
    this.width = 20
    this.outerWidth = 20

    this.height = 300
    this.variation = 0
    this.amplitude = 0

    this.innerRadius = 0
    this.outerRadius = 500
    this.totalCurls = 0
    this.variationRatio = 0
    this.noiseSize = 280.5
    this.index = index

    this.variator = .0003

    this.isMonochrome = isMonochrome
    this.monochromeColor = monochromeColor

   
    
    
    this.offset = this.index % 2 === 0 ? this.index * this.width : this.index * this.width
    // this.width = this.index % 2 === 0 ? 20 : 10

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

    this.ribbonMesh.position.y = 760
    this.ribbonMesh.position.z = -250
    this.ribbonMesh.position.x -= -100


    this.shaderMaterial.side = THREE.DoubleSide
  }

  drawGeometry(noiseArray) {
    for (let i = 0; i < this.bufferGeometry.attributes.position.count; i=i+2) {
      this.vertexAngle[i] = i * this.angle
      this.vertexAngle[i+1] = i * this.angle
      this.vertexNoise[i] = noiseArray[i]
      this.vertexNoise[i+1] = noiseArray[i]
    }
    this.bufferGeometry.attributes.position.needsUpdate = true
    this.bufferGeometry.attributes.vertexAngle.needsUpdate = true
    this.bufferGeometry.attributes.vertexNoise.needsUpdate = true
  
  }
}
