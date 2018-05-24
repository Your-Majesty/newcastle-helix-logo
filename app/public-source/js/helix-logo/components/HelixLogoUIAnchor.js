class HelixLogoUIAnchor {
  constructor(args) {
    this.anchor = document.querySelector('.helix-logo-anchor')
    this.day = this.anchor.querySelector('.helix-logo-day')
    this.time = this.anchor.querySelector('.helix-logo-time')
    this.dayString = 'Today' 
  }

  animateIn() {


  }

  animateOut() {



  }

  mapAnchorValue(value) {

    let day = new Date(DataCollector.collection[value].timestamp.split('T')[0])
    let dayToday = new Date()
    let hours = DataCollector.collection[value].timestamp.split('T')[1].split(':')[0]
    let minutes = DataCollector.collection[value].timestamp.split('T')[1].split(':')[1]

    let timeDiff = day.getTime() - dayToday.getTime()
    let diffDays = Math.abs(Math.ceil(timeDiff / (1000 * 3600 * 24)))
    let daysAgoValue = ''

    if (diffDays < 1 ) {
      daysAgoValue = 'Today'
    } else if (diffDays == 1) {
      daysAgoValue = 'Yesterday'
    } else {
      daysAgoValue = `+${diffDays} days ago`
    }

    if (daysAgoValue !== this.dayString) {
      this.day.innerHTML = daysAgoValue
      this.dayString = daysAgoValue
    } else {
      this.day.innerHTML = this.dayString
    }

    this.time.innerHTML = `${hours}:${minutes} ${hours < 12 ? 'am' : 'pm'}`
  }
}