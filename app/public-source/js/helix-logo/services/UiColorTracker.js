const UiColorTracker = (() => {
  const controller = {}
  controller.lastColor = null
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
    controller.logoUiWrapper.classList.remove(`helix-ui-color-${controller.uiColors[controller.lastColor]}`)
    controller.logoUiWrapper.classList.add(`helix-ui-color-${controller.uiColors[currentIndex]}`)
  }

  return controller
})()
