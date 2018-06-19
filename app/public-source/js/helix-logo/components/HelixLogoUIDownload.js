class HelixLogoUIDownload {
  constructor() {
    this.button = document.querySelector('.helix-logo-download')
    this.element = document.querySelector('.helix-logo-download button')
    this.downloadAction = this.downloadAction.bind(this)

    this.element.addEventListener('click', this.downloadAction)
  }

  downloadAction() {
    TrackingService.track('dataViz-downloadButton', 'click')
    this.event = new CustomEvent('uiDownload', {bubbles: true})
    this.element.dispatchEvent(this.event)
  }

  show() {
    this.button.style.display = 'block'
  }

  hide() {
    this.button.style.display = 'none'
  }
}
