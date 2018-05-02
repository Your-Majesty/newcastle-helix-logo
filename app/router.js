module.exports = (() => {

  const KoaRouter = require('koa-router')

  const router = new KoaRouter()

  // Controllers
  const APIController = require('./controllers/APIController')
  router.get('/api/data', APIController.getData)


  return router

})()
