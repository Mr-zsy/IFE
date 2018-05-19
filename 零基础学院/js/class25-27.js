//判断闰年
function judgeYear(year){
	if(!(year%4)){//被四整除
		if(!(year%100)){//被100整除
			if(!(year%400)){//被400整除
				return true;
			}
		}else{
			return true;
		}
	}
}

//判断月份天数
function judgeMonth(year,month){
	var days = document.querySelectorAll("#day-select option:nth-last-child(-n+3)");
	Array.from(days).map(function(item){
		console.log(item);
		item.style.display = "block";
	})
	if(year && month == 2){
		var disableDays = document.querySelectorAll("#day-select option:nth-last-child(-n+3)");
		Array.from(disableDays).map(function(item){
			item.style.display = "none";
		})
	}else if(!year && month == 2){
		var disableDays = document.querySelectorAll("#day-select option:nth-last-child(-n+2)");
		Array.from(disableDays).map(function(item){
			item.style.display = "none";
		})
}
	if([4,6,9,11].includes(month)){// 30天
		var disableDays = document.querySelector("#day-select option:nth-last-child(1)");
			disableDays.style.display = "none";
}
}


//计算时间差
function intervalTime(year,month){
	//获取页面设置时间
	var day = document.getElementById("day-select").value;
	var hour = document.getElementById("hour-select").value;
	var minite = document.getElementById("minite-select").value;
	var second = document.getElementById("second-select").value;
	var pageDate = new Date();
	pageDate.setFullYear(year);
	pageDate.setMonth(month);
	pageDate.setDate(day);
	pageDate.setHours(+hour);//注意个位数时此处去掉0
	pageDate.setMinutes(minite);
	pageDate.setSeconds(second);
	var week = pageDate.getDay();
	switch (week) {
		case 0:
			weekDay = "一";
			break;
		case 1:
			weekDay = "二";
			break;
		case 2:
			weekDay = "三";
			break;
		case 3:
			weekDay = "四";
			break;
		case 4:
			weekDay = "五";
			break;
		case 5:
			weekDay = "六";
			break;
		case 6:
			weekDay = "日";
			break;
		default:
			// statements_def
			break;
	}
	//获取现在时间
	var nowDate = new Date();
	var result = document.getElementById("result-wrapper");
	var intervalDay = parseInt((nowDate.getTime() - pageDate.getTime())/86400000);
	var intervalHour = parseInt((nowDate.getTime() - pageDate.getTime() - intervalDay*86400000)/3600000);
	var intervalMinite = parseInt((nowDate.getTime() - pageDate.getTime() - intervalDay*86400000 - intervalHour*3600000)/60000);
	var intervalSecond = parseInt((nowDate.getTime() - pageDate.getTime() -intervalDay*86400000 - intervalHour*3600000-intervalMinite*60000)/1000);
	//页面时间在过去
	if(nowDate.getTime() > pageDate.getTime()){
		console.log("页面时间在过去");
		result.innerHTML = `现在距离${year}年${month}月${day}日 星期${weekDay} ${hour}:${minite}:${second} 还有${intervalDay}天${intervalHour}小时${intervalMinite}分${intervalSecond}秒`;
	}else{//页面时间在未来
		console.log("页面时间在未来");
		result.innerHTML = `现在距离${year}年${month}月${day}日 星期${weekDay} ${hour}:${minite}:${second} 还有${-intervalDay}天${-intervalHour}小时${-intervalMinite}分${-intervalSecond}秒`;
	}
}
//获取页面设置时间
var year = document.getElementById("year-select");
var month = document.getElementById("month-select");
window.onload = function(){
	intervalTime(year.value,month.value);
	console.log(1);
};

var box = document.getElementById("date-wrap");
box.onchange = function(event){
	if(event.target.id == "year-select" || event.target.id == "month-select"){
		judgeMonth(judgeYear(year.value),month.value);
	}
	intervalTime(year.value,month.value);

}
