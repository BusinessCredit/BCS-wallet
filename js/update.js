var install = function (item) {
	plus.nativeUI.showWaiting("更新中,请稍后");
	var url=item.Android;
	if (plus.os.name.toLowerCase() == "ios") {
		var url = item.IOS;
	}
	if (item.need_install) {
		plus.runtime.openURL(url, function () {
			mui.toast("启动外部浏览器错误");
		});
		return;
	}
	var dtask = plus.downloader.createDownload(url, {},
		function (d, status) {
			if (status == 200) {
				plus.nativeUI.closeWaiting();
				mui.toast("正在准备环境，请稍后！");
				setTimeout(function () {
					var path = d.filename; 
					plus.runtime.install(path, {
						force: true
					}, function () {
						plus.nativeUI.alert("更新已完成,欢迎体验最新版本~", function () {
							plus.runtime.restart();
						});
					}, function (ttt) {
						mui.toast("更新失败,请重试");
					}); 
				}, 100);
			} else {
				plus.nativeUI.alert('资源包下载失败:' + status);
			}
		});
	dtask.start();
};
var update_check = function() {
	plus.runtime.getProperty(plus.runtime.appid, function(info) {
		$.ajax({
			type:"get",
			url:UpdataURL,
			data:{
				version:info.version,
			},
			dataType: "json", 
			success:function(item){
				if(item.status) {
					if (!item.must_install) {
						return false;
					}
					plus.nativeUI.confirm(item.tip, function (ev) {
						if (ev.index == 0) {
							install(item);
						}
					}, "发现新版本,是否立即更新?", ["立即更新"]);
				}
			},
			error:function(data){
				console.log(JSON.stringify(data));
			} 
		});		
	});
}