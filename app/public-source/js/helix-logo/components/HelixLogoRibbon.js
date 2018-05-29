class HelixLogoRibbon {
  constructor(colorA, colorB, isMonochrome, monochromeColor, index) {
    this.segments = 1000
    this.angle = 0
    this.width = 20
    this.height = 100
    this.variation = 0.1
    this.amplitude = 2.5

    this.innerRadius = 40.7
    this.outerRadius = 400
    this.totalCurls = 4
    this.variationRatio = 0.004
    this.noiseSize = 280.5
    this.index = index

    this.offset = this.index * this.width
    this.variator = .0002

    this.isMonochrome = isMonochrome
    this.monochromeColor = monochromeColor
    
    this.uniform = {
      time: {
        type: 'f',
        value: 0
      },
      offset: {
        type: 'f',
        value: this.offset
      },
      coloredDivisions: {
        type: 'bool',
        value: false,
      },
      colorA: {
        type: 'vec3',
        value: colorA
      },
      colorLight1: {
        type: 'vec3',
        value: colorA
      },
      colorLight2: {
        type: 'vec3',
        value: colorA
      },
      colorLightInterpolation: {
        type: 'float',
        value: 0.
      },
      colorDark1: {
        type: 'vec3',
        value: colorA
      },
      colorDark2: {
        type: 'vec3',
        value: colorA
      },
      colorDarkInterpolation: {
        type: 'float',
        value: 0.
      },
      colorB: {
        type: 'vec3',
        value: colorB
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
    this.angle = (365 / ((this.bufferGeometry.attributes.position.count))) * (Math.PI / 180)
    
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
    this.ribbonMesh.castShadow = true
    this.ribbonMesh.receiveShadow = true
    this.shaderMaterial.side = THREE.DoubleSide
    this.ribbonMesh.position.x += 60
    this.ribbonMesh.position.y -= 20
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
