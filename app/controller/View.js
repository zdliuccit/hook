/**
 * @file 页面
 */
class View {
    async index(ctx) {
        let title = '啊啊实打实的'
        await ctx.render('index', {title})
    }

    async log(ctx) {
        let title = 'logger'
        await ctx.render('log', {title})
    }
}

export default new View()
