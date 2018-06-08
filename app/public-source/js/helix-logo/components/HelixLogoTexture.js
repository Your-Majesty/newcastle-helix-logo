class HelixLogoTexture {
  constructor() {
    this.element = document.querySelector('.helix-logo-element')
    this.time = 0
    this.createdElement = false
    this.colorScale = 0.2
    this.lineSpeed = 0.1
    this.lineSeparation = 0.5
    this.lineCount = 10.
    
    this.innerRadius = 20.
    this.outerRadius = 65
    this.totalCurls = 2.
    this.variationRatio = 0.0058
    this.variator = 0.1
    this.noiseSize = 180.5
    this.breakSize = 0.3
    this.breakFrequency = 10.0
    this.noiseSize = 280.5

    this.colorBackground = false
    this.coloredDivisions = false
    this.colorTransparency = false
    this.isMonochrome = false
    this.gradientGuide = 0
    this.colorTiming = 0
    
    this.animationFrame = null
    this.isPlaying = false
    this.resize = this.resize.bind(this)

    this.allRibbons = []
    this.noiseArray = []
    this.perlin = new ClassicalNoise()
    this.totalRibbons = 12

    this.backgroundColors = [
      '#58f9ea',
      '#2e0862',
      '#2d015b',
      '#9a0d6f'
    ]

    this.colorsWeight = [
      false,
      true,
      true,
      false
    ]
    
    this.gradientColors = [
      // Teal
      new THREE.Color("rgb(51, 255, 204)"),
      // Blue
      new THREE.Color("rgb(0, 51, 255)"),
      // Indigo
      new THREE.Color("rgb(51, 0, 102)"),
      // Magenta
      new THREE.Color("rgb(166, 10, 122)"),
      // Orange
      new THREE.Color("rgb(255, 107, 0)")
    ]
  }

  init() {
    this.createStats()
    this.createdElement = true
    this.analizeURL(window.location.href.split('?')[1])
    this.createScene()
    this.createRibbons()
    this.createCaptureCanvas() 
    this.resize()
    this.play()
  }

  analizeURL(url) {
    if (url == 'white' || url == 'black') {
      this.isMonochrome = true
      this.coloredDivisions = false
      this.colorBackground = false
      this.monochromeColor = url == 'white' ? 1. : 0.
    } else {
      this.coloredDivisions = false
      this.colorBackground = true
      this.isMonochrome = false
    }
  }

  pause() {
    window.removeEventListener('resize', this.resize, false)
    if (this.animationFrame) {
      // this.isPlaying = false
      window.cancelAnimationFrame(this.animationFrame)
    }
  }

  play() {
    window.addEventListener('resize', this.resize, false)
    this.animate()
  }

  resize() {
    this.width = window.innerWidth,
    this.height = window.innerHeight
    this.camera.updateProjectionMatrix()
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.renderer.setSize( window.innerWidth, window.innerHeight)
 
      
    if (this.width >= this.height) {
      this.captureCanvas.width = this.height * this.pixelRatio
      this.captureCanvas.height = this.height * this.pixelRatio
    } else {
      this.captureCanvas.width = this.width * this.pixelRatio
      this.captureCanvas.height = this.width * this.pixelRatio
    }
  }

  zoomInCamera() {
    TweenLite.to(this.camera.position, 0.6, {z: 1000, y:-240, ease: Sine.easeOut})
    TweenLite.to(this.camera.rotation, 0.6, {x: (35 * Math.PI / 180), ease: Sine.easeOut})
  }

  zoomOutCamera() {
    TweenLite.to(this.camera.position, 0.6, {z: 0, y:0, ease: Sine.easeOut})
    TweenLite.to(this.camera.rotation, 0.6, {x: (50 * Math.PI / 180), ease: Sine.easeOut})
  }

  createStats() {
    this.stats = new Stats()
    this.stats.showPanel( 0 )
    document.body.appendChild( this.stats.dom )
  }

  createScene() {
    this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true, preserveDrawingBuffer: true} )
    this.renderer.setSize( this.width, this.height )
    this.pixelRatio = window.devicePixelRatio
    this.renderer.setPixelRatio( window.devicePixelRatio )
    this.element.appendChild( this.renderer.domElement)
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 39, window.innerWidth / window.innerHeight, 1, 900 )
    this.camera.lookAt(0,0,0) 
    this.camera.rotation.x = 50 * Math.PI / 180
  }

  createRibbons() {
    for (var i = 0; i < this.totalRibbons; i++) {
      let ribbon = new HelixLogoRibbon(this.gradientColors[3], this.gradientColors[4], this.isMonochrome, this.monochromeColor, i)
      this.allRibbons.push(ribbon)  
      this.scene.add(ribbon.ribbonMesh)
    }
    this.totalRibbonVertices = this.allRibbons[0].bufferGeometry.attributes.position.count/2
  }

  calculateRibbonsNoise() {
    this.noiseArray = []
    for (var i = 0; i < this.totalRibbonVertices; i++) {
      this.noiseArray.push(this.perlin.noise(i * this.variationRatio * Math.cos(this.noiseSize) * Math.sin(0.9), i * this.variationRatio * Math.cos(this.noiseSize) * Math.sin(0.3), i * this.variationRatio + this.variator * Math.sin(0.3) * Math.cos(0.2) * 6.6))
    }
    this.allRibbons.forEach((ribbon) => {
      ribbon.drawGeometry(this.noiseArray)
    })
  }

  createCaptureCanvas() {
    this.watermarkDark = new Image()
    this.watermarkDark.src = `${heroLogoURL}/images/newCastleLogoDark.png`

    this.watermarkLight = new Image()
    this.watermarkLight.src = `${heroLogoURL}/images/newCastleLogoWhite.png`
    this.captureCanvas = document.createElement('canvas')
    this.element.appendChild(this.captureCanvas)
    this.captureContext = this.captureCanvas.getContext('2d')
  }  
  
  createShot() {
    this.watermark = SunCalculator.darkTheme ? this.watermarkLight : this.watermarkDark
    this.captureContext.fillStyle = this.colorBackground ? this.backgroundColors[this.gradientGuide] : 'white'
    this.captureContext.fillRect(0, 0, this.captureCanvas.width, this.captureCanvas.height)
    if (this.width < this.height) {
      this.captureContext.drawImage(this.renderer.domElement, 0, -this.height/2)
    } else {
      this.captureContext.drawImage(this.renderer.domElement, 0, 0)
    }
    this.captureContext.drawImage(this.watermark, (this.captureCanvas.width / 2) - 170, (this.captureCanvas.height / 2) - 100)
    return this.captureCanvas.toDataURL('image/jpg', .9)
  }

  calculateColors(temperatureAverage) {
    let colorSegments = 1.1 / (this.gradientColors.length - 1) 
    if (this.gradientGuide !== Math.floor(temperatureAverage / colorSegments)) {
      this.animateColor = true
      this.colorTiming = 0

      this.lastGradientGuide = this.gradientGuide
      this.gradientGuide = Math.floor(temperatureAverage / colorSegments)

      UiColorTracker.currentColor = this.lastGradientGuide
      UiColorTracker.setUIColor(this.gradientGuide)


      this.allRibbons.forEach((ribbon) => {
        ribbon.uniform.colorA.value = this.gradientColors[this.gradientGuide]
        ribbon.uniform.colorLastA.value = this.gradientColors[this.lastGradientGuide]
        ribbon.uniform.colorB.value = this.gradientColors[this.gradientGuide + 1]
        ribbon.uniform.colorLastB.value = this.gradientColors[this.lastGradientGuide + 1]
      })
    }

    if (!this.isMonochrome) {
      if (this.colorBackground) {
        this.element.style.backgroundColor = this.backgroundColors[this.gradientGuide]
      } else {
        this.element.style.backgroundColor = 'white'
      }
    } else {
      this.element.style.backgroundColor = 'transparent'
    }
  }

  updateValues(values) {
    this.lineSpeed = values['lineSpeed']
    this.lineSeparation = values['lineSeparation']
    this.colorScale = values['colorScale']
    this.innerRadius = values['innerRadius']
    this.totalCurls = Math.floor(values['totalCurls'])
    this.amplitude = values['amplitude']
    // console.log(this.totalCurls)
    // this.variationRatio = values['variationRatio']
    this.breakSize = values['breakSize']
    this.breakFrequency = values['breakFrequency']
    this.calculateColors(this.colorScale)



    if (!this.isPlaying) {
      this.updateCurves()
      this.renderer.render( this.scene, this.camera )
    }
  }
  
  updateCurves() {
    this.calculateRibbonsNoise()
  }

  animate() {
    this.stats.begin()
    this.isPlaying = true
    this.animationFrame = requestAnimationFrame(() => { this.animate() })
    this.time += .003
    if (this.animateColor) {
      if (this.colorTiming <= 1) {
        this.colorTiming += .01
        this.allRibbons.forEach((ribbon) => {
          ribbon.uniform.colorTiming.value = this.colorTiming
        })
      } else {
        this.animateColor = false
      }
    }
   

    this.allRibbons.forEach((ribbon) => {
      ribbon.uniform.innerRadius.value = (1. - 0.1) * ribbon.uniform.innerRadius.value + 0.1 * this.innerRadius 
      ribbon.uniform.totalCurls.value = (1. - 0.1) * ribbon.uniform.totalCurls.value + 0.1 * this.totalCurls
      ribbon.uniform.coloredDivisions.value = this.coloredDivisions
      ribbon.variationRatio = (1. - 0.1) * ribbon.variationRatio + 0.1 * this.variationRatio
      ribbon.uniform.time.value = this.time
      ribbon.uniform.lineSpeed.value = this.lineSpeed
      ribbon.uniform.breakSize.value = this.breakSize 
      ribbon.uniform.breakFrequency.value = (1. - 0.1) * ribbon.uniform.breakFrequency.value + 0.1 * this.breakFrequency 
      ribbon.uniform.coloredDivisions.value = this.coloredDivisions
      ribbon.uniform.amplitude.value = this.amplitude
      ribbon.calculateThickness(this.lineSeparation)
    })

    this.variator +=  this.variationRatio
    this.updateCurves()
    this.stats.end()
    this.renderer.render( this.scene, this.camera )
  }
}