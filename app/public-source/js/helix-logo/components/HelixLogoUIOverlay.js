class HelixLogoUIOverlay {
  constructor() {
    this.isOpen = false
    this.button = document.querySelector('.helix-logo-anchor__lear-more')
    this.element = document.querySelector('.helix-logo-ui-overlay')
    this.text = document.querySelector('.helix-logo-ui-overlay-wrapper p')
    this.closeButton = document.querySelector('.helix-logo-ui-overlay button')

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.button.addEventListener('click', this.openModal)
    this.closeButton.addEventListener('click', this.closeModal)
    this.sensorExplanations = {
      humidity: {
        copy: 'Humidity Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nemo dolores neque maxime, quibusdam optio natus explicabo quas incidunt, laudantium quisquam ipsam tempore amet. Dolorem fugit iste voluptates delectus sequi.'
      },
      temperature: {
        copy: 'Temperature Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nemo dolores neque maxime, quibusdam optio natus explicabo quas incidunt, laudantium quisquam ipsam tempore amet. Dolorem fugit iste voluptates delectus sequi.'
      },
      energy: {
        copy: 'Energy Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nemo dolores neque maxime, quibusdam optio natus explicabo quas incidunt, laudantium quisquam ipsam tempore amet. Dolorem fugit iste voluptates delectus sequi.'
        
      },
      wind: {
        copy: 'Wind Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nemo dolores neque maxime, quibusdam optio natus explicabo quas incidunt, laudantium quisquam ipsam tempore amet. Dolorem fugit iste voluptates delectus sequi.'
      },
      vehicleSpeed: {
        copy: 'Vehicle Speed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nemo dolores neque maxime, quibusdam optio natus explicabo quas incidunt, laudantium quisquam ipsam tempore amet. Dolorem fugit iste voluptates delectus sequi.'
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
    this.button.style.opacity = 0.3
    this.element.style.display = 'block'
  }

  closeModal() {
    this.isOpen = false
    this.button.style.opacity = 1
    this.element.style.display = 'none'
  }
  
  setInfo(currentSensor) {
   this.text.innerHTML = this.sensorExplanations[`${currentSensor}`].copy
  }
}