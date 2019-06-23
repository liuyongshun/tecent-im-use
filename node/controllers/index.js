const userList = require('../model/index');
const sig = require('../lib/genSig');
const Api = require('../lib/api');
const config = require('../lib/config');

const setType = (ctx) => {
  ctx.response.type = 'application/json';
}

const baseRes = {
  code: 0,
  data: null,
  message: ''
};

class User {
  async login (ctx) {
    setType(ctx);
    // koa-body 解析了json
    let data = ctx.request.body;
    let isHave = userList.find(n => n.name === data.user);
    if (isHave) {
      // 执行一次，将本地的5个假的用户导入im
      // let allUser = userList.map(n => n.id);
      // let sigKey = sig.genSig(isHave.id);
      // Api.reqApi({
      //   url: '/im_open_login_svc/multiaccount_import',
      //   method: 'POST',
      //   body: JSON.stringify({
      //     Accounts: allUser
      //   })
      // }, {
      //   userId: isHave.id,
      //   sig: sigKey
      // }, (error, response, body) => {
      //   console.log(body, 'show import result in stack')
      // })
      const result = {
        sig: sig.genSig(isHave.id),
        skappid: config.sdk_appid,
        ...isHave
      }
      ctx.body = Object.assign({}, baseRes, {
        code: 0,
        data: result,
        message: '登陆成功'
      });
    } else {
      ctx.body = Object.assign({}, baseRes, {
        code: -1,
        data: 'fail',
        message: '账号或密码错误'
      });
    }
  }
}
module.exports = new User();