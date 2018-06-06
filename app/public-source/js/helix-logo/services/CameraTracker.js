const CameraTracker = (() => {
  const controller = {}
  controller.isZoomIn = false


  controller.zoomIn = () => {
    if (!controller.isZoomIn) {
      controller.isZoomIn = true
      controller.event = new CustomEvent('uiZoomIn', {bubbles: true})
      window.dispatchEvent(controller.event)
    }
  }

  controller.zoomOut = () => {
    if (controller.isZoomIn) {
      controller.isZoomIn = false
      controller.event = new CustomEvent('uiZoomOut', {bubbles: true})
      window.dispatchEvent(controller.event)
    }
  }

  return controller
})()
