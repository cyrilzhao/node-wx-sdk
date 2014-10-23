
var HTTP_Helper = require("http_helper");

function WxSDK(appid, secret) {
	this.appid = appid;
	this.secret = secret;

	if(appid != "" && secret != "") {
		this.get_access_token();
	}
}

WxSDK.prototype.get = function(url, params) {
	HTTP_Helper.get(url, params);
};

WxSDK.prototype.get_access_token = function() {
	var params, resp;

	params = [];
	params.appid = this.appid;
	params.secret = this.secret;
	params.grant_type = "client_credential";

	resp = this.get("")
};

WxSDK.prototype.post = function() {
	HTTP_Helper.post(url, params);
};