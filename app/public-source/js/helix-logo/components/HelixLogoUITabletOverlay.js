class HelixLogoUITabletOverlay {
  constructor() {
    this.logo = document.querySelector('.helix-logo-ui-tablet__logo-wrapper')
    this.buttonIntro = document.querySelector('.button-intro-logo')
    this.buttonShare = document.querySelector('.helix-logo-ui-tablet__share')
    this.buttonNewsletter = document.querySelector('.helix-logo-ui-tablet__newsletter')
    this.buttonClose = document.querySelector('.helix-logo-ui-tablet__close')
    this.buttonMoreInfo = document.querySelector('.helix-logo-infoscreen-button')
    this.buttonMoreInfoWrapper = document.querySelector('.helix-logo-info__button')
    this.scaleButtons = document.querySelector('.helix-logo-ui-scale-buttons')

    this.buttonsWrapper = document.querySelector('.helix-logo-ui-share')
    this.overlayWrapper = document.querySelector('.helix-logo-ui-tablet__overlay__wrapper')
    this.overlay = document.querySelector('.helix-logo-ui-tablet__overlay')

    this.share = document.querySelector('.helix-logo-tablet__share')
    this.newsletter = document.querySelector('.helix-logo-tablet__newsletter')
    this.intro = document.querySelector('.helix-logo-tablet__intro')

    this.newsletterInput = document.querySelector('.helix-logo-tablet__newsletter input')
    
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.showNewsletter = this.showNewsletter.bind(this)
    this.showShare = this.showShare.bind(this)
    this.showInfo = this.showInfo.bind(this)
    
    this.buttonIntro.addEventListener('click', this.close)
    this.buttonNewsletter.addEventListener('click', this.showNewsletter)
    this.buttonShare.addEventListener('click', this.showShare)
    this.buttonClose.addEventListener('click', this.close)
    this.buttonMoreInfo.addEventListener('click', this.showInfo)
    this.overlay.addEventListener('click', this.close)

    this.currentView = this.intro
    this.overlayWrapper.style.display = 'block'
    this.logo.style.display = 'block'
    document.querySelector('body').classList.add('tablet-overlay')

    window.addEventListener('newsletterSignUp', this.close)


  }

  close() {
    if (this.currentView === this.intro) {
      this.overlay.removeEventListener('click', this.close)
    }
    this.event = new CustomEvent('uiTabletOverlayClosed', {bubbles: true})
    this.overlay.dispatchEvent(this.event)
    document.querySelector('body').classList.remove('tablet-overlay')
    this.buttonMoreInfoWrapper.style.display = 'inline-block'
    this.buttonClose.style.display = 'none'
    this.scaleButtons.style.display = 'block'
    this.buttonsWrapper.style.display = 'block'
    this.currentView.style.display = 'none'
    this.newsletterInput.value = ''
    TweenLite.to(this.currentView, 0.2, {opacity: 0})
    TweenLite.to(this.overlay, 0.2, {scale: 0.95, opacity: 0, ease: Circ.easeOut, onComplete:() => {
      this.overlay.style.display = 'none'
      this.overlayWrapper.style.display = 'none'
    }})
  }

  showNewsletter() {
    this.buttonClose.style.display = 'block'
    this.currentView = this.newsletter
    this.event = new CustomEvent('uiResetPressed', {bubbles: true})
    window.dispatchEvent(this.event)
    this.open()
  }

  showShare() {
    this.buttonClose.style.display = 'block'
    this.currentView = this.share
    this.event = new CustomEvent('uiResetPressed', {bubbles: true})
    window.dispatchEvent(this.event)
    this.open()
  }

  showInfo() {
    this.currentView = this.intro
    this.event = new CustomEvent('uiResetPressed', {bubbles: true})
    window.dispatchEvent(this.event)
    this.open()
  }

  open() {

    let openEvent = new CustomEvent('uiTabletOverlayOpen', {bubbles: true})
    this.overlay.dispatchEvent(openEvent)
    this.scaleButtons.style.display = 'none'
    document.querySelector('body').classList.add('tablet-overlay')
    this.buttonMoreInfoWrapper.style.display = 'none'
    this.overlay.style.display = 'block'
    this.overlayWrapper.style.display = 'inline-block'
    this.currentView.style.display = 'inline-block'
    this.buttonsWrapper.style.display = 'none'
    TweenLite.to(this.currentView, 0.2, {opacity: 1, delay: 0.2})
    TweenLite.to(this.overlay, 0.25, {scale: 1, opacity: 0.9, ease: Circ.easeOut})

    if (this.currentView == this.intro) {
        this.overlay.addEventListener('click', this.close)
    }
  }

} 