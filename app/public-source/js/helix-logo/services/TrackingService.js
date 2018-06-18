const TrackingService = (() => {

  const controller = {}

  controller.track = (eventCategory, eventAction, eventLabel, eventValue) => {
    console.log('TrackingService::track("'+eventCategory+'", "'+eventAction+'", "'+eventLabel+'")')

    if (window.gtag) {
      gtag('event', eventAction, {
        'event_category': eventCategory,
        'event_label': eventLabel,
        'value': eventValue
      })
    }
  }

  return controller

})()
