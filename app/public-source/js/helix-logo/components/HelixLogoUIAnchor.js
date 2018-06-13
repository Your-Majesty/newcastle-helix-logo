class HelixLogoUIAnchor {
  constructor(args) {
    this.anchor = document.querySelector('.helix-logo-anchor')
    this.day = this.anchor.querySelector('.helix-logo-day')
    this.time = this.anchor.querySelector('.helix-logo-time')
    this.infoWrapper = this.anchor.querySelector('.helix-logo-anchor__info__wrapper')
    this.infoElement = this.anchor.querySelector('.helix-logo-anchor__info')
    this.lineElement = this.anchor.querySelector('.helix-logo-anchor__line')
    this.resetButton = this.anchor.querySelector('.helix-logo-reset')
    this.dayString = 'Today' 
    this.resetAction = this.resetAction.bind(this)
    this.playButton = this.anchor.querySelector('.helix-logo-anchor__play')

    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December']
  }

  animateIn() {
    this.anchor.style.display = 'block'
    TweenLite.to(this.anchor, 0.4, {y: '0%', ease: Circ.easeOut, force3D:true, onComplete: () => {
      TweenLite.to(this.infoWrapper, 0.4, {opacity: 1, y:0, ease: Circ.easeOut, delay: 0.1})
    }})
    
  }

  animateOut() {
    TweenLite.set(this.infoWrapper, {opacity: 0, y:'20px', ease: Circ.easeOut})
    TweenLite.to(this.anchor, 0.3, {y: '130%', onComplete: () => {
      this.anchor.style.display = 'none'
    }})
  }

  playButtonAction(shouldShow) {
    if (shouldShow) {
      this.playButton.style.display = 'inline-block'
    } else {
      this.playButton.style.display = 'none'
    }
  }

  resetButtonAction(shouldShow) {
    if (shouldShow) {
      this.resetButton.style.display = 'block'
      TweenLite.to(this.resetButton, 0.25, {opacity:1, y:0, ease: Circ.easeOut, delay:0.2})
      this.resetButton.addEventListener('click', this.resetAction)
    } else {
      TweenLite.set(this.resetButton, {opacity:0, y:'20px', onComplete: () => {
        this.resetButton.style.display = 'none'
      }})
      this.resetButton.removeEventListener('click', this.resetAction)
    }
  }

  resetAction() {
    this.event = new CustomEvent('uiResetPressed', {bubbles: true})
    window.dispatchEvent(this.event)
  }

  mapSensorName(sensorName) {
    this.day.innerHTML = sensorName
  }

  mapSensorValue(currentSensor) {
    DataInterpolator.sensors.forEach((sensor) => {
      if (sensor.id == currentSensor.name) {
        if (currentSensor.value > 0) {
          this.time.innerHTML = `${currentSensor.value} ${sensor.units}`
        } else {
          this.time.innerHTML = ''
        }
      }
    })
  }

  mapAnchorValue(value) {
  

    let day = new Date(DataCollector.collection[value].timestamp.split('T')[0])
    let dayToday = new Date()
    let hours = DataCollector.collection[value].timestamp.split('T')[1].split(':')[0]
    let minutes = DataCollector.collection[value].timestamp.split('T')[1].split(':')[1]

    let timeDiff = day.getTime() - dayToday.getTime()
    let diffDays = Math.abs(Math.ceil(timeDiff / (1000 * 3600 * 24)))
    let daysAgoValue = ''

    if (diffDays < 1 ) {
      daysAgoValue = 'Today'
    } else if (diffDays == 1) {
      daysAgoValue = 'Yesterday'
    } else {
      daysAgoValue = `${DataCollector.collection[value].timestamp.split('-')[2].split('T')[0]} ${this.months[day.getMonth()]}`
    }

    if (daysAgoValue !== this.dayString) {
      this.day.innerHTML = daysAgoValue
      this.dayString = daysAgoValue
    } else {
      this.day.innerHTML = this.dayString
    }

    this.time.innerHTML = `${hours}:${minutes} hrs`
  }
}