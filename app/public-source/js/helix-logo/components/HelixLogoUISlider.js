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
      this.percentageDragged = (ev.deltaX / this.slide.offsetWidth) * 100
      this.totalDrag = this.currentPercentage + this.percentageDragged
      
      if (this.totalDrag <= this.maxPercentage) {
        this.totalDrag = this.maxPercentage
        this.currentPercentage = this.maxPercentage
        this.percentageDragged = 0
        SliderCollector.updateValues((100 - (50 + this.totalDrag))/ 100) 
      } else if(this.totalDrag >= this.minPercentage) {
        this.totalDrag = this.minPercentage
        this.currentPercentage = this.minPercentage
        this.percentageDragged = 0
        SliderCollector.updateValues((100 - (50 + this.totalDrag))/ 100) 
      } else {
        this.percentageDragged = (ev.deltaX / this.slide.offsetWidth) * 100
        this.totalDrag = this.currentPercentage + this.percentageDragged
        SliderCollector.updateValues((100 - (50 + this.totalDrag))/ 100) 
      }
    if (ev.isFinal) {
      this.currentPercentage = this.currentPercentage + this.percentageDragged
      
    }
  }

  setPercentage(sensor) {
    console.log(SliderCollector.sensors[`${sensor}`].percentage)

    let percentage = 100 - (SliderCollector.sensors[`${sensor}`].percentage * 100) - 50
    this.totalDrag = percentage
    this.currentPercentage = percentage
    this.percentageDragged = percentage  
  }

  animateIn() {
    this.element.style.display = 'block'
    TweenLite.to(this.element, 0.2, {y: '0%', delay: 0.3, ease: Circ.easeOut})
    this.animate()
  }

  animateOut() {
    window.cancelAnimationFrame(this.animationFrame)
    TweenLite.to(this.element, 0.4, {y: '100%', onComplete: () => {
      this.element.style.display = 'none'
    }})
  }
}