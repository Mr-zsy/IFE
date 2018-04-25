var btn = document.getElementById("btn");
var outer = document.getElementById("outer");

btn.onclick = function(){
	this.blur();
	if(outer.style.width == "0px"){
		outer.style.width = "150px";
		outer.style.borderBottomStyle = "solid";
		outer.style.color = '#0568D0';
	}else {
		outer.style.width = "0px";
		outer.style.color = "black";
		setTimeout(function(){outer.style.borderBottomStyle = "none";},500);
	}
};

