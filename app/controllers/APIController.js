module.exports = (() => {

  const BaseController = require('./BaseController')
  const dataCache = require('../lib/data-cache')

  class APIController extends BaseController {
    get autoBind () { return [
      'getData'
    ]}

    async getData (ctx) {
      var data = dataCache.cache
      var limits = dataCache.limits

      return this.success(ctx, {
        siteUrl: process.env.HELIX_SITE,
        data,
        limits
      })
    }
  }

  return new APIController()
})()
