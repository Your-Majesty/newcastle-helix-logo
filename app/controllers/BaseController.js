class BaseController {
  constructor () {
    if (this.autoBind) this.bindAll(this.autoBind)
  }

  bindAll (arr) {
    arr.forEach(func => {
      this[func] = this[func].bind(this)
    })
  }

  async notFound (ctx) {
    ctx.status = 404
  }

  async fail (ctx, data = null) {
    ctx.body = {
      success: false,
      data
    }
  }

  async success (ctx, data, limits) {
    ctx.body = {
      success: true,
      limits,
      data
    }
  }
}

module.exports = BaseController
