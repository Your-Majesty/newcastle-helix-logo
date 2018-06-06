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
  }

  animateVideoIn() {

    this.closeButton.style.display = 'block'
    this.videoWrapper.style.display = 'block'
    TweenLite.to(this.videoScale, 0.45, {scale: 1, opacity: 1, ease: Circ.easeOut, onComplete: () => {
      this.video.play()
    }})
  }
  
  animateVideoOut() {
    this.video.pause()
    this.closeButton.style.display = 'none'
    TweenLite.to(this.videoScale, 0.2, {scale: 0.9, opacity: 0, ease: Circ.easeOut, onComplete:() => {
      this.videoWrapper.style.display = 'none'
    }})
  }
  
}