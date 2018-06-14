class HelixUITabletVideo {
  constructor(args) {
    this.button = document.querySelector('.button-intro-video')

    this.videoWrapper = document.querySelector('.helix-logo-ui-tablet__video__wrapper')
    this.videoScale = this.videoWrapper.querySelector('.helix-logo-ui-tablet__video')
    this.video = this.videoWrapper.querySelector('.helix-logo-ui-tablet__video video')
    this.closeButton = this.videoWrapper.querySelector('.close-button')
  
    this.animateVideoIn = this.animateVideoIn.bind(this)
    this.animateVideoOut = this.animateVideoOut.bind(this)
    
    this.button.addEventListener('click', this.animateVideoIn)
    this.closeButton.addEventListener('click', this.animateVideoOut)
  
    this.video.load()
  }

  animateVideoIn() {
    this.video.play()
    this.closeButton.style.display = 'block'
    this.videoWrapper.style.display = 'block'
    TweenLite.to(this.videoWrapper, 0.45, {scale: 1, opacity: 1, ease: Circ.easeOut})
  }
  
  animateVideoOut() {
    this.video.pause()
    this.video.currentTime = 0
    this.closeButton.style.display = 'none'
    TweenLite.to(this.videoWrapper, 0.2, {scale: 0.95, opacity: 0, ease: Circ.easeOut, onComplete:() => {
      this.videoWrapper.style.display = 'none'
    }})
  }
  
}