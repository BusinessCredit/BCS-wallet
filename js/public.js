var RequestAddress="https://ub.bcachain.org";//正式

var RegisterURL=RequestAddress+"/Member/Register";//注册接口
var RegistersmsURL=RequestAddress+"/Member/Registersms";//注册滑动验证
var EidtPasswordsmsURL=RequestAddress+"/Member/EidtPasswordsms"//修改登录密码的验证
var EidtPasswordURL=RequestAddress+"/Member/EidtPassword";//修改登录密码
var EidtPayPasswordURL=RequestAddress+"/Member/EidtPayPassword";//修改交易密码
var RefreshTokenURL=RequestAddress+"/Member/RefreshToken";
var ForgotsmsURL=RequestAddress+"/Member/Forgotsms";//忘记密码的验证
var ForgotURL=RequestAddress+"/Member/Forgot";//忘记密码
var GetSignDetialsURL=RequestAddress+"/Sign/GetSignDetials";//获取签到信息
var CoinURL=RequestAddress+"/Coin/Get";//币种
var BalanceURL=RequestAddress+"/Member/Balance";//
var AddressURL=RequestAddress+"/Coin/Address/{id}";//转入
var TransferURL=RequestAddress+"/Coin/Transfer"//转出
var GetRechargeURL=RequestAddress+"/Coin/GetRecharge";//获取充值记录
var GetWithdrawURL=RequestAddress+"/Coin/GetWithdraw";//获取提币记录
//红包
var getRedURL=RequestAddress+"/Red/Get";//获取红包信息
var GetDetailsByMobilURL=RequestAddress+"/Red/GetDetailsByMobile";//通过手机号，获取用户红包
var PublishRedURL=RequestAddress+"/Red/PublishRed";//发红包
var GetRedConfigURL=RequestAddress+"/Red/GetRedConfig";//获取分享红包的域名
var GrabByAppURL=RequestAddress+"/Red/GrabByApp"//抢红包
var GetDetailsByRedURL=RequestAddress+"/Red/GetDetailsByRed";//最近领取的红包记录
var GetDetailsByShareURL=RequestAddress+"/Red/GetDetailsByShare";//获取分享的红包记录
var AuthInfoURL=RequestAddress+"/Member/AuthInfo";//获取用户审核信息
//个人信息
var UpdateHeadURL=RequestAddress+"/Member/UpdateHead";//修改头像
var UpdateNickURL=RequestAddress+"/Member/UpdateNick";//修改昵称
var SubAuthURL=RequestAddress+"/Member/SubAuth"//实名认证
var GetInfomationURL=RequestAddress+"/Member/GetInfomation";//获取消息列表
var ReadMessageListURL=RequestAddress+"/Member/ReadMessageList";//用户一键读取;
var ReadMessageURL=RequestAddress+"/Member/ReadMessage/{id}";//用户单个读取;
//抽奖
var GetLotteryURL=RequestAddress+"/Sign/GetLottery";//获取奖项
var LotteryDetailsListURL=RequestAddress+"/Sign/LotteryDetailsList";//获取抽奖记录
var LotteryDrawURL=RequestAddress+"/Sign/LotteryDraw";//积分抽奖
var updateURL=RequestAddress+"/System/update";//检查更新
var withdrawsmsURL=RequestAddress+"/Member/withdrawsms";//提现发送验证码

//////////////////DAPP接口//////////////////
// var DappAddress="https://dapp.bcachain.org/dapp";
var DappAddress="http://dapp.svkeji.cn/dapp";
var MachineList=DappAddress+'/api/machine_list'//矿机列表
var CalculatorInfo=DappAddress+'/api/calculator_info'//计算器信息
var MachineBuy=DappAddress+'/api/machine_buy'//矿机购买
var MyMachine=DappAddress+'/api/my_machine'//我的矿机列表
var BeAutoIncome=DappAddress+'/api/do_auto_income'//变为自动收取
var BeXufeiIncome=DappAddress+'/api/do_auto_xufei'//变为自动收取
var Income=DappAddress+'/api/income'//我的收益
var getIncome=DappAddress+'/api/income_get'//获取收益
var getAllIncome=DappAddress+'/api/income_all_get'//一键获取收益
var NewsList=DappAddress+'/api/news_list'//新闻列表
var NewsDetail=DappAddress+'/api/news_detail'//新闻详情
var NewsIndex=DappAddress+'/api/news_index'//首页新闻
var IndexData=DappAddress+'/api/index'//首页数据
var IndexAds=DappAddress+'/api/index_ads'//首页广告
var RulerHTML=DappAddress+'/api/ruler_html'//规则
var IncomeRecord=DappAddress+'/api/income_record'//收益记录
var EwmCode=DappAddress+'/api/ewm_code'//二维码参数
var RankMy=DappAddress+'/api/rank_my'//我的排名
var RankList=DappAddress+'/api/rank_list'//排名列表
var Integral=DappAddress+'/api/integral'//积分
var VipLevel=DappAddress+'/api/viplevel'//vip等级
var BeNote=DappAddress+'/api/be_note'//城市节点
var ISNote=DappAddress+'/api/is_note'//判断城市节点
var TeamMy=DappAddress+'/api/team_my'//我的团队
var TeamList=DappAddress+'/api/team_list'//我的团队
var HasEwm=DappAddress+'/api/has_ewm'//判断是否有二维码
var CanBuyMachine=DappAddress+'/api/can_buy_machine'//判断是否可以购买矿机
var DoLockParent=DappAddress+'/api/do_lock_parent'//判断是否可以购买矿机
var getUsdt2Cny =  DappAddress+'/api/get_usdt2cny'//

//
var DoSign =  DappAddress+'/other/do_sign'//签到
var RegRedpack =  DappAddress+'/other/reg_redpact'//新人红包？
var GetRegRed =  DappAddress+'/other/get_redpact'//新人红包
//交易大厅

var TradeOrderCreate =  DappAddress+'/trade/order_create'
var TradeData =  DappAddress+'/other/trade_price'
var TradeMyOrder =  DappAddress+'/trade/order_my'
var TradeCancelOrder =  DappAddress+'/trade/order_cancel'
var TradeOrder =  DappAddress+'/trade/order_list'
var TradeBuyOrder =  DappAddress+'/trade/order_buy'
var TradeSaleOrder =  DappAddress+'/trade/order_sale'
var DappSendCode =  DappAddress+'/account/send_code'
var DappAccountMy =  DappAddress+'/account/account_my'
var DappAccountTansfer =  DappAddress+'/account/transfer_account'
var DappAccount =  DappAddress+'/account/account'
var DappAccountUsdt =  DappAddress+'/account/usdt'
var DappAccountRecord = DappAddress+'/account/account_record'
var DappUsdtTansfer =  DappAddress+'/account/usdt_tansfer'
var DappTradePrice =  DappAddress+'/trade/get_usdt2bcac'
var TradeOtcList =  DappAddress+'/otc/otc_list'
var OtcInfo =  DappAddress+'/otc/otc_info'
var OtcInfoUpdate =  DappAddress+'/otc/otc_info_update'
var OtcUpdateStatus =  DappAddress+'/otc/otc_info_updatestatus'

var TradeKLine =  DappAddress+'/other/kline'
var TradePrice =  DappAddress+'/other/trade_price'
var TradeLastPrice =  DappAddress+'/other/trade_last_price'
var Usdtnews =  DappAddress+'/other/usdt_news'
var KnowledgeType =  DappAddress+'/other/knowledge_type'
var KnowledgeList =  DappAddress+'/other/knowledge_list'
var KnowledgeDetail =  DappAddress+'/other/knowledge_detail'
var HuafeiInfo =  DappAddress+'/other/huafei_info'
var HuafeiRecharge =  DappAddress+'/other/huafei_recharge'
var HuafeiRecord =  DappAddress+'/other/huafei_record'

var LoginURL=DappAddress+"/register/doLogin";
var LoginSendCode=DappAddress+"/register/loginSendCode";
























/**
/**
 * 关闭当前页面
 * @param {Object} times
 */
var close = function(times) {
	if(times) {
		setTimeout(function() {
			var ws = plus.webview.currentWebview();
			plus.webview.close(ws);
		}, times);
	} else {
		var ws = plus.webview.currentWebview();
		plus.webview.close(ws);
	};
};
/**
 * 打开新页面
 * @param {Object} times
 */
var show=function(name){
	var web = plus.webview.getWebviewById(name);
	if(!web){
		var web=plus.webview.create(name+".html",name,{userSelect: false});
	};
	setTimeout(function(){
		web.show("slide-in-right");
	},500);

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
				userSelect: true,
				render: "always",
		};
	var web=plus.webview.create(name+".html",name,subpage_style);
	setTimeout(function(){
		web.show("slide-in-right");
	},300);

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
var restartApp = function() {
	plus.nativeUI.toast('登录过期了，请重新登录');
	setItem("Userdata",null);
	window.localStorage.clear();
	setTimeout(function() {
		plus.runtime.restart();
	}, 200);
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
	console.log(text);
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
};
/**
 * 获取缓存信息
 * @param {String} 缓存名称
 */
var getItem = function(name) {
	try {
		//var json = window.localStorage.getItem(name);
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
//	return y + '-' + m + '-' + d + ' ' + '　' + h + ':' + minute + ':' + second;return  h + ':' + minute + ':' + second;
	return  h + ':' + minute + ':' + second;
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
	return y + '-' + m + '-' + d +'　' + h + ':' + minute + ':' + second;
}; 

var GetCoinPrice = function(name){
	return 1;
};

var GetCoin= function(Id){
	
	var coins =getItem("coinlist");
	var m = coins.filter(function(a){
		return a.Id==Id;
	})
	if(m.length>0){
		return m[0];
	}
	else{
		return null;
	}
};









