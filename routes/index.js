var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end("helloworld");
  console.log('index');
});

module.exports = router;
