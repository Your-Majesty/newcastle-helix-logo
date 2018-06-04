class HelixLogoUI {
  constructor(args) {
    this.element = document.querySelector('.helix-logo-ui')
    this.timeline = new HelixLogoUITimeline()
    this.anchor = new HelixLogoUIAnchor()
    this.buttons = new HelixLogoUIButtons()
    this.download = new HelixLogoUIDownload()
    this.slider = new HelixLogoUISlider()
    this.overlay = new HelixLogoUIOverlay()

    this.timelineIsActive = false
    this.sliderIsActive = false
    this.animateIn()

    this.buttons.buttons.addEventListener('uiButtonPressed', (e) => {
      if (!this.sliderIsActive) {
        this.showSliders()
      }
      this.overlay.setInfo(e.detail)
      SliderCollector.currentSensor = e.detail
      this.anchor.mapSensorName(e.detail)
      this.anchor.mapSensorValue(SliderCollector.getCurrentSensor())
      this.slider.setPercentage(e.detail)
    })

    // this.anchor.resetButton.addEventListener('uiResetPressed', (e) => {
    //   this.showTimeline()
    //   this.overlay.deactivate()
    //   this.overlay.closeModal()
    //   this.buttons.resetButtons()
    //   this.mapValues(TimelineCollector.currentIndex)
    // })
  }

  init() {
    this.buttons.createButtons()
    this.anchor.mapAnchorValue(0)
    this.download.init()
    this.timeline.createLines()
  }

  animateIn() {
    this.element.style.display = 'block'
    this.element.style.opacity = 1
    this.anchor.animateIn()
    this.showTimeline()
  }

  animateOut() {
    this.element.style.display = 'none'
    this.anchor.animateOut()

    this.element.style.opacity = 0
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
    this.mapValues(TimelineCollector.currentIndex)
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
    SliderCollector.getCurrentValues(index)
    this.buttons.mapButtonsValues(index)
    this.anchor.mapAnchorValue(index)
  }

  mapValuesSlider() {
    this.anchor.mapSensorValue(SliderCollector.getCurrentSensor())
    this.buttons.mapButtonsSliderValues(SliderCollector.getCurrentSensor())
  }

  mapValues(index) {
    this.timeline.mapValues()
    this.mapValuesTimeline(index)
  }

  updateTheme(lightTheme) {
    if (lightTheme) {
      this.element.classList.add('helix-theme-dark') 
    } else {
      this.element.classList.remove('helix-theme-dark') 
    }
  }
}