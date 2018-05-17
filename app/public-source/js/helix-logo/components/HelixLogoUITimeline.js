class HelixLogoUITimeline {
  constructor() {
    this.element = document.querySelector('.helix-logo-timeline')
    this.linesWrapper = document.querySelector('.helix-logo-timeline__lines')
      
    this.moveTimeline = this.moveTimeline.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.mouseDown = this.mouseDown.bind(this)

    this.linesWrapper.addEventListener('mousedown', this.mouseDown)
    this.linesWrapper.addEventListener('touchstart', this.mouseDown)
    window.addEventListener('mouseup', this.mouseUp)
    window.addEventListener('touchend', this.mouseUp)

  }

  animateIn() {
    console.log('test')
  }
  
  animateOut() {

  }

  mouseUp() {
    window.removeEventListener('mousemove', this.moveTimeline)
    window.removeEventListener('touchmove', this.moveTimeline)
  }

  mouseDown(e){
    window.addEventListener('mousemove', this.moveTimeline)
    window.addEventListener('touchmove', this.moveTimeline)
  }

  createLines() {
    for (point of DataCollector.collection) {
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
          this.lines[index].style.transform = `translateY(${DataInterpolator.linearInterpolation(limit.min, limit.max, DataCollector.collection[index].energy, 99, 0)}%)`
        })
      }
    }
  }

  moveTimeline(e) {
    // console.log(e)
    this.linesWrapper.style.transform =  `translateX(${e.clientX - 150}px)`;
  }
}