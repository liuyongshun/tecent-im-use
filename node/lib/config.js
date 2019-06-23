const fs = require('fs');
const path = require('path');
let private_key = fs.readFileSync(path.join(__dirname, './key/private_key.txt')).toString();
let public_key = fs.readFileSync(path.join(__dirname, './key/public_key.txt')).toString();

const obj = {
  "sdk_appid": 1400221570, // 控制台创建的应用id
  "expire_after": 180 * 24 * 3600, // 有效期180天
  "private_key_string": private_key,
  "public_key_string": public_key
}

module.exports = obj