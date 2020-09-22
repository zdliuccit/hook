/**
 * @file 配置文件
 */
const path = require('path')

export default {
  hook: {
    port: 7878,
  },
  app: {
    port: 8686,
    webpack: {
      entry: {
        app: path.join(__dirname, 'src/index.js'),
      },
    },
  },
  /**
   * 限流中间件配置，令牌桶(Token bucket)
   * @desc 限流三种算法 令牌桶(Token bucket) 漏桶(Leaky bucket) 计数器(Counter)
   * enable # 状态
   * rate # 令牌桶模式 令牌加入桶的速率
   * upperLimit # 上限
   * */
  currentLimitedConfig: {
    enable: true,
    rate: 100,
    upperLimit: 1000
  },
}
