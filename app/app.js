require('dotenv').config()

const Koa = require('koa')
const koaStatic = require('koa-static')

const dataHarvester = require('./lib/data-harvester')
const dataCache = require('./lib/data-cache')

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
  }) 
}, process.env.HARVEST_INTERVAL)

// Set here an interval with the env file setup

app.listen(3000)

console.log('Newcastle Helix Logo is up.')
