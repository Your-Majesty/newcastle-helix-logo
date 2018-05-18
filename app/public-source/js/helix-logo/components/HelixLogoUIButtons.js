class HelixLogoUIButtons {
  constructor(args) {
    this.buttons = document.querySelector('.helix-logo-buttons')

    console.log(DataInterpolator.sensors)
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
    this.timeline.animateIn()

  }

  animateOut() {



  }

  mapButtonsValues(index) {

    DataInterpolator.sensors.forEach((sensor, index) => {
      this.buttonCollection[index].querySelector('button .value').innerHTML = Math.floor(DataCollector.collection[index][sensor.id])
      this.buttonCollection[index].querySelector('button .units').innerHTML = sensor.units
    })

    console.log(DataCollector.collection[index])
    

  }
}