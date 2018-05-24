class HelixLogoUITimeline {
  constructor() {
    this.element = document.querySelector('.helix-logo-timeline')
    this.linesWrapper = document.querySelector('.helix-logo-timeline__lines')
      
    this.moveTimeline = this.moveTimeline.bind(this)

    this.totalCollection = 0
    this.linesExist = false

    this.currentPercentage = -65.75
    this.percentageDragged = 0
    
    this.totalDrag = -65.75
    this.lastTotalDrag = -65.75
  
    this.touchElement = new Hammer(this.linesWrapper)
    this.touchElement.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }))
    this.touchElement.on("pan", this.moveTimeline)
  
    this.playButton = document.querySelector('.helix-logo-anchor__play button')
    this.playTimeline = this.playTimeLine.bind(this)

    this.indexTimeline = 0
    this.animationFrame = null

    this.isPlaying = false
    this.hasPlayed = false
    
    this.playButton.addEventListener('click', this.playTimeline)
  }

  animateIn() {
    this.animate()
  }
  
  animateOut() {
    this.pause()
  }

  createLines() {
    this.totalCollection = DataCollector.collection.length
    for (var i = 0; i < this.totalCollection * 3; i++) {
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
          this.lines[index + this.totalCollection].style.transform = `translateY(${DataInterpolator.linearInterpolation(limit.min, limit.max, DataCollector.collection[index].energy, 99, 0)}%)`
         
        })
      }
    }
  }

  rewindTimeline() {
    this.indexTimeline =  95
    this.totalDrag = -(((Math.abs(this.indexTimeline - 95)) / (95 / 33)) + 32.6)
    this.currentPercentage = this.totalDrag
    this.timelineCalculated()
    this.hasPlayed = true

    setTimeout(() => {
      this.isPlaying = true
    }, 500)
    
  }

  playTimeLine() {
    

    

    if (this.indexTimeline == 0) {
      this.rewindTimeline()

    } else {

      this.isPlaying = true
      console.log(this.indexTimeline)

    }
  }

  animate() {
    this.animationFrame = requestAnimationFrame(() => { this.animate() })
    this.linesWrapper.style.transform =  `translateX(${this.totalDrag}%)`

    if (this.isPlaying && this.indexTimeline > 0) {
      this.indexTimeline =  this.indexTimeline > 0 ? Math.abs(Math.floor(this.indexTimeline - 0.5)) : 0
      this.totalDrag = -(((Math.abs(this.indexTimeline - 95)) / (95 / 33)) + 32.6)
      this.currentPercentage = this.totalDrag
      this.timelineCalculated()
      
    } else {

      this.isPlaying = false

    }
  }

  pause() {
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame)
    }
  }
  
  timelineCalculated() {
    this.event = new CustomEvent('uiTimeline', {bubbles: true, detail: this.indexTimeline})
    this.element.dispatchEvent(this.event)
  }

  moveTimeline(ev) {

    this.isPlaying = false
    this.percentageDragged = (ev.deltaX / this.linesWrapper.offsetWidth) * 100
    this.totalDrag = this.currentPercentage + this.percentageDragged

    if (Math.abs(Math.ceil((Math.abs(this.totalDrag) - 32) * (95 / 33))) !== this.indexTimeline) {
      this.indexTimeline = Math.abs((Math.abs(Math.ceil((Math.abs(this.totalDrag) - 32) * (95 / 33)))) - 95)
      this.timelineCalculated()
    }
    

    if (ev.isFinal) {
      this.currentPercentage = this.currentPercentage + this.percentageDragged
      if (Math.abs(this.currentPercentage) < 33) {
        this.linesWrapper.style.transform =  `translateX(${-32.5}%)`
        this.currentPercentage = -32.5
      } else if(Math.abs(this.currentPercentage) > 65.75) {
        this.linesWrapper.style.transform =  `translateX(${-65.75}%)`
        this.currentPercentage = -65.75
      }
      
    }
  }
}