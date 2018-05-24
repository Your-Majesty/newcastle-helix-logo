class HelixLogoUI {
  constructor(args) {
    this.element = document.querySelector('.helix-logo-ui')
    this.timeline = new HelixLogoUITimeline()
    this.anchor = new HelixLogoUIAnchor()
    this.buttons = new HelixLogoUIButtons()
    this.download = new HelixLogoUIDownload()
  }

  init() {
    this.timeline.init()
    this.buttons.createButtons()
    this.anchor.mapAnchorValue(0)
    this.download.init()
  }

  animateIn() {
    this.element.style.display = 'block'
    this.element.style.opacity = 1
    this.timeline.animateIn()
  }

  animateOut() {
    this.element.style.display = 'none'
    this.element.style.opacity = 0
    this.timeline.animateOut()
  }
  
  mapValuesTimeline(index) {
    this.buttons.mapButtonsValues(index)
    this.anchor.mapAnchorValue(index)
  }

  mapValues(index) {
    this.timeline.mapValues()
    this.mapValuesTimeline(index)
  }
}