class HelixLogoUIDownload {
  constructor() {
    this.button = document.querySelector('.helix-logo-download')
    this.element = document.querySelector('.helix-logo-download a')
    this.downloadAction = this.downloadAction.bind(this)
  }

  downloadAction() {
    TrackingService.track('dataViz-downloadButton', 'click')
    this.event = new CustomEvent('uiDownload', {bubbles: true})
    this.element.dispatchEvent(this.event)
  }

  setScreenShot(image) {
    this.element.setAttribute('href', image)
  }

  show() {
    this.button.style.display = 'block'
    this.element.addEventListener('click', this.downloadAction)
  }

  hide() {
    this.button.style.display = 'none'
  }
}