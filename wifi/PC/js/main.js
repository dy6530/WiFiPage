$(document).ready(function(){
	// 是PC端 .woff2          application/x-font-woff
	if (!IsPC()) {
			window.location.href = '../../mobile/index.htm';  // 手机端的下载页
		}
});

function appDownloadiPhone()
{
	window.location.href = 'https://itunes.apple.com/us/app'; // 跳AppStore下载地址
}
function appDownloadAndroid()
{
	window.location.href = 'https://github.com/zikko2017/zikko2017.github.io/blob/master/AppUpdate/apk/etworld.apk?raw=true'; // 跳安卓端下载地址
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