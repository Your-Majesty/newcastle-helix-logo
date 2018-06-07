class HelixLogoUIScale {
  constructor(args) {
    this.element = document.querySelector('.helix-logo-ui-scale-buttons')
    this.buttonPlus = this.element.querySelector('.helix-logo-ui-scale-more')
    this.buttonMinus = this.element.querySelector('.helix-logo-ui-scale-less')
    
    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)

    this.buttonPlus.addEventListener('click', this.zoomIn)
    this.buttonMinus.addEventListener('click', this.zoomOut)
  }
  
  zoomIn() {
    CameraTracker.zoomIn()
  }

  zoomOut() {
    CameraTracker.zoomOut()
  }

}