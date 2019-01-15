const shell = require('shelljs');//这里要下载shell插件
const fs = require('fs')
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')
// 使用ctx.body解析中间件
app.use(bodyParser())
let home = new Router()

// 获取已经保存过的配置文件的信息
home.get('/list', async (ctx) => {
  const result = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
  ctx.body = {
    code: 200,
    result
  }
})

// 登录
home.post('/link', async (ctx) => {
  const { address, type } = ctx.request.body
  // 1  生成 run.sh 文件
  // 根据类型判断
  let server = ''
  if (type === 0) {
    // 0 redis
    server += 'redis-cli -h'
  } else {
    // 1 msyql
    server += 'ssh'
  }

  // 不用判断文件是否存在 直接重新写入
  const content = `#!/bin/bash \n  \n ${server} ${address}`
  // const content = '#!/bin/bash \n  \n ssh root@101.200.45.254'
  fs.writeFileSync('run.sh', content)

  // 2 给脚本增加运行权限
  shell.exec('chmod +x run.sh', { silent: true });
  // 3 打开一个新的终端去执行这文件
  shell.exec('open -a Terminal run.sh')
  ctx.body = { code: 200, message: `已链接到 ${type ? 'mysql' : 'redis' } 地址为 ${server}` }
})
app.use(cors());

// 加载路由中间件
app.use(home.routes()).use(home.allowedMethods())

app.listen(3000, () => {
  console.log('i am 3000')
});