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
    this.outerRadius = 70
    this.totalCurls = 2.
    this.variationRatio = 0.0058
    this.noiseSize = 180.5
    this.colorBackground = true
    this.coloredDivisions = true
    this.colorTransparency = false
    this.breakSize = 0.3
    this.breakFrequency = 10.0

    this.colors = [
      new THREE.Color(0x7292b6),
      new THREE.Color(0xffffff),
      new THREE.Color(0x4a4c90),
      new THREE.Color(0xffffff),
      new THREE.Color(0x513a80),
      new THREE.Color(0xffffff)
    ]

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


    this.lightColors = [
      new THREE.Color("rgb(51, 255, 204)"),
      new THREE.Color("rgb(0, 51, 255)"),
      new THREE.Color("rgb(166, 10, 122)"),
      new THREE.Color("rgb(255, 107, 0)")

    ]

    this.darkColors = [
      new THREE.Color("rgb(0, 51, 255)"),
      new THREE.Color("rgb(51, 0, 102)"),
      new THREE.Color("rgb(166, 10, 122)")
      // new THREE.Color("rgb(255, 107, 0)")
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
    this.createdElement = true

    this.resize()
    this.createStats()

    this.createScene()
    this.createRibbons()
    this.animate()
  }

  resize() {
    this.width = window.innerWidth * 2,
    this.height = window.innerHeight * 2
  }

  createStats() {
    this.stats = new Stats()
    this.stats.showPanel( 0 )
    document.body.appendChild( this.stats.dom )
  }

  createScene() {

    this.renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true})
    this.renderer.setSize( this.width, this.height )
    this.renderer.shadowMapType = THREE.PCFSoftShadowMap;
    this.element.appendChild( this.renderer.domElement)
    
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 65, this.width / this.height, 1, 2000 )
    this.scene.fog = new THREE.Fog( 0x000000, 1, 1000 )

    // this.composer = new THREE.EffectComposer( this.renderer )
    // this.composer.addPass( new THREE.RenderPass( this.scene, this.camera ) )
  
    // this.shaderPass = new THREE.ShaderPass(threeShaderFXAA)
    // this.shaderPass.renderToScreen = true
    // this.composer.addPass(this.shaderPass)

    // this.shaderPass.uniforms.resolution.value.set(this.width, this.height)
    
    this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )
    this.controls.enableDamping = false 
    this.controls.dampingFactor = 0.8
    this.controls.minDistance = 1
    this.controls.maxDistance = 100
    this.controls.update()
    this.controls.enableRotate = false
  }

  createRibbons() {
    this.ribbon = new HelixLogoRibbon(this.gradientColors[3], this.gradientColors[4])
    this.scene.add(this.ribbon.ribbonMesh)
  }

  calculateColors(temperatureAverage) {
    let colorSegments = 1 / (this.gradientColors.length - 1) 
    let gradientGuide = Math.floor(temperatureAverage / colorSegments)

    if (this.colorBackground) {
      this.element.style.backgroundColor = this.backgroundColors[gradientGuide]
    } else {
      this.element.style.backgroundColor = '#ffffff'
    }

    let colorlightSegments = 1 / (this.lightColors.length - 1)
    let colorLight01 = Math.ceil(temperatureAverage / colorlightSegments)
    let colorLight02 = Math.floor(temperatureAverage / colorlightSegments)
    let colorLightInterpolation = Math.abs(Math.ceil(temperatureAverage / colorlightSegments) - (temperatureAverage / colorlightSegments))

    this.ribbon.uniform.colorLight1.value = this.lightColors[colorLight01]
    this.ribbon.uniform.colorLight2.value = this.lightColors[colorLight02]
    this.ribbon.uniform.colorLightInterpolation.value = colorLightInterpolation

    let colorDarkSegments = 1 / (this.darkColors.length - 1)
    let colorDark01 = Math.ceil(temperatureAverage / colorDarkSegments)
    let colorDark02 = Math.floor(temperatureAverage / colorDarkSegments)
    let colorDarkInterpolation = Math.abs(Math.ceil(temperatureAverage / colorDarkSegments) - (temperatureAverage / colorDarkSegments))

    this.ribbon.uniform.colorDark1.value = this.darkColors[colorDark01]
    this.ribbon.uniform.colorDark2.value = this.darkColors[colorDark02]
    this.ribbon.uniform.colorDarkInterpolation.value = colorDarkInterpolation
    this.ribbon.uniform.colorIsDark.value = this.colorsWeight[gradientGuide]
    this.ribbon.uniform.colorA.value = this.gradientColors[gradientGuide]
    this.ribbon.uniform.colorB.value = this.gradientColors[gradientGuide + 1]
  }

  updateValues(values) {
    this.lineCount = values['lineCount']
    this.lineSpeed = values['lineSpeed']
    this.lineSeparation = values['lineSeparation']
    this.colorScale = values['colorScale']
    this.innerRadius = values['innerRadius']
    this.totalCurls = values['totalCurls']
    this.variationRatio = values['variationRatio']
    this.breakSize = values['breakSize']
    this.breakFrequency = values['breakFrequency']
  }

  animate() {
    requestAnimationFrame(() => { this.animate() })
    this.stats.begin()
    this.time += .006
    // Update Ribbons
    this.ribbon.uniform.time.value = this.time
    this.ribbon.uniform.innerRadius.value = (1. - 0.1) * this.ribbon.uniform.innerRadius.value + 0.1 * this.innerRadius; 
    this.ribbon.uniform.outerRadius.value = this.outerRadius
    this.ribbon.uniform.totalCurls.value = (1. - 0.3) * this.ribbon.uniform.totalCurls.value + 0.3 * this.totalCurls; 
    this.ribbon.variationRatio = (1. - 0.1) * this.ribbon.variationRatio + 0.1 * this.variationRatio
    this.ribbon.noiseSize = this.noiseSize
    this.ribbon.variator +=  this.variationRatio

    this.ribbon.uniform.coloredDivisions.value = this.coloredDivisions
    this.ribbon.uniform.lineSpeed.value = this.lineSpeed
    this.ribbon.uniform.lineBreakSeparation.value =  this.lineSeparation
    this.ribbon.uniform.lineCount.value = (1. - 0.1) * this.ribbon.uniform.lineCount.value + 0.1 * this.lineCount
    this.ribbon.uniform.breakSize.value = this.breakSize; 
    this.ribbon.uniform.breakFrequency.value = (1. - 0.1) * this.ribbon.uniform.breakFrequency.value + 0.1 * this.breakFrequency 
    
    this.calculateColors(this.colorScale)
    this.ribbon.drawGeometry()
    this.stats.end()
    // this.composer.render()
    this.renderer.render( this.scene, this.camera )

  }
}