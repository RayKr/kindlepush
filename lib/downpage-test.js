var downpage = require('./downpage');

var url = 'http://mp.weixin.qq.com/s?__biz=MzA5MTQ0OTM4MQ==&mid=211036741&idx=1&sn=f11c0513a278b47e5a217efef5593511&scene=2&srcid=4E75Rm2zDprjNnFYWGqd&from=timeline&isappinstalled=0#rd';

var ss = downpage.downPageByUrl(url, function(err) {
	console.log('cccc');
});

//console.log(ss);

