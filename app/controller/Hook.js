/**
 * @file hook
 */
class Hook {
    async hook(ctx) {
        ctx.body = 'hook'
        console.log('hook', '接收到git项目更新了')
    }

    async log(ctx) {
        ctx.body = 'log'
    }
}

export default new Hook()
