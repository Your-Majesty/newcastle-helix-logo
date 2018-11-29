const ThemeCollectorService = (() => {
  const controller = {}
  controller.isXmas = false

  controller.changeStyle = (isXmas) => {
    if (isXmas) {
      controller.isXmas = false
    } else {
      controller.isXmas = true
    }
  }

  return controller
})()
