class HelixLogoUIOverlay {
  constructor() {
    this.isOpen = false
    this.button = document.querySelector('.helix-logo-anchor__lear-more')
    this.element = document.querySelector('.helix-logo-ui-overlay')
    this.background = document.querySelector('.helix-logo-ui-overlay-background')
    this.text = document.querySelector('.helix-logo-ui-overlay-wrapper p')
    this.closeButton = document.querySelector('.helix-logo-ui-overlay button')

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.button.addEventListener('click', this.openModal)
    this.closeButton.addEventListener('click', this.closeModal)

    this.sensorExplanations = {
      humidity: {
        copy: 'This represents the relative humidity across Newcastle right now. It controls thickness of the lines in our logo.'
      },
      temperature: {
        copy: 'This represents the current air temperature across Newcastle. It changes the colour of our logo.'
      },
      energy: {
        copy: 'This tracks the energy consumption of key buildings at Newcastle Helix. It dictates the number and degree of the curves in our logo.'
      },
      wind: {
        copy: 'This shows wind speed across Newcastle this very second. It speeds up and slows down the flow of our logo.'
      },
      vehicleSpeed: {
        copy: 'This shows the average speed on arterial roads through Newcastle city centre right now. The faster the average speed, the greater number of line breaks in our logo.'
      },
      vehicleCount: {
        copy: 'Vehicle Count Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nemo dolores neque maxime, quibusdam optio natus explicabo quas incidunt, laudantium quisquam ipsam tempore amet. Dolorem fugit iste voluptates delectus sequi.'
      }
    }

    this.sensorExplanationsXmas = {
      humidity: {
        copy: 'While we’re dreaming of a White Christmas, the North Pole faces huge volumes of snowfall on a daily basis. The deeper the snow on ground, the thicker our lines.'
      },
      temperature: {
        copy: 'Think Newcastle’s nippy this time of year? The colour change here shows just how cold it gets in the North Pole.'
      },
      energy: {
        copy: 'It takes a lot of energy to get those reindeer fed and those presents wrapped. The number and degree of curves in our logo reflect current energy consumption in Santa’s grotto.'
      },
      wind: {
        copy: 'This reflects the number of elves currently helping Santa prep for the big day. The more elves there are, the faster the flow.'
      },
      vehicleSpeed: {
        copy: 'This tracks the average speed of Santa’s reindeer - everyone from Rudolph to Blitzen. The faster they go, the more line breaks appear in the logo.'
      },
      vehicleCount: {
        copy: 'This tracks the average speed of Santa’s reindeer - everyone from Rudolph to Blitzen. The faster they go, the more line breaks appear in the logo.'
      }
    }
  }
  
  activate() {
    this.button.style.display = 'block'
  }

  deactivate() { 
    this.closeModal()
    this.button.style.display = 'none'
  }

  openModal() {
    this.isOpen = true
    this.element.style.display = 'block'
    this.button.style.opacity = 0.3
    TweenLite.to(this.background, 0.3, {opacity: 0.9, scale:1, ease: Circ.easeOut})
    TweenLite.to(this.closeButton, 0.3, {y: 0, opacity:1, ease: Circ.easeOut})
    TweenLite.to(this.text, 0.3, {y: 0, opacity:1, ease: Circ.easeOut, delay:0.2})
    
    TrackingService.track('dataViz-moreInfo', 'click')
    if (isTabletExperience) {
      document.querySelector('body').classList.add('tablet-overlay')
    }

    this.event = new CustomEvent('UIOpenedModal', {bubbles: true})
    this.element.dispatchEvent(this.event)
  }

  closeModal() {
    this.isOpen = false
    this.button.style.opacity = 1
    TweenLite.to(this.closeButton, 0.3, {y: '30px', opacity:0, ease: Circ.easeOut})
    TweenLite.to(this.text, 0.3, {y: '10px', opacity:0, ease: Circ.easeOut})
    TweenLite.to(this.background, 0.2, {opacity: 0, scale:0.9, ease: Circ.easeOut, onComplete: () => {
      this.element.style.display = 'none'
    }})

    if (isTabletExperience) {
      document.querySelector('body').classList.remove('tablet-overlay')
    }
  }

  setInfoXmas(currentSensor) {
    if (currentSensor) {
      this.text.innerHTML = this.sensorExplanationsXmas[`${currentSensor}`].copy
    }
  }

  setInfo(currentSensor) {
    
    this.text.innerHTML = this.sensorExplanations[`${currentSensor}`].copy
  }
}