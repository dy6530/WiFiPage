$(document).ready(function(){
	// 是PC端
	if (IsPC()) {
			window.location.href = '../../PC/index.html';  // pc端的下载页
		}
});
/*ios download app*/
function appDownload(){
	var u = navigator.userAgent, app = navigator.appVersion;

	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;

	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

	
	// 这里是安卓浏览器
	if (isAndroid) {

		window.location.href = 'https://github.com'; // 跳安卓端下载地址

	}

	// 这里是iOS浏览器
	if (isIOS) {

		window.location.href = 'https://itunes.apple.com/us/app'; // 跳AppStore下载地址

	}
	
	// 是PC端
	if (IsPC()) {
		
		if (isChineseLang()){
			window.location.href = 'http://www.fangte.com/';  // 公司主页
		}else{
			window.location.href = 'http://www.fangte.com/';  // 公司主页
		}

	}	


	// 是微信内部webView
	if (is_weixn()) {

		if (isChineseLang())
			alert("请点击右上角按钮, 点击使用浏览器打开");
		else
			alert("Please click on the upper right button, click on the browser to open");

	}
}

// 是微信浏览器
function is_weixn(){

	var ua = navigator.userAgent.toLowerCase();

	if(ua.match(/MicroMessenger/i)=="micromessenger") {

		return true;

	} else {

		return false;

	}

}

function isChineseLang()
{
	if (navigator.appName == 'Netscape')
		var language = navigator.language;
	else
		var language = navigator.browserLanguage;

	if (language.indexOf('zh') > -1) return true;
	else return false;
	
	//if (language.indexOf('en') > -1) document.write('english');
	//else if (language.indexOf('nl') > -1) document.write('dutch');
	//else if (language.indexOf('fr') > -1) document.write('french');
	//else if (language.indexOf('de') > -1) document.write('german');
	//else if (language.indexOf('ja') > -1) document.write('japanese');
	//else if (language.indexOf('it') > -1) document.write('italian');
	//else if (language.indexOf('pt') > -1) document.write('portuguese');
	//else if (language.indexOf('es') > -1) document.write('Spanish');
	//else if (language.indexOf('sv') > -1) document.write('swedish');
	//else if (language.indexOf('zh') > -1) document.write('chinese');
	//else
	//document.location.href = 'english';
}


function IsPC() {

	var userAgentInfo = navigator.userAgent;

	var Agents = ["Android", "iPhone",

		"SymbianOS", "Windows Phone",

		"iPad", "iPod"];

	var flag = true;

	for (var v = 0; v < Agents.length; v++) {

		if (userAgentInfo.indexOf(Agents[v]) > 0) {

			flag = false;

			break;

		}

	}

	return flag;

}

