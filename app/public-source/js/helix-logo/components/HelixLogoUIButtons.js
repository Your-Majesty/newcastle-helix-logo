class HelixLogoUIButtons {
  constructor(args) {
    this.buttons = document.querySelector('.helix-logo-buttons')
  }

  createButtons() {
    this.buttons.innerHTML = `
     ${DataInterpolator.sensorNames.map((id, i) => `
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

    DataInterpolator.sensorIds.forEach((sensor, index) => {
      this.buttonCollection[index].querySelector('button').innerHTML = DataCollector.collection[index][sensor]
      // console.log(DataCollector.collection[index][sensor])
      // console.log(sensor)
    })

    console.log(DataCollector.collection[index])
    

  }
}