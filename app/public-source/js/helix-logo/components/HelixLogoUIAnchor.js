class HelixLogoUIAnchor {
  constructor(args) {
    this.anchor = document.querySelector('.helix-logo-anchor')
    this.day = this.anchor.querySelector('.helix-logo-day')
    this.time = this.anchor.querySelector('.helix-logo-time')
    this.infoElement = this.anchor.querySelector('.helix-logo-anchor__info')
    this.lineElement = this.anchor.querySelector('.helix-logo-anchor__line')
    this.resetButton = this.anchor.querySelector('.helix-logo-reset')
    this.dayString = 'Today' 
    this.resetAction = this.resetAction.bind(this)
    this.playButton = this.anchor.querySelector('.helix-logo-anchor__play')
  }

  animateIn() {
    this.anchor.style.display = 'block'
    TweenLite.to(this.anchor, 0.3, {y: '0%', ease: Sine.easeOut})
  }

  animateOut() {
    TweenLite.to(this.anchor, 0.5, {y: '130%', onComplete: () => {
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
      this.resetButton.addEventListener('click', this.resetAction)
    } else {
      this.resetButton.style.display = 'none'
      this.resetButton.removeEventListener('click', this.resetAction)
    }
  }

  resetAction() {
    this.event = new CustomEvent('uiResetPressed', {bubbles: true})
    this.resetButton.dispatchEvent(this.event)
  }

  mapSensorName(sensorName) {
    this.day.innerHTML = sensorName
  }

  mapSensorValue(value) {
    this.time.innerHTML = value
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
      daysAgoValue = `+${diffDays} days ago`
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