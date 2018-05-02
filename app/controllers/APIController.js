module.exports = (() => {

  const BaseController = require('./BaseController')
  const dataHarvester = require('../lib/data-harvester')

  class APIController extends BaseController {
    get autoBind () { return [
      'getData'
    ]}

    async getData (ctx) {
      // Return data here
      // dataHarvester.harvest() or something

      return this.notFound(ctx)
    }
  }

  return new APIController()
})()
