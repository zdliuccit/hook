/**
 * 模块化处理router
 */
import Router from 'koa-router'
import Hook from './hook'

const router = new Router()

/**
 * 启动路由
 * allowedMethods,在当所有路由中间件最后调用.此时根据 ctx.status 设置 response 响应头
 */
export default (app) => {
  router.get('/', async ctx => {
    ctx.body = 'hook'
  })
  router.use('/hook', Hook.routes(), Hook.allowedMethods())
  app.use(router.routes(), router.allowedMethods())
}
