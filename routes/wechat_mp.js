var wxcfg = require('../conf/wechatcfg');
var wechat = require('wechat');

module.exports = wechat(wxcfg, function (req, res, next) {
  var message = req.weixin;
  console.log('message.MsgType='+message.MsgType);
  if(message.MsgType === 'event' && message.Event === 'subscribe') {
  	  res.reply('欢迎订阅KindlePush，可将链接自动保存成书籍发送到您的Kindle设备。');
  }
  if(message.MsgType === 'text') {
  	res.reply('您发送的内容为文本格式，内容为：'+message.Content);
  	
  } else if(message.MsgType === 'link') {
  	res.reply('link='+message.Url);
  } else {
  	res.reply('暂不支持此格式！');
  }

});