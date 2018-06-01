class HelixLogoUISlider {
  
  constructor() {
    this.element = document.querySelector('.helix-logo-slider')
    this.slide = document.querySelector('.helix-logo__slide')
    this.color = document.querySelector('.helix-logo__slide-inner')
    this.percentageDragged = 0

    this.totalCollection = 0
    this.moveSlider = this.moveSlider.bind(this)
    this.currentPercentage = 0
    this.percentageDragged = 0
    this.totalDrag = 0

    this.minPercentage = 50
    this.maxPercentage = -50

    this.percentageConversion = 100 / 100

    this.touchElement = new Hammer(this.element)
    this.touchElement.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }))
    this.touchElement.on("pan", this.moveSlider)

    this.indexTimeline = 0
    this.animationFrame = null
    this.time = 0
  }

  animate() {
    this.animationFrame = requestAnimationFrame(() => { this.animate() })
    this.slide.style.transform =  `translateX(${this.totalDrag}%)`
    this.color.style.transform =  `translateX(${-(50 + this.totalDrag)}%)`
  }

  moveSlider(ev) {
    this.percentageDragged = (ev.deltaX / this.element.offsetWidth) * 100
    this.totalDrag = this.currentPercentage + this.percentageDragged
    
    if (ev.isFinal) {
      this.currentPercentage = this.currentPercentage + this.percentageDragged
      
      if (-this.currentPercentage <= -this.minPercentage) {
          this.totalDrag = this.minPercentage
      }
    }
  }

  animateIn() {
    this.element.style.display = 'block'
    TweenLite.to(this.element, 0.4, {y: 0})
    this.animate()
  }

  animateOut() {
    window.cancelAnimationFrame(this.animationFrame)
    TweenLite.to(this.element, 0.4, {y: '100%', onComplete: () => {
      this.element.style.display = 'none'
    }})
  }
}