### web或h5使用im聊天工具：

**本demo使用**


- 进入node文件 cnpm i 或 yarn安装依赖。

- 打开terminal 执行 node index.js 启动服务（服务提供了一个用户系统，有六个账号，不校验密码，只要用户名对即可登陆）

- 进入H52 在浏览器打开两个index.html，分别登陆两个账号，（liu 和 user)两个是好友了，可用这两个账号。

- 登陆后会显示好友列表，因为没指定nickname（昵称）所以显示的都是用户的id，点击选中，在发送消息框输入内容发送。

- 另一个账号就可以是实时收到，并展示出来。


使用前首先要明确几点：

**控制台：**

使用im，需要先注册一个im账号，在控制台可以创建应用，一个应用就是一个im用户体系。

**后端：**

1、 通过 identifier 获取 sig , 用于前端登录 im 鉴权。

**identifier：** 自己系统中的用户标识（即唯一id），im系统需要根据表示识别用户来保证消息是在正确的用户之间传递。

**userSig：** 非对称加密得到的一个识别值，im几乎所有的api都依赖， userSig、identifier、和 SDKAppID。

所以在登陆自己的系统后这三个字段都应该返回（感觉有风险，这样都会暴露出来）。可能后端把需要的接口都封装一下才是最合理的，即请求im接口由后端发起。

![](https://main.qcloudimg.com/raw/3023f7d4562cb18783b4106cd5c2cd60.svg)

2、 将用户导入到你的腾讯云 im 应用中。

如果自己系统中用户没有导入im，添加好友是找不到的，所以导入必须做。

3、 双向绑定好友关系，绑定后才能一对一通讯。

这个可能会控制台设置有关，不一定。

前端：

1. [（项目负责人创建更准确）首先创建应用，这个应用会生成key后端生成sig会用到](https://cloud.tencent.com/document/product/269/4196)

2. demo下载下来有个H5的文件就是web的相关内容，里面写的非常详细，但是我们要自己写样子，所以只用sdk就够，`spark-md5.js webim.js json2.js` [web集成sdk](https://cloud.tencent.com/document/product/269/33143)


|目录|说明|
|:--------|:---------|
|json2.js |提供了 JSON 的序列化和反序列化方法，可以将一个 JSON 对象转换成 JSON 字符串，也可以将一个 JSON 字符串转换成一个 JSON 对象，如果要需要在原生不支持 JSON 数据格式处理的浏览器使用 WEBIM SDK，则需要引入该文件|
|spark-md5 |用于获取文件MD5，在上传图片时需要先获取文件的 MD5|
|webim.js |WEBIM SDK 库，提供了聊天，群组管理，资料管理，关系链（好友，黑名单）管理功能|


### 工具：

[官方提供的借口调用工具](https://avc.qclou.com/im/APITester/APITester.html?&_ga=1.44378530.726315081.1554604638#v4/im_open_login_svc/account_import)

### 使用限制：

[使用限制](https://cloud.tencent.com/document/product/269/32429)

