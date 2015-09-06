var wxcfg = require('../conf/wechatcfg');
var wechat = require('wechat');

module.exports = wechat(wxcfg, function (req, res, next) {
  var message = req.weixin;
  console.log('message='+message);
  res.reply('helloworlddddd');
});