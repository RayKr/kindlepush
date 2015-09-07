var http = require('http');
var fs = require('fs');
var downcfg = require('../conf/downcfg');

module.exports.downPageByUrl = function (url, callback) {
  downPage(url);
};

function downPage(url) {
  var data = '';

  var req = http.request(url, function(res){
    
    res.setEncoding('utf8');
  
    res.on('data', function(chunk){
        data += chunk;
    });
  
    res.on('end', function(){
        dealData(data);
    });
  });
  
  req.on('error', function(e){
      throw e;
  });
  
  req.end();
  console.log("Data is loading...");
}

function dealData(data) {
  writeFile(getTitle(data)+'.html', data);
}

function getTitle(data) {
  var reg = /<title>.*?title>/g;
  while(match = reg.exec(data)) {
    return match[0].replace('<title>', '').replace('</title>', '');
  }
}

function writeFile(filename, data){
  fs.writeFile(downcfg.downdir+filename, data, function (err) {                                                                                                 
    if (err) throw err;
    console.log('File saved.');
  });
}