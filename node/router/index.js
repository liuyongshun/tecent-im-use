const Router = require('koa-router');
const router = new Router();

const User = require('../controllers');
// 发送消息
router.post('/login', User.login);
// router.post('/get/:sinkey', User.getSig);
module.exports = router
