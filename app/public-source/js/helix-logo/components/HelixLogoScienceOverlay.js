class HelixLogoScienceOverlay {
  constructor() {
    this.isOpen = false
    this.button = document.querySelector('.helix-logo-info-newcastle__button')
    this.element = document.querySelector('.helix-logo-ui-overlay__scienceCentral')
    this.background = document.querySelector('.helix-logo-ui-overlay-background__scienceCentral')
    this.text = document.querySelector('.helix-logo-ui-overlay-wrapper__scienceCentral p')
    this.closeButton = document.querySelector('.helix-logo-ui-overlay__scienceCentral button')

    this.buttonMobile = document.querySelector('.helix-logo-info-newcastle__mobile')

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.button.addEventListener('click', this.openModal)
    this.buttonMobile.addEventListener('click', this.openModal)
    this.closeButton.addEventListener('click', this.closeModal)
  }
  
  activate() {
    this.button.style.display = 'block'
  }

  deactivate() { 
    this.closeModal()
    this.button.style.display = 'none'
  }

  openModal() {
    TrackingService.track('dataViz-questionButton', 'click')
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
}