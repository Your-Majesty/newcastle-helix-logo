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
    
    if (isTabletExperience) {
      document.querySelector('body').classList.add('tablet-overlay')
    }
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
  
  setInfo(currentSensor) {
   this.text.innerHTML = this.sensorExplanations[`${currentSensor}`].copy
  }
}