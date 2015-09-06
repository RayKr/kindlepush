var process = require('child_process');
var exec = process.exec;

module.exports.convertHtmlToMobi = function(path) {
	exec('../bin/kindlegen ' + path);
};
