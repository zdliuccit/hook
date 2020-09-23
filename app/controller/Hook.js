/**
 * @file hook
 */
class Hook {
    async hook(ctx) {
        ctx.body = 'hook'
        console.log('hook', '接收到git项目更新了')
    }

    async getLogs(ctx) {
        ctx.body = 'log'
        console.log('获取日志')
    }
}

export default new Hook()
