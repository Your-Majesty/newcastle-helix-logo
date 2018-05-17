class HelixLogoUIButtons {
  constructor(args) {
    this.buttons = document.querySelector('.helix-logo-buttons')
  }

  createButtons() {
    this.buttons.innerHTML = `
     ${DataInterpolator.sensorIds.map((id, i) => `
        <div class="helix-logo-button ${id}">
          <button>50</button>
          <p>${id}</p>
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

    DataInterpolator.sensorIds.forEach((sensor) => {
      // DataCollector.collection[index][]
      console.log(sensor)
    })

    console.log(DataCollector.collection[index])
    

  }
}