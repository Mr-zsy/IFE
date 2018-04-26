$(function() {
	// 检测分辨率以适应背景图片 
	var s_height = window.screen.availHeight;
	var s_width = window.screen.availWidth;
	// var s_height = window.screen.height;
	// var s_width = window.screen.width;
	console.log(s_height);
	console.log(s_width);
	document.body.style.backgroundSize = s_width + "px " + s_height + "px";
	console.log(document.body.style.backgroundSize);
	// $(window).resize(function() {
	// 	$("#all").width(s_width);
	// 	$("#all").height(s_height);
	// });
})
