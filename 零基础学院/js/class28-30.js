 var tip = document.getElementById("email-sug-wrapper");
var emailInput = document.getElementById("email-input");
// 增加一个变量，用于存储当前选中的提示Li的序号
var nowSelectTipIndex = 0;
 var HtmlUtil = {
    /*1.用正则表达式实现html转码*/
    htmlEncodeByRegExp:function (str){  
         var s = "";
         if(str.length == 0) return "";
         s = str.replace(/&/g,"&amp;");
         s = s.replace(/</g,"&lt;");
         s = s.replace(/>/g,"&gt;");
         s = s.replace(/ /g,"&nbsp;");
         s = s.replace(/\'/g,"&#39;");
         s = s.replace(/\"/g,"&quot;");
         return s;  
   },
   /*2.用正则表达式实现html解码*/
   htmlDecodeByRegExp:function (str){  
         var s = "";
         if(str.length == 0) return "";
         s = str.replace(/&amp;/g,"&");
         s = s.replace(/&lt;/g,"<");
         s = s.replace(/&gt;/g,">");
         s = s.replace(/&nbsp;/g," ");
         s = s.replace(/&#39;/g,"\'");
         s = s.replace(/&quot;/g,"\"");
         return s;  
   }
};

function getInput() {
    // 拿到input输入框的输入内容trim后返回 
    var arr = [...emailInput.value];
   	var str = arr.filter(i => (i.charCodeAt(0) == 12288 || i.charCodeAt(0) == 32) ? false:true);
    return HtmlUtil.htmlEncodeByRegExp(str.join(""));
}

function setTips() {
    // 获取用户输入
    // 遍历postfixList {
    //     把用户输入和每一个postfix进行结合成为每一个Li
    // }
    // 返回生成的提示内容

    tip.innerHTML = "";
    // 邮箱后缀List参考
	var postfixList = [
			'163.com', 
			'gmail.com',
			 '126.com', 
			 'qq.com', 
			 '263.net'
		 	];
	var aIndex = getInput().indexOf("@");
	//输入的地址中含有@
	if(aIndex >=0){
		//@前后字符串
		var beforeA = getInput().substring(0,aIndex+1);
		var afterA = getInput().substring(aIndex+1);
		//@之后还有
		if(afterA.length){
			// if((afterA.charCodeAt(0) != 12288)&&(afterA.charCodeAt(0) != 32)){
				postfixList.forEach( function(item, index) {
					if(item.includes(getInput().substring(aIndex+1))){
						var li = document.createElement("li");
						li.innerHTML = beforeA+item;
						tip.append(li);
					}
				});
			// }
		}else{
			postfixList.forEach(function(item){
				var li = document.createElement("li");
					li.innerHTML = beforeA+item;
					tip.append(li);
			})
		}
	}else{
		postfixList.forEach(function(item){
			var li = document.createElement("li");
			// li.innerHTML = HtmlUtil.htmlDecodeByRegExp(getInput()+"@"+item);
			li.innerHTML = getInput()+"@"+item;
			tip.append(li);
		})
	}
}


function tipStatus() {
    if(getInput().length == 0 ){
    	tip.style.display = "none";
    }else{
    	tip.style.display = "block";
    }
}

function hideTips() {
    tip.style.display = "none";
}

function showTips() {
    tip.style.display = "block";
}

function addTipStyle(item,index){
	item[index].classList.add("selected");
}
function removeTipStyle(item,index){
	item[index].classList.remove("selected");
}
function resetTipStyle(){
	var selectTips = document.querySelectorAll("#email-sug-wrapper li");
	addTipStyle(selectTips,0);

}
emailInput.oninput = function() {
    // 获取用户输入，生成提示框中的提示内容，将提示内容添加到email-sug-wrapper中
    // 控制email-sug-wrapper的显示/隐藏状态
    nowSelectTipIndex = 0;
    setTips();
    tipStatus();
    resetTipStyle();
}
tip.onclick = function(event){
	emailInput.value = event.target.innerHTML;
	hideTips();
	emailInput.focus();
}
window.onkeyup = function changeIndex(e){
	var selectTips = document.querySelectorAll("#email-sug-wrapper li");
	// nowSelectTipIndex = 0;
	 e.preventDefault;
	var keynum;
	if(window.event) // IE
	  {
	  keynum = e.keyCode
	  }
	else if(e.which) // Netscape/Firefox/Opera
	  {
	  keynum = e.which
	  }
	  if(keynum == 40){//下键
	  	removeTipStyle(selectTips,nowSelectTipIndex);
	  	if(nowSelectTipIndex != selectTips.length-1){
		  	nowSelectTipIndex++;
		  	addTipStyle(selectTips,nowSelectTipIndex);
	  	}else{
	  		nowSelectTipIndex =0;
	  		addTipStyle(selectTips,nowSelectTipIndex);
	  	}
	  }else if(keynum == 38){//上键
	  	removeTipStyle(selectTips,nowSelectTipIndex);
	  	if(nowSelectTipIndex != 0){
		  	nowSelectTipIndex--;
		  	addTipStyle(selectTips,nowSelectTipIndex);
	  	}else{
	  		nowSelectTipIndex =selectTips.length-1;
	  		addTipStyle(selectTips,nowSelectTipIndex);
	  	}
	  }else if(keynum == 13){
		emailInput.value = selectTips[nowSelectTipIndex].innerHTML;
		hideTips();
	}else if (keynum == 27) {
		emailInput.select();
	}
}

window.onload = function(){
	emailInput.focus();
}
