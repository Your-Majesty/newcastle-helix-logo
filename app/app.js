require('dotenv').config()

const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()
const router = require('./router')

app.use(koaStatic('./public', {
  hidden: true
}))

app.use(router.routes())

app.listen(3000)
console.log('Newcastle Helix Logo is up.')
