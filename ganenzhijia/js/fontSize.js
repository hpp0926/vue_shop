(function(doc,win){
	var docEl = doc.documentElement,
		resizeEvt = "orientationchange" in win ? "orientationchange" : "resize",
		recalc = function(){
			var clientwidth =  docEl.clientWidth;
			if( !clientwidth ){ return false; }
			docEl.style.fontSize = 100 * ( clientwidth / 750 )+"px";  //效果图除以100
		};
		if(!doc.addEventListener){ return false; }
		win.addEventListener(resizeEvt,recalc,false);
		doc.addEventListener("DOMContentLoaded",recalc,false);
})(document,window)