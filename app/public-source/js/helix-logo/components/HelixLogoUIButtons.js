class HelixLogoUIButtons {
  constructor(args) {
    this.buttonElement = document.querySelector('.helix-logo-ui-bottom')
    this.buttons = document.querySelector('.helix-logo-buttons')
    this.buttonsActive = false
    this.currentSensor = null
    this.currentButton = null
    this.selectButton = this.selectButton.bind(this)
    this.sensorsNames = []
    this.sensorsUnits = []
    this.xmasSensorNames = []
    this.xmasSensorUnits = []
    this.isXmas = false
  }

  createButtons() {
    this.buttons.innerHTML = `
     ${DataInterpolator.sensors.map((sensor, i) => `
        <div class="helix-logo-button button-color ${sensor.id}" data-sensor=${sensor.id}>
          <button class='${sensor.id}'><span class="value"></span><span class="units"></span></button>
          <p>${sensor.name}</p>
        </div>
      `).join('')}
    `

    DataInterpolator.sensors.map((sensor, i) => {
      this.sensorsNames.push(sensor.name)
      this.xmasSensorNames.push(sensor.xmasName)
      this.sensorsUnits.push(sensor.units)
      this.xmasSensorUnits.push(sensor.xmasUnits)
    })
    this.buttonCollection = [].slice.call(this.buttons.querySelectorAll('.helix-logo-button'))
    this.buttonCollection.forEach((button) => {
      button.addEventListener('click', () => {
        this.selectButton(button)
      })
    })
  }

  activateXmas() {
    this.isXmas = true
    this.buttonCollection.forEach((button, index) => {
      button.querySelector('p').innerHTML = this.xmasSensorNames[index]
      button.querySelector('.units').innerHTML = this.xmasSensorUnits[index]
    })
  }

  deactivateXmas() {
    this.isXmas = false
    this.buttonCollection.forEach((button, index) => {
      button.querySelector('p').innerHTML = this.sensorsNames[index]
      button.querySelector('.units').innerHTML = this.sensorsUnits[index]
    })
  }

  animateIn() {
    TweenLite.to(this.buttonElement, 0.5, {y: '0%', ease: Circ.easeOut, delay: 0.3, onComplete:  ()  => {
      this.buttonElement.style.transform = `initial`
      if (!isTabletExperience) {
        document.querySelector('.helix-logo-download').style.opacity = 1
        console.log('UI animated In')
      }
    }})
  
  }

  animateOut() {

    TweenLite.to(this.buttonElement, 0.1, {y: '100%', ease: Circ.easeOut})
  
  }

  resetButtons() {
    if (this.currentButton) {
      this.currentButton.classList.remove('active')
      this.currentButton = null
    }
  }

  selectButton(button) {
    if (button !== this.currentButton) {
      if (this.currentButton) {
        this.currentButton.classList.remove('active')
      }
      button.classList.add('active')
      this.currentButton = button
      this.currentSensor = this.currentButton.getAttribute('data-sensor')

      TrackingService.track('dataViz-sensorButton', 'click', `${this.currentSensor}`)
      
      this.event = new CustomEvent('uiButtonPressed', {bubbles: true, detail:this.currentSensor})
      this.buttons.dispatchEvent(this.event)
    }
  }

  mapButtonsSliderValues(currentSensor) {


      this.currentButton.querySelector('button .value').innerHTML = currentSensor.value
    
    
  }

  mapButtonsValues(timelineIndex) {
    DataInterpolator.sensors.forEach((sensor, index) => {
      if (DataCollector.collection[timelineIndex][sensor.id] > 0) {
        this.buttonCollection[index].querySelector('button .value').innerHTML = this.isXmas && (sensor.name == 'wind') ? Math.ceil(DataCollector.collection[timelineIndex][sensor.id] * 100) : DataCollector.collection[timelineIndex][sensor.id]
      } else {
        this.buttonCollection[index].querySelector('button .value').innerHTML = 0
      }
      if (this.isXmas) {
        this.buttonCollection[index].querySelector('button .units').innerHTML = sensor.xmasUnits
      } else {
        this.buttonCollection[index].querySelector('button .units').innerHTML = sensor.units
      }
      
    })
  }
}