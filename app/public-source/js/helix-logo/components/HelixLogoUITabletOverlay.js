class HelixLogoUITabletOverlay {
  constructor() {
    this.buttonIntro = document.querySelector('.button-intro-logo')
    this.buttonShare = document.querySelector('.helix-logo-ui-tablet__share')
    this.buttonNewsletter = document.querySelector('.helix-logo-ui-tablet__newsletter')
    this.buttonClose = document.querySelector('.helix-logo-ui-tablet__close')

    this.buttonsWrapper = document.querySelector('.helix-logo-ui-share')
    this.overlayWrapper = document.querySelector('.helix-logo-ui-tablet__overlay__wrapper')
    this.overlay = document.querySelector('.helix-logo-ui-tablet__overlay')

    this.share = document.querySelector('.helix-logo-tablet__share')
    this.newsletter = document.querySelector('.helix-logo-tablet__newsletter')
    this.intro = document.querySelector('.helix-logo-tablet__intro')
    
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.showNewsletter = this.showNewsletter.bind(this)
    this.showShare = this.showShare.bind(this)

    
    this.buttonIntro.addEventListener('click', this.close)
    this.buttonNewsletter.addEventListener('click', this.showNewsletter)
    this.buttonShare.addEventListener('click', this.showShare)
    this.buttonClose.addEventListener('click', this.close)

    this.currentView = this.intro
    this.overlayWrapper.style.display = 'block'
  }

  close() {
    this.buttonClose.style.display = 'none'
    this.buttonsWrapper.style.display = 'block'
    this.currentView.style.display = 'none'
    TweenLite.to(this.currentView, 0.2, {opacity: 0})
    TweenLite.to(this.overlay, 0.2, {scale: 0.95, opacity: 0, ease: Circ.easeOut, onComplete:() => {
      this.overlay.style.display = 'none'
      this.overlayWrapper.style.display = 'none'
    }})
  }

  showNewsletter() {
    this.buttonClose.style.display = 'block'
    this.currentView = this.newsletter
    this.open()
  }

  showShare() {
    this.buttonClose.style.display = 'block'
    this.currentView = this.share
    this.open()
  }

  open() {
    this.overlay.style.display = 'block'
    this.overlayWrapper.style.display = 'inline-block'
    this.currentView.style.display = 'block'
    this.buttonsWrapper.style.display = 'none'
    TweenLite.to(this.currentView, 0.2, {opacity: 1, delay: 0.2})
    TweenLite.to(this.overlay, 0.25, {scale: 1, opacity: 0.9, ease: Circ.easeOut})
  }

} 