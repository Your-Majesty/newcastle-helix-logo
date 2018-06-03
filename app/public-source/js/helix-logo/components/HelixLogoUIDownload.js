class HelixLogoUIDownload {
  constructor() {
    this.element = document.querySelector('.helix-logo-download a')
    this.downloadAction = this.downloadAction.bind(this)
  }

  downloadAction() {
    this.event = new CustomEvent('uiDownload', {bubbles: true})
    this.element.dispatchEvent(this.event)
  }

  setScreenShot(image) {

    
    this.element.setAttribute('href', image)
  }


  init() {
    this.element.addEventListener('click', this.downloadAction)
  }

  animateIn() {
    
    
  }
}