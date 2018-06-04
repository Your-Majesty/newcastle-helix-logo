const UiColorTracker = (() => {
  const controller = {}
  controller.currentColor = null
  controller.logoUiWrapper = document.querySelector('.helix-logo-ui')
  controller.uiColors = [
    'teal', 
    'blue', 
    'indigo', 
    'magenta', 
    'orange'
  ]
  
  controller.setUIColor = (currentIndex) => {
    controller.logoUiWrapper.classList.remove(`helix-ui-color-${controller.uiColors[controller.currentColor]}`)
    controller.logoUiWrapper.classList.add(`helix-ui-color-${controller.uiColors[currentIndex]}`)
  }

  return controller
})()
