var btn = document.querySelectorAll("button");
var linkTag = document.querySelector("link");
btn[0].onclick = function(){
	linkTag.href = "css/style_1.css";
};
btn[1].onclick = function(){
	linkTag.href = "css/style_2.css";
};
btn[2].onclick = function(){
	linkTag.href = "css/style_3.css";
};