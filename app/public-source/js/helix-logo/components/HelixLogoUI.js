class HelixLogoUI {
  constructor(args) {
    this.element = document.querySelector('.helix-logo-ui')
    this.timeline = new HelixLogoUITimeline()
    this.anchor = new HelixLogoUIAnchor()
    this.buttons = new HelixLogoUIButtons()
    this.slider = new HelixLogoUISlider()
    this.download = new HelixLogoUIDownload()
   
    this.overlay = new HelixLogoUIOverlay()
    this.isTableExperience = false
    this.timelineIsActive = false
    this.sliderIsActive = false

    this.element.style.display = 'block'
    this.element.style.opacity = 1

    this.currentIndex = 0

    this.animateIn = this.animateIn.bind(this)
    this.animateOut = this.animateOut.bind(this)
    this.animateOverlayOut = this.animateOverlayOut.bind(this)

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
      document.querySelector('body').classList.add('helix-theme-dark') 
    } else {
      document.querySelector('body').classList.remove('helix-theme-dark') 
    }
  }
}