var http = require("http"),
	url = require("url"),
	BufferHelper = require('bufferhelper');

var bufferHelper = new BufferHelper();

function HTTP_Helper() {

}

HTTP_Helper.get = function(argUrl, params) {
	var parsedUrl, opt, req;

	parsedUrl = url.parse(argUrl);

	opt = {
     	host: parsedUrl.hostname,
     	port: parsedUrl.port,
     	method: 'GET',
     	path: parsedUrl.pathname,
     	headers:{}
    }

    if (parsedUrl.search) opt.path += "?" + parsedUrl.search;
	
	req = http.request(opt, function(res){
	    res.setEncoding('utf8');

	    res.on('data', function(chunk){
	    	bufferHelper.concat(chunk);
	    });

	    res.on('end', function() {
	    	var result = bufferHelper.toBuffer().toString();
	    });

	    res.on('error', function(err){
	    	console.log(err);
	    });
	});

	req.on('error', function(err){
    	console.log(err);
	});
	
	req.end();
};

module.exports = HTTP_Helper;