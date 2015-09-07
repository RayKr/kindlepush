var express = require('express');
var wechat = require('./routes/wechat_mp');

var app = express();

// 路由
app.use(express.query());
app.use('/wechat', wechat);

// 启动服务器
var server = app.listen(80, function(req, res) {
  console.log('now listenning at port 80......');
});
