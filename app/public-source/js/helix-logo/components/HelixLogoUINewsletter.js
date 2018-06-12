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
    fetch(heroLogoURL + '/api/newsletter-signup', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: this.input.value
      })
    }).then(response => response.json()).then((json) => {
      console.log(json)
    })
  }
}