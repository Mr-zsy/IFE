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

for(var i=0;i<9;i++){
	 $("#ability li:eq("+i+")").hover(function() {
	 	$(this).width("85%");
	 	$(this).height("50px");
	 	$(this).css({
	 		"font-size":"30px",
	 		"box-shadow":"1px 2px 2px #717070",
	 		"-webkit-box-shadow":"1px 2px 2px #717070",
	 		"-moz-box-shadow":"1px 2px 2px #717070"
	 	});
	 }, function() {
	 	$(this).width("80%");
	 	$(this).height("40px");
	 	$(this).css({
	 		"font-size": "25px",
	 		"box-shadow":"none",
	 		"-webkit-box-shadow":"none",
	 		"-moz-box-shadow":"none"
	 	});
	 });
}