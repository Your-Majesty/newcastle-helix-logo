require('dotenv').config()

const Koa = require('koa')
const koaStatic = require('koa-static')

const dataHarvester = require('./lib/data-harvester')
const dataCache = require('./lib/data-cache')

const logoStillGenerator = require('./lib/logo-still-generator')

const app = new Koa()
const router = require('./router')

app.use(koaStatic('./public', {
  hidden: true
}))

app.use(router.routes())

dataHarvester.harvest().then(() => {
  dataCache.update()
}) 



setInterval(() => {

  dataHarvester.harvest().then(() => {
    dataCache.update()
    // TODO: PUT IN DIFFERENT TIMER
    logoStillGenerator.captureCurrentState()
  }) 
}, process.env.HARVEST_INTERVAL)

app.listen(3000, () => {
  console.log('hello')
  setTimeout (() => {
    logoStillGenerator.captureCurrentState() 
  }, 5000)
  
})

console.log('Newcastle Helix Logo is up.')
