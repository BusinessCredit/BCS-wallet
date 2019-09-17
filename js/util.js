var mainTitle = null;
var util = {
	options: {
		ACTIVE_COLOR: "#4c90c6",
		NORMAL_COLOR: "#90A2C3",
		subpages: ["user.html"]
	},
	/**
	 *  简单封装了绘制原生view控件的方法
	 *  绘制内容支持font（文本，字体图标）,图片img , 矩形区域rect
	 */
	drawNative: function(id, styles, tags) {
		var view = new plus.nativeObj.View(id, styles, tags);
		return view;
	},
	/**
	 * 初始化首个tab窗口 和 创建子webview窗口 
	 */
	initSubpage: function(aniShow) {
		var subpage_style = {
				top: 0,
				bottom: 55,
				userSelect: false,
				render: "always",
			},
			subpages = util.options.subpages,
			self = plus.webview.currentWebview(),
			temp = {};
		Height=0;
		setItem("height", Height);
		// 初始化第一个tab项为首次显示
		temp[self.id] = "true";
		// 初始化绘制首个tab按钮
		util.toggleNview(0);

		var hide = function(sub) {
			setTimeout(function() {
				sub.hide();
			}, 30);
		}

		for(var i = 0, len = subpages.length; i < len; i++) {
			if(!plus.webview.getWebviewById(subpages[i])) {
				var url = subpages[i];
				var sub = plus.webview.create(url, subpages[i], subpage_style);
				sub.hide();
				self.append(sub);
			}
		}
	},
	/**	
	 * 点击切换tab窗口 
	 */
	changeSubpage: function(targetPage, activePage, aniShow) {
		var main = plus.webview.getLaunchWebview();
		if(plus.webview.getTopWebview()!=main){
			plus.webview.hide(plus.webview.getTopWebview());
		}
		if(mui.os.ios || aniShow[targetPage]) {
			plus.webview.show(targetPage);
		} else {
			//否则，使用fade-in动画，且保存变量
			var temp = {};
			temp[targetPage] = "true";
			plus.webview.show(targetPage); //, "fade-in", 100);
		}
		

		//隐藏当前 除了第一个父窗口
		if(activePage !== main) {
			plus.webview.hide(activePage);
		}
	},
	/**
	 * 点击重绘底部tab （view控件）
	 */
	toggleNview: function(currIndex) {
		currIndex = currIndex * 2;
		// 重绘兄弟tag 反之排除当前点击的icon和text
		for(var i = 0; i < 4; i++) {
			if(i== currIndex|| i == currIndex + 1){
				util.updateSubNView(i, true);
			}else{
				util.updateSubNView(i, false);
			}
			
		}
	},
	/*
	 * 改变颜色
	 */
	changeColor: function(obj, color) {
		obj.color = color;
		return obj;
	},

	/*
	 * 利用 plus.nativeObj.View 提供的 drawText 方法更新 view 控件
	 */
	updateSubNView: function(currIndex,active) {
		var self = plus.webview.currentWebview(),
		nviewEvent = plus.nativeObj.View.getViewById("tabBar"); // 获取nview控件对象
//		nviewObj = self.getStyle().subNViews[0];// 获取nview对象的属性
		var nviewObj = {};
		nviewObj.tags = [{
							"tag": "img",
							"id": "walletIcon",
							"src":"_www/img/tabbar/wallet.png",
							"src_sel":"_www/img/tabbar/wallet_sub.png",
							"position": {
								"top": "5px",
								"left": "21%",
								"width": "8%",
								"height": "55%"
							}
						}, {
							"tag": "font",
							"id": "indexText",
							"text": "钱 包",
							"position": {
								"top": "30px",
								"width": "50%",
								"height": "29px"
							},
							"textStyles": {
								"align": "center",
								"size": "13px",
                                "color" : "#A6A39D"
							}
						},{
							"tag": "img",
							"id": "userIcon",
							"src":"_www/img/tabbar/user.png",
							"src_sel":"_www/img/tabbar/user_sub.png",
							"position": {
								"top": "5px",
								"left": "71%",
								"width": "8%",
								"height": "55%"
							}
						}, {
							"tag": "font",
							"id": "starText",
							"text": "我 的",
							"position": {
								"top": "30px",
								"left": "50%",
								"width": "50%",
								"height": "29px"
							},
							"textStyles": {
								"align": "center",
								"size": "13px",
                                "color" : "#A6A39D"
							}
						},
						{
							"tag": "rect",
							"id": "tabBorder",
							"position": {
								"top": "0",
								"left": "0",
								"width": "100%",
								"height": "1px"
							},
							"rectStyles": {
								"color" : "#EEEEEE"
							}
						}];
		currTag = nviewObj.tags[currIndex]; // 获取当前需重绘的tag
		if(currIndex%2==0){
			currTag.src = active?currTag.src_sel:currTag.src;
			nviewEvent.drawBitmap(currTag.src,{}, currTag.position, currTag.id);
		}else{
			currTag.textStyles.color = active?util.options.ACTIVE_COLOR:util.options.NORMAL_COLOR;
			nviewEvent.drawText(currTag.text, currTag.position, currTag.textStyles, currTag.id);
		}
	}
};
//var view = null;

function changeView(currIndex) {
	// 匹配对应tab窗口	
	if(currIndex > 0) {
		targetPage = plus.webview.getWebviewById(util.options.subpages[currIndex - 1]);
	} else {
		targetPage = plus.webview.currentWebview();
	}
	
	if(targetPage == activePage) {
		if(currIndex == 0) {
			if(plus.webview.getTopWebview()!=plus.webview.getLaunchWebview()){
				plus.webview.hide(plus.webview.getTopWebview())
			}
		}
		return;
	}
	//底部选项卡切换 
	util.toggleNview(currIndex);
	// 子页面切换
	util.changeSubpage(targetPage, activePage, aniShow);
	//更新当前活跃的页面
	activePage = targetPage;

}
var activePage;
var aniShow = {};
/**
 * 绘制底部菜单栏
 */
var BottomMenu = function() {
	var self = plus.webview.currentWebview();
	util.initSubpage(aniShow);
	var nview = plus.nativeObj.View.getViewById('tabBar'),
		targetPage,
		subpages = util.options.subpages,
		pageW = window.innerWidth,
		currIndex = 0;
		activePage = plus.webview.currentWebview();
		nview.addEventListener('touchstart', function(e) {
		var clientX = e.clientX;
		if(clientX > parseInt(pageW * 0.15) && clientX <= parseInt(pageW * 0.45)) {
			currIndex = 0;
		} else if(clientX > parseInt(pageW * 0.65) && clientX <= parseInt(pageW * 0.95)) {
			currIndex = 1;
		}
		changeView(currIndex);
	});
}