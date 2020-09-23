import Koa from 'koa'
import Views from 'koa-views'
import Logger from 'koa-logger'
import Compress from 'koa-compress'
import appConfig from './../app.config'
import middles from './middleWares'
import router from './router'

const path = require('path')
const resolve = (dir) => {
  return path.resolve(process.cwd(), dir)
}
const app = new Koa()

app.use(Logger())
app.use(Compress())

const render = Views(resolve('app/views'), {
  extension: 'ejs'
})
app.use(render)

/**
 * 启动自定义中间件
 */
middles(app)

/**
 * 启动路由
 */
router(app)

/**
 * app错误监听
 */
app.on('error', (err) => {
  console.error('Server error: \n%s\n%s ', err.stack || '')
})

app.listen(appConfig.port)
