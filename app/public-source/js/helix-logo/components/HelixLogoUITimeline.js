class HelixLogoUITimeline {
  constructor() {
    this.element = document.querySelector('.helix-logo-timeline')
    this.linesWrapper = document.querySelector('.helix-logo-timeline__lines')
    this.isActive = false  
    
    this.moveTimeline = this.moveTimeline.bind(this)

    this.totalCollection = 0
    this.linesExist = false

    this.currentPercentage = -65.3
    this.percentageDragged = 0
    this.totalDrag = -65.3
    this.lastTotalDrag = -65.3

    this.isDragging = false

    this.counterLess = 0
    this.minPercentage = 32.5
    this.maxPercentage = 65.3
    this.percentageConversion = 95 / 33
  
    this.touchElement = new Hammer(this.linesWrapper)
    this.touchElement.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }))
    this.touchElement.on("pan", this.moveTimeline)
  
    this.playButton = document.querySelector('.helix-logo-anchor__play button')
    this.playTimeline = this.playTimeLine.bind(this)

    this.indexTimeline = 0
    this.animationFrame = null

    this.isPlaying = false
    this.time = 0
  }

  animateIn() {
    this.playButton.addEventListener('click', this.playTimeline)
    this.element.style.display = 'block'

    TweenLite.to(this.element, 0.4, {x:'-50%', y: '0%', ease: Sine.easeOut, onComplete: () => {
      this.isActive = true
    }})
    this.animate()
  }
  
  animateOut() {
    this.playButton.removeEventListener('click', this.playTimeline)
    TweenLite.to(this.element, 0.4, {x:'-50%', y: '100%', onComplete: () => {
      this.element.style.display = 'none'
      this.reset()
      this.isActive = false
    }})
    this.pause()
  }

  createLines() {
    this.totalCollection = DataCollector.collection.length - 1
    for (var i = 0; i < (this.totalCollection + 1) * 3; i++) {
      let line = document.createElement('div')
      line.classList.add('helix-logo-timeline__line')
      this.linesWrapper.appendChild(line)
    }
    this.lines = this.linesWrapper.querySelectorAll('.helix-logo-timeline__line')
  }

  mapValues() {
    for (limit of DataCollector.limits){
      if (limit.name == 'energy') {
        DataCollector.collection.forEach((dataPoint, index) => {
          TweenLite.to(this.lines[index + this.totalCollection], 0.8 * Math.random(), {y:`${DataInterpolator.linearInterpolation(limit.min, limit.max, DataCollector.collection[index].energy, 99, 0)}%`, delay: 1.2 * Math.random(), ease: Circ.easeOut})
        })
      }
    }
  }

  reset() {
    this.totalDrag = -65.3
    this.currentPercentage = -65.3
    this.lastTotalDrag = -65.3
  }

  rewindTimeline() {
    this.indexTimeline = this.totalCollection
    this.totalDrag = -((Math.abs(this.indexTimeline - this.totalCollection) / this.percentageConversion) + this.minPercentage)
    this.currentPercentage = this.totalDrag
    TimelineCollector.updateIndex(this.indexTimeline)

    setTimeout(() => {
      this.isPlaying = true
    }, 1200)
  }

  playTimeLine() {
    if (this.indexTimeline == 0) {
      this.rewindTimeline()
    } else {
      this.isPlaying = true
    }
  }

  animate() {
    this.animationFrame = requestAnimationFrame(() => { this.animate() })
    if (this.isPlaying && this.indexTimeline > 0) {
      this.time += 0.07

      if (this.time >= 1) {
        this.time = 0
        this.indexTimeline =  this.indexTimeline > 0 ? this.indexTimeline - 1 : 0
      }

      this.totalDrag = -(((Math.abs(this.indexTimeline - this.totalCollection)) / this.percentageConversion) + this.minPercentage)
      this.currentPercentage = this.totalDrag

      TimelineCollector.updateIndex(this.indexTimeline)
      this.lastTotalDrag += (this.totalDrag - this.lastTotalDrag) * 0.02
      this.linesWrapper.style.transform =  `translateX(${this.lastTotalDrag}%)`

    } else {
      this.isPlaying = false
      this.lastTotalDrag += (this.totalDrag - this.lastTotalDrag) * 0.09
      this.linesWrapper.style.transform =  `translateX(${this.lastTotalDrag}%)`
    }
  }

  pause() {
    this.isPlaying = false
    this.indexTimeline = 0
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame)
    }
  }

  moveTimeline(ev) {
    this.isPlaying = false
    this.percentageDragged = (ev.deltaX / this.linesWrapper.offsetWidth) * 100
    this.totalDrag = (this.currentPercentage + this.percentageDragged)
    
    if (this.totalDrag <= -this.maxPercentage) {
      this.totalDrag = -this.maxPercentage
    } else if (this.totalDrag >= -this.minPercentage) {
      this.totalDrag = -this.minPercentage
    }

    if (Math.abs(Math.ceil((Math.abs(this.totalDrag) - this.minPercentage) * this.percentageConversion)) !== this.indexTimeline) {
      if ((Math.abs(this.totalDrag) >= this.minPercentage) && (Math.abs(this.totalDrag) <= this.maxPercentage)) {
        this.indexTimeline = Math.abs((Math.abs(Math.ceil((Math.abs(this.totalDrag) - this.minPercentage) * this.percentageConversion))) - this.totalCollection)
        TimelineCollector.updateIndex(this.indexTimeline)
      }
    }
    
    if (ev.isFinal) {
      this.currentPercentage = this.currentPercentage + this.percentageDragged
      if (Math.abs(this.currentPercentage) <= this.minPercentage) {
        this.totalDrag = -this.minPercentage
        this.currentPercentage = -this.minPercentage
      } else if(Math.abs(this.currentPercentage) >= this.maxPercentage) {
        this.totalDrag = -this.maxPercentage
        this.currentPercentage = -this.maxPercentage
      }
    }
  }
}