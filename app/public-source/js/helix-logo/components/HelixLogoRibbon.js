class HelixLogoRibbon {
  constructor(colorA, colorB, isMonochrome, monochromeColor, index) {
    this.segments = 3000
    this.angle = 0
    this.width = 12
    this.height = 300
    this.variation = 0.1
    this.amplitude = 2.5

    this.innerRadius = 40.7
    this.outerRadius = 350
    this.totalCurls = 4
    this.variationRatio = 0.004
    this.noiseSize = 280.5
    this.index = index

    this.offset = 5
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
        value: this.offset,
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
    this.geometry = new THREE.PlaneGeometry(this.width, this.height, 1, this.segments)
    this.angle = (365 / ((this.geometry.vertices.length) / 2)) * (Math.PI / 180)
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
    this.ribbonMesh.position.z -= 20
  }

  drawGeometry(noiseArray) {
   
    this.variation = this.variationRatio
    // let noise = 1
    for (var i = 0; i < this.geometry.vertices.length / 2; i++) {
      let R = this.outerRadius
      let noise = noiseArray[i]
      let angleVertex = i * this.angle
      this.geometry.vertices[2*i].x = ((R + this.width) + ((this.innerRadius + (this.width * this.index)) * Math.cos(this.totalCurls * angleVertex))) * Math.cos(angleVertex)
      this.geometry.vertices[2*i].y = ((R + this.width) + ((this.innerRadius + (this.width * this.index)) * Math.cos(this.totalCurls * angleVertex))) * Math.sin(angleVertex)
      this.geometry.vertices[2*i].z = (this.innerRadius + (this.width * this.index))  * Math.sin(this.totalCurls * angleVertex) * (this.amplitude * Math.sin(noise))
      
      this.geometry.vertices[2*i+1].x = ((R + this.width) + (((this.innerRadius + this.width) + (this.width * this.index)) * Math.cos(this.totalCurls * angleVertex))) * Math.cos(angleVertex) 
      this.geometry.vertices[2*i+1].y = ((R + this.width) + (((this.innerRadius + this.width) + (this.width * this.index)) * Math.cos(this.totalCurls * angleVertex))) * Math.sin(angleVertex)
      this.geometry.vertices[2*i+1].z = ((this.innerRadius + this.width) + (this.width * this.index)) * Math.sin(this.totalCurls * angleVertex) * (this.amplitude * Math.sin(noise))
    }
    this.geometry.verticesNeedUpdate = true;
  }
}
