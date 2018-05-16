class HelixLogoUI {
  constructor(args) {
    this.timeline = new HelixLogoUITimeline()
    
  }

  init() {
    this.timeline.createLines()

  }

  animateIn() {
    this.timeline.animateIn()

  }

  animateOut() {



  }

  mapValues() {
    this.timeline.mapValues()

  }
}