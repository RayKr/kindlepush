var wechat = require('wechat');
var config = require('../conf/config');

exports.reply = wechat(config, function(req, res, next) {
	console.log("2342fs");
	res.reply("fuck");
});