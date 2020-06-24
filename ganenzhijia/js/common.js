var zy = {};
(function($, win) {
	zy.zyUrl = "http://apiv3.ganenzhijia.com";
	/** ajax post请求方式
	 * 参数1：url <string>
	 * 参数2：参数<obj>
	 * 参数3：回掉函数<function>
	 * */
	

	zy.postAjax = function(url, params, fn) {
		function error(){};
		zy.ajax(url, params, "post", fn,error);
	};
	zy.getAjax = function(url, params, fn) {
		function error(){};
		zy.ajax(url, params, "get", fn,error);
	};
	/*
	 * ajax 请求
	 * 参数1：url <string>
	 * 参数2：参数<obj>
	 * 参数3：请求方式<string>
	 * 参数4：回掉函数<function>
	 * */
	zy.ajax = function(url, params, type, successCallback, errorCallbanck) {
		console.log(url + " common发送数据:" + JSON.stringify(params));
		$.ajax(zy.zyUrl + url, {
			headers: {
				'token': sessionStorage.getItem("code")
			}, //请求头
			data: params,
			dataType: "json", //服务器返回json格式数据
			type: type, //HTTP请求类型
			timeout: 50000, //超时时间设置为50秒
			success: function(data) {
				console.log(url + " common返回数据:" + JSON.stringify(data));
				successCallback(data);
//				if(data.code === "1") {
//					successCallback(data);
//				} else {
//					errorCallbanck(data);
//				};
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type + '_post_' + zy.zyUrl + url);
				errorCallbanck(errorThrown);
			}
		});
	};
	//增加loading弹框
	zy.addLoading = function() {
		var loadingWrapper = document.createElement('div');
		loadingWrapper.setAttribute('id', 'loadingWrapper');
		loadingWrapper.style.width = '100%';
		loadingWrapper.style.height = '100%';
		loadingWrapper.style.position = 'fixed';
		loadingWrapper.style.zIndex = '10000';
		loadingWrapper.style.left = '0';
		loadingWrapper.style.top = '0';
		var fontSpan = document.createElement('div');
		fontSpan.style.position = 'absolute';
		fontSpan.style.top = '50%';
		fontSpan.style.left = '40%';
		var jiaZaiImg = document.createElement('img');
		jiaZaiImg.src = './images/jiazai.gif';
		jiaZaiImg.style.width = "50px";
		jiaZaiImg.style.height = "50px";
		jiaZaiImg.style.marginLeft = "5px";
		jiaZaiImg.style.marginTop = "5px";
		fontSpan.appendChild(jiaZaiImg);
		loadingWrapper.appendChild(fontSpan);
		document.body.appendChild(loadingWrapper);
	}
	//清除loading弹框
	zy.delLoading = function() {
		var loadingWrapper = document.getElementById('loadingWrapper');
		if(loadingWrapper) {
			document.body.removeChild(loadingWrapper);
		} else {
			loadingWrapper = ''
		}
	}
})(mui, window);