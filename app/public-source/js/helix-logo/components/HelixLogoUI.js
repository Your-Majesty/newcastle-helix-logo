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
    // this.animateIn()
  }

  animateIn() {
    this.element.style.display = 'block'
    this.element.style.opacity = 1
    this.timeline.animateIn()

  }

  animateOut() {



  }

  mapValues() {
    this.timeline.mapValues()
    this.buttons.mapButtonsValues(0)
  }
}