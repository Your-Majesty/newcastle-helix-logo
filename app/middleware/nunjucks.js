module.exports = (() => {
  const nunjucks = require('nunjucks')
  var nunjucksInstance = nunjucks.configure(__dirname + '/../views', {
    watch: true
  })

  return async (ctx, next) => {
    ctx.render = (template, data) => {
      ctx.body = nunjucksInstance.render(template + '.njk', Object.assign({}, { env: process.env }, data))
    }
    return next()
  }
})()
