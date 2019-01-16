const shell = require('shelljs');//这里要下载shell插件
const fs = require('fs')
const path = require('path')
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
// 使用ctx.body解析中间件
app.use(bodyParser())
let home = new Router()

const configRoot = '/tmp/config.json'

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './src/dist'

app.use(static(
  path.join(__dirname, staticPath)
))

home.get('/', async (ctx) => {
  const content = fs.readFileSync('./src/dist/index.html', 'utf-8')
  ctx.body = content
})

// 获取已经保存过的配置文件的信息
home.get('/list', async (ctx) => {
  // 先判断一下本地是否存在  config.json 
  let isEixst = fs.existsSync('/tmp/config.json')
  if (!isEixst) {
    ctx.body = { code: 200, result: [] }
    return
  }
  const result = JSON.parse(fs.readFileSync('/tmp/config.json', 'utf-8'))
  ctx.body = {
    code: 200,
    result
  }
})

// 添加配置
home.post('/address', async (ctx) => {
  const { address, type, title } = ctx.request.body
  const content = { address, type, title }

  // 将信息添加到 config.json 中
  let isEixst = fs.existsSync('/tmp/config.json')
  if (isEixst) {
    // 如果已经存在该文件
    const result = JSON.parse(fs.readFileSync('/tmp/config.json', 'utf-8'))
    const newId = result[result.length - 1] ? ~~result[result.length - 1].id + 1 : 0
    result.push({ id: newId, ...content})
    fs.writeFileSync(configRoot, JSON.stringify(result), 'utf-8')
  } else {
    // 不存在 直接写入
    fs.writeFileSync(configRoot, JSON.stringify([{id: 0, ...content}]), 'utf-8')
  }

  ctx.body = {code: 200}
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
  fs.writeFileSync('/tmp/run.sh', content)

  // 2 给脚本增加运行权限
  shell.exec('chmod +x run.sh', { silent: true });
  // 3 打开一个新的终端去执行这文件
  shell.exec('open -a Terminal run.sh')
  ctx.body = { code: 200, message: `已链接到 ${type ? 'mysql' : 'redis' } 地址为 ${server}` }
})
app.use(cors());

// 加载路由中间件
app.use(home.routes()).use(home.allowedMethods())

app.listen(9098, () => {
  console.log('i am 9098')
});