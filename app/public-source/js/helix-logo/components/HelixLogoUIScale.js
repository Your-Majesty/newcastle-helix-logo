class HelixLogoUIScale {
  constructor(args) {
    this.element = document.querySelector('.helix-logo-ui-scale-buttons')
    this.buttonPlus = this.element.querySelector('.helix-logo-ui-scale-more')
    this.buttonMinus = this.element.querySelector('.helix-logo-ui-scale-less')
    
    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)

    // this.isZoomed
    this.buttonPlus.style.opacity = 0.2
    this.buttonPlus.addEventListener('click', this.zoomOut)
    this.buttonMinus.addEventListener('click', this.zoomIn)
  }
  
  zoomIn() {
    CameraTracker.zoomIn()
    this.buttonMinus.style.opacity = 0.2
    this.buttonPlus.style.opacity = 1

  }

  zoomOut() {
    this.buttonMinus.style.opacity = 1
    this.buttonPlus.style.opacity = 0.2
    CameraTracker.zoomOut()
  }

}