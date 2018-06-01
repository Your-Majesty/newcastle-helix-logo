class HelixLogoUIButtons {
  constructor(args) {
    this.buttons = document.querySelector('.helix-logo-buttons')
    this.buttonsActive = false
    this.currentSensor = null
    this.selectButton = this.selectButton.bind(this)
  }

  createButtons() {
    this.buttons.innerHTML = `
     ${DataInterpolator.sensors.map((sensor, i) => `
        <div class="helix-logo-button ${sensor.name}">
          <button><span class="value"></span><span class="units"></span></button>
          <p>${sensor.name}</p>
        </div>
      `).join('')}
    `
    this.buttonCollection = this.buttons.querySelectorAll('.helix-logo-button')
  }

  animateIn() {

  
  }

  animateOut() {

  
  }

  selectButton() {


  }

  mapButtonsValues(timelineIndex) {
    DataInterpolator.sensors.forEach((sensor, index) => {
      this.buttonCollection[index].querySelector('button .value').innerHTML = DataCollector.collection[timelineIndex][sensor.id]
      this.buttonCollection[index].querySelector('button .units').innerHTML = sensor.units
    })
  }
}