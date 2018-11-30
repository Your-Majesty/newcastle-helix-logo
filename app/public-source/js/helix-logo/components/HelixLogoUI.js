class HelixLogoUI {
  constructor(args) {
    this.element = document.querySelector('.helix-logo-ui')
    this.timeline = new HelixLogoUITimeline()
    this.anchor = new HelixLogoUIAnchor()
    this.buttons = new HelixLogoUIButtons()
    this.slider = new HelixLogoUISlider()
    this.download = new HelixLogoUIDownload()

    this.xmasMode = false

    this.scienceCentralOverlay = new HelixLogoScienceOverlay()

    this.overlay = new HelixLogoUIOverlay()
    this.isTableExperience = false
    this.timelineIsActive = false
    this.sliderIsActive = false

    this.currentSensorName = null

    this.element.style.display = 'block'
    this.element.style.opacity = 1
    this.xmasSensorNames = ['Snowfall', 'Temp', 'Energy', 'Elves working', 'Reindeer speed' ]

    this.currentIndex = 0
    this.theme = null

    // Added this so you can develop without having to change code to show the ui
    if (location.href.indexOf('show-ui') > -1) {
      this.animateIn()
    }

    this.animateIn = this.animateIn.bind(this)
    this.animateOut = this.animateOut.bind(this)
    this.animateOverlayOut = this.animateOverlayOut.bind(this)

    this.buttons.buttons.addEventListener('uiButtonPressed', (e) => {
      if (!this.sliderIsActive) {
        this.showSliders()
      }

      this.currentSensorName = e.detail
      SliderCollector.currentSensor = e.detail


      if (this.xmasMode) {
        this.overlay.setInfoXmas(e.detail)
        this.anchor.mapSensorNameXmas(e.detail)
        this.anchor.mapSensorValueXmas(SliderCollector.getCurrentSensor())
      } else {
        this.overlay.setInfo(e.detail)
        this.anchor.mapSensorName(e.detail)
        this.anchor.mapSensorValue(SliderCollector.getCurrentSensor())
      }
      
      this.slider.setPercentage(e.detail)
    })

    this.overlay.element.addEventListener('UIOpenedModal', (e) => {
      this.scienceCentralOverlay.closeModal()
    })
    this.scienceCentralOverlay.element.addEventListener('UIOpenedModal', (e) => {
      this.overlay.closeModal()
    })
  }

  init() {
    this.buttons.createButtons()
    this.anchor.mapAnchorValue(0)
    this.timeline.createLines()

    if (isTabletExperience) {
      this.zoom = new HelixLogoUIScale()
      this.video = new HelixUITabletVideo()
      this.tabletOverlay = new HelixLogoUITabletOverlay()
      this.newletter = new HelixLogoUINewsletter()
      this.element.classList.add('is-tablet-experience')
      this.download.hide()
      this.tabletOverlay.overlay.addEventListener('uiTabletOverlayClosed', this.animateOverlayOut)
      this.tabletOverlay.overlay.addEventListener('uiTabletOverlayOpen', this.animateOut)
      this.isOnline()
    } else {
      this.download.show()
    }
  }

  activateXmas() {
    this.xmasMode = true
    this.buttons.activateXmas()
    this.anchor.activateXmas()
  

    if (this.sliderIsActive) {

      this.overlay.setInfoXmas(SliderCollector.currentSensor)
      this.buttons.mapButtonsSliderValues(SliderCollector.getCurrentSensor())
      this.anchor.mapSensorNameXmas(this.currentSensorName)
      this.anchor.mapSensorValueXmas(SliderCollector.getCurrentSensor())
    }


  }

  deactivateXmas() {

    this.xmasMode = false
    this.buttons.deactivateXmas()
    this.anchor.deactivateXmas()


    if (this.sliderIsActive) {
      this.overlay.setInfo(SliderCollector.currentSensor)
      this.buttons.mapButtonsSliderValues(SliderCollector.getCurrentSensor())
      this.anchor.mapSensorName(this.currentSensorName)
      this.anchor.mapSensorValue(SliderCollector.getCurrentSensor())
    }
  }

  isOnline() {
    setInterval(() => {
      if(!navigator.onLine) {
        this.tabletOverlay.buttonNewsletter.style.display = 'none'
      } else {
        this.tabletOverlay.buttonNewsletter.style.display = 'inline-block'
      }
    }, 200)
  }

  animateOverlayOut() {
    if (this.sliderIsActive) {
      this.anchor.animateIn()
      this.showSliders()
      this.buttons.animateIn()
    } else {
      this.anchor.animateIn()
      this.showTimeline()
      this.buttons.animateIn()
    }
  }

  animateIn() {
    this.anchor.animateIn()
    this.showTimeline()
    this.buttons.animateIn()

    setTimeout(() => {
      document.querySelector('.helix-logo-activate-snow').style.opacity = 1
     }, 2000);
     
  }

  animateOut() {
    this.anchor.animateOut()
    this.buttons.animateOut()
    this.slider.animateOut()
    this.timeline.animateOut()
  }

  showSliders() {
    if (this.timelineIsActive) {
      this.hideTimeline()
      this.anchor.playButtonAction(false)
    }
    this.anchor.resetButtonAction(true)
    this.sliderIsActive = true
    this.overlay.activate()
    this.slider.animateIn()
  }

  resetValues() {
    this.showTimeline()
    this.overlay.deactivate()
    this.overlay.closeModal()
    this.buttons.resetButtons()
    this.mapValues(0)
  }

  hideSliders() {
    this.slider.animateOut()
    this.sliderIsActive = false
  }

  showTimeline() {
    if (this.sliderIsActive) {
      this.anchor.resetButtonAction(false)
      this.hideSliders()
    }
    this.anchor.playButtonAction(true)
    this.timeline.animateIn()
    this.timelineIsActive = true
  }

  hideTimeline() {
    this.timeline.animateOut()
    this.timelineIsActive = false
  }

  mapValuesTimeline(index) {
    this.currentIndex = index
    this.buttons.mapButtonsValues(index)
    this.anchor.mapAnchorValue(index)
    this.updateLightTheme(DataInterpolator.calculatedPoint['colorScale'])
  }

  updateLightTheme(value) {
    if (this.theme) {
      if ((value < 0.27)) {
        document.querySelector('body').classList.remove('helix-theme-dark')
      } else {
        document.querySelector('body').classList.add('helix-theme-dark')
      }
    }
  }

  mapValuesSlider() {
    this.updateLightTheme(SliderCollector.sensors['temperature'].percentage)
    this.anchor.mapSensorValue(SliderCollector.getCurrentSensor())
    this.buttons.mapButtonsSliderValues(SliderCollector.getCurrentSensor())

    this.event = new CustomEvent('UISliderTemperature', {bubbles: true})
    window.dispatchEvent(this.event)
  }

  mapValues(index) {
    this.timeline.mapValues()
    this.mapValuesTimeline(index)
  }

  updateTheme(lightTheme) {
    this.theme = lightTheme

    if (lightTheme) {
      document.querySelector('body').classList.add('helix-theme-dark')
      window.parent.postMessage(JSON.stringify({ color: 'white' }), '*')
    } else {
      document.querySelector('body').classList.remove('helix-theme-dark')
      window.parent.postMessage(JSON.stringify({ color: 'black' }), '*')
    }
  }

  updateXmasTheme(isXmas) {
    this.theme = isXmas

    if (isXmas) {
      document.querySelector('body').classList.add('helix-theme-xmas')
    } else {
      document.querySelector('body').classList.remove('helix-theme-xmas')
    }
  }
}
