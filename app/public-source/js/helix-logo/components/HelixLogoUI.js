class HelixLogoUI {
  constructor(args) {

    this.element = document.querySelector('.helix-logo-ui')
    this.timeline = new HelixLogoUITimeline()
    this.anchor = new HelixLogoUIAnchor()
    this.buttons = new HelixLogoUIButtons()
  }

  init() {
    this.timeline.createLines()
    this.buttons.createButtons()
    this.anchor.mapAnchorValue(0)
  }

  animateIn() {
    this.element.style.display = 'block'
    this.element.style.opacity = 1
    this.timeline.animateIn()

  }

  animateOut() {

    this.element.style.display = 'none'
    this.element.style.opacity = 0

  }

  mapValues() {
    this.timeline.mapValues()
    this.buttons.mapButtonsValues(0)
    this.anchor.mapAnchorValue(0)
  }
}