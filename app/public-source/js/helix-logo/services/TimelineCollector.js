const TimelineCollector = (() => {
  const controller = {}
  
  controller.currentIndex = 0

  
  

  controller.updateIndex = (index) => {
    controller.currentIndex = index
    controller.event = new CustomEvent('uiTimeline', {bubbles: true, detail: controller.currentIndex})
    window.dispatchEvent( controller.event)
  }
  
  return controller

})()
