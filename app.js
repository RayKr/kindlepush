var http = require('http');
var connect = require('connect');
var config = require('./conf/config');
var mp = require('./controllers/wechat');

var app = connect();

app.use('/wechat', mp.reply);
app.use('/', function (req, res) {
  res.writeHead(200);
  res.end('hello node api');
});

/**
 * Error handler
 */
app.use(function (err, req, res) {
  console.log(err.message);
  console.log(err.stack);
  res.statusCode = err.status || 500;
  res.end(err.message);
});

var server = http.createServer(app);
server.listen(3000);
