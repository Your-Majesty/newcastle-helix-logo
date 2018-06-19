class HelixLogoUINewsletter {
  constructor() {
    this.element = document.querySelector('.helix-logo-tablet__newsletter form')
    this.button = document.querySelector('.helix-logo-tablet__newsletter button')
    this.input = document.querySelector('.helix-logo-tablet__newsletter input')
    this.postMail = this.postMail.bind(this)
    this.element.addEventListener('submit', this.postMail)
  }

  postMail(e) {
    if (e.preventDefault) e.preventDefault()
    fetch(DataCollector.siteUrl + '/api/newsletter-signup', {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: this.input.value
      })
    }).then(response => response.json()).then((json) => {
      this.input.value = ''
      this.event = new CustomEvent('newsletterSignUp', {bubbles: true})
      window.dispatchEvent(this.event)
    })
  }
}
