/**
 * @file 页面
 */
class View {
  async index(ctx) {
    let title = '啊啊实打实的'
    await ctx.render('index', { title })
  }
}

export default new View()
