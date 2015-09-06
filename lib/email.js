var nodemailer = require('nodemailer');
var mailcfg = require('../conf/mailcfg');

var transporter = nodemailer.createTransport(mailcfg);

function initOpt(kinldemail, filename, filepath) {
  var mailOptions = {
    from: mailcfg.from, 
    to: kinldemail,
    subject: filename, 
    attachments: [ 
      ,{
        path: filepath,
        encoding: 'utf-8'
      }
    ]
  };
  return mailOptions;
}


function sendMail(cfg) {
  transporter.sendMail(cfg, function(err, info) {
    if(err) {
    	console.log(err);
    } else {
    	console.log('Message sent:' + info.response);
    }
  });
}

module.exports.pushToKindle = function(kinldemail, filename, filepath) {
	sendMail(initOpt(kinldemail, filename, filepath));
}