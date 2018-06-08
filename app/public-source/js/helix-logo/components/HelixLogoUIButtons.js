class HelixLogoUIButtons {
  constructor(args) {
    this.buttonElement = document.querySelector('.helix-logo-ui-bottom')
    this.buttons = document.querySelector('.helix-logo-buttons')
    this.buttonsActive = false
    this.currentSensor = null
    this.currentButton = null
    this.selectButton = this.selectButton.bind(this)
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
    this.buttonCollection = this.buttons.querySelectorAll('.helix-logo-button')
    this.buttonCollection.forEach((button) => {
      button.addEventListener('click', () => {
        this.selectButton(button)
      })
    })
  }

  animateIn() {
    TweenLite.to(this.buttonElement, 0.5, {y: '0%', ease: Circ.easeOut, force3D:true, delay: 0.3})
  
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
        this.buttonCollection[index].querySelector('button .value').innerHTML = DataCollector.collection[timelineIndex][sensor.id]
      } else {
        this.buttonCollection[index].querySelector('button .value').innerHTML = 0
      }
      this.buttonCollection[index].querySelector('button .units').innerHTML = sensor.units
    })
  }
}