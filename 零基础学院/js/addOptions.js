var selects = document.querySelectorAll("select");
	
	//日期范围设置
	// 日期类型名：[start,end]
	let options = {
   	  year : [1980,2030],
	 month : [1,12],
	   day : [1,31],
	  hour : [0,95],
	minite : [0,95],
	second : [0,95]
	}
	let optionNames = Object.keys(options);
	Array.from(selects).forEach( function(item,index) {
		
		for(let j=options[optionNames[index]][0];j<=options[optionNames[index]][1];j++){
			var option = document.createElement("option");
			option.value = j;
			option.innerHTML = j;
			item.appendChild(option);
		}
	});


