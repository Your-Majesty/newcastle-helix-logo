module.exports = (() => {

  const BaseController = require('./BaseController')
  
  const dataCache = require('../lib/data-cache')

  class APIController extends BaseController {
    get autoBind () { return [
      'getData'
    ]}

    async getData (ctx) {
      var data = dataCache.cache

      return this.success(ctx, data)
    }
  }

  return new APIController()
})()
