const request = require('request');
const config = require('./config');
const numRandom = parseInt(Math.random() *100000000);
const defaultOptions = {
  baseUrl: 'https://console.tim.qq.com/v4',
  url: '',
  method: '',
  headers: {
    'Content-Type': 'application/json'
  }
};

class Api {
  reqApi (options, param, fn) {
    options.url = options.url + '?sdkappid=' + config.sdk_appid + '&identifier=' + param.userId + '&usersig=' + param.sig + '&random=' + numRandom + '&contenttype=json';
    let newOptions = Object.assign({}, defaultOptions, options);
    console.log(newOptions, 'newOptions');
    request(newOptions, (error, response, body) => {
      fn(error, response, body);
    });
  }
}

module.exports = new Api();