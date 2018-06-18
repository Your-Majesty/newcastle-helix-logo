require('dotenv').config()

const Koa = require('koa')
const koaStatic = require('koa-static')
const koaCompress = require('koa-compress')

const dataHarvester = require('./lib/data-harvester')
const dataCache = require('./lib/data-cache')

const app = new Koa()
const router = require('./router')

const logoStillGenerator = require('./lib/logo-still-generator')
const nunjucksMiddleware = require('./middleware/nunjucks')

app.use(koaCompress())

app.use(koaStatic('./public', {
  hidden: true
}))

app.use(nunjucksMiddleware)
app.use(router.routes())


dataHarvester.harvest().then(() => {
  dataCache.update()
}) 

setInterval(() => {
  dataHarvester.harvest().then(() => {
    dataCache.update()
    logoStillGenerator.captureCurrentState()
  }) 
}, process.env.HARVEST_INTERVAL)

app.listen(3000, () => {
  setTimeout (() => {
    logoStillGenerator.captureCurrentState() 
  }, 5000)
  
})

console.log('Newcastle Helix Logo is up.')
