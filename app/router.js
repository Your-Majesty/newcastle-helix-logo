module.exports = (() => {

  const KoaRouter = require('koa-router')

  const router = new KoaRouter()

  // Controllers
  const APIController = require('./controllers/APIController')
  const PageController = require('./controllers/PageController')
  
  router.get('/api/data', APIController.getData)
  router.get('/app', PageController.getApp)
  router.get('/', PageController.getIndex)


  return router

})()
