class HelixLogoUIMobileAlert {
  constructor() {
    this.mobileAlert = document.querySelector('.helix-logo-ui-overlay__mobile')
  }
 
  showAlert() {
    this.mobileAlert.style.display = 'block'
  }

  hideAlert() {
    this.mobileAlert.style.display = 'none'
  }
}