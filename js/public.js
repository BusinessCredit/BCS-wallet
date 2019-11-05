var rpcaddress = 'https://ropsten.infura.io';

var initWeb3 = function(){
    return new Web3(new Web3.providers.HttpProvider(rpcaddress));
}
//接口
var ApiHost = 'http://ub.bcsapi.svkeji.cn';
UpdataURL = ApiHost+'/version.php';
NewsList = ApiHost+'/news.php';
HelpList = ApiHost+'/help.php';
TradeList = ApiHost+'/trade.php';

//发送交易
function sendEth(fromAddress, toAddress, amount, password, keystore, gas, gasPrice, callback) {
    let account = web3.eth.accounts.decrypt(keystore, password),
        value = web3.utils.toWei(amount, 'ether');
    web3.eth.accounts.wallet.add(account);
    web3.eth.sendTransaction({
        from: fromAddress,
        to: toAddress,
        value: value,
        gasPrice: gasPrice,
        gas: gas
    }, function (error, txhash) {
        callback(error, txhash)
    });
};
//


//沉浸式状态栏模式
var getImmersedHeight = function(){
	var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);  
	if(ms&&ms.length>=3){ // 当前环境为沉浸式状态栏模式  
	    immersed=parseFloat(ms[2]);// 获取状态栏的高度  
	}
	return immersed;
};


//字符串中间省略
var shortAddress = function(str){
	var reg = /^(\S{10})\S*(\S{10})$/;
	return str.replace(reg,"$1...$2");
}
function shuffle(arr) {
	var arr1 = arr.slice();
　　for (var i = arr1.length - 1; i >= 0; i--) {
　　　　var randomIndex = Math.floor(Math.random() * (i + 1));
　　　　var itemAtIndex = arr1[randomIndex];
　　　　arr1[randomIndex] = arr1[i];
　　　　arr1[i] = itemAtIndex;
　　}
　　return arr1;
}

/**
 * 打开新页面
 * @param {Object} times
 */
var show=function(name,buttons=[],aniShow='slide-in-right'){
	mui.openWindow({
	  url: name+'.html',
	  id: name,
	  styles: {                           
	    titleNView: {
	    	buttons:buttons,
		  	autoBackButton:true
	    }
	  },
	  show:{
		  aniShow:aniShow
	  },
	  waiting:{
		  autoShow:false
	  }
	});
};
var show_without_title=function(name){
	mui.openWindow({
	  url: name+'.html',
	  id: name,
	  waiting:{
		  autoShow:false
	  }
	});
};
var show_with_menu =function(name){
	var pageObj = plus.webview.getWebviewById(name);
	if(pageObj){
		pageObj.show();
		return;
	};
	var subpage_style = {
		top: 0,
		bottom: '55px',
		userSelect: true
	};
	var web=plus.webview.create(name+".html",name,subpage_style);
	setTimeout(function(){
		web.show("fade-in");
	},300);

};
var amountFormat = function(num){
	num += '';
	num = num.replace(/[^0-9|\.]/g, '');
	if (/^0+/) {
		num = num.replace(/^0+/, '');
	}
	if (!/\./.test(num)) {
		num += '.00000';
	}
	if (/^\./.test(num)) {
		num = '0' + num;
	}
	num += '00000';
	num = num.match(/\d+\.\d{3}/)[0];
	return num;
}
var restartApp = function() {
	plus.nativeUI.confirm('请确保钱包已做好备份',function(event){
		if(event.index==0){
			window.localStorage.clear();
			setTimeout(function() {
				plus.runtime.restart();
			}, 200);
		}
	},'确认退出当前身份?')
};
/**
 * 处理首页点击底部向上浮动和页面不完整
 * @param {String} 缓存名称
 * @param {JSON} 缓存对象
 */
var _handFloat=function(){
	var hei=$(window).height()-50;
	var h = document.body.scrollHeight;
	window.onresize = function() {
		mui.plusReady(function(){
			plus.webview.currentWebview().setStyle({
				top:0,
				height:hei+'px',
				statusbar: {
					background: '#fff'
				}
			});
		});
	};
};
/**
 * 复制文字
 * @param {String} 内容
 */
var copy = function(text) {
	var osName = plus.os.name;
	if(plus.os.name == "Android") {
		var Context = plus.android.importClass("android.content.Context");
		var main = plus.android.runtimeMainActivity();
		var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
		plus.android.invoke(clip, "setText", text);
	} else if(osName == "iOS") {
		var UIPasteboard = plus.ios.importClass("UIPasteboard");
		var generalPasteboard = UIPasteboard.generalPasteboard();
		// 设置/获取文本内容:
		generalPasteboard.setValueforPasteboardType(text, "public.utf8-plain-text");
	}
	plus.nativeUI.toast('已复制');
};
/**
 * 设置缓存
 * @param {String} 缓存名称
 * @param {JSON} 缓存对象
 */
var setItem = function(name, item) {
	try {
		window.localStorage.setItem(name, JSON.stringify(item));
	} catch(e) {

	}
};
/**
 * 获取缓存信息
 * @param {String} 缓存名称
 */
var getItem = function(name) {
	try {
		var json = window.localStorage.getItem(name);
		if(json) {
			if(json.length < 2) {
				return null;
			} else {
				return JSON.parse(json);
			}
		} else {
			return null;
		}
	} catch(e) {
		return null;
	}
};
var clearItem = function(){
	window.localStorage.clear();
}
//时间
function formatDate(inputTime) { 
	var date = new Date(parseInt(inputTime*1000));
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
//	console.log(y + '-' + m + '-' + d + ' ' + '　' + h + ':' + minute + ':' + second);
	return y + '.' + m + '.' + d +' ' + h + ':' + minute + ':'+second;
};

function formatDate1(inputTime) { 
	var date = new Date(parseInt(inputTime*1000));
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
//	console.log(y + '-' + m + '-' + d + ' ' + '　' + h + ':' + minute + ':' + second);
	return m + '.' + d +' ' + h + ':' + minute;
};









