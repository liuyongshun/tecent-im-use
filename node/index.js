// module plugin
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const con = require('./lib/config');
const koabody = require('koa-body');


// module self
const apiRouter = require('./router');

const app = new Koa();

app.use(cors({
  origin: function (ctx) {
      return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

// 由于middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(koabody({}));
app.use(bodyParser());
app.use(apiRouter.routes());

// 错误处理
app.on('error', err => {
  console.log('server error', err)
});

app.listen(3433);
console.log('app started at port 3433...');