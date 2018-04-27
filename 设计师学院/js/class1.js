var btn = document.getElementById("btn");
var underline = document.getElementById("underline");
var txt = document.getElementsByTagName("label")[0];

btn.onclick = function(){
	this.blur();
	if(!underline.offsetWidth){
		underline.style.width = "150px";
		underline.style.borderStyle = "solid";
		txt.style.color = "#0568D0";
	}else {
		underline.style.width = "0px";		
		txt.style.color = "black";
	 	setTimeout(function(){underline.style.borderStyle = "none";},300);

	}
};

