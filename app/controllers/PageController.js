module.exports = (() => {

  const BaseController = require('./BaseController')
  const dataCache = require('../lib/data-cache')

  class PageController extends BaseController {
    get autoBind () { return [
      'getApp',
      'getIndex'
    ]}

    async getApp (ctx) {
      return ctx.render('app')
    }

    async getIndex (ctx) {
      return ctx.render('index')
    }
  }
  return new PageController()
})()
