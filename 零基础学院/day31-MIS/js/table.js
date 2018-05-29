var region = document.querySelector("#region-radio-wrapper");
var product = document.querySelector("#product-radio-wrapper");
region.onchange = function() {
	setTable();
	tableRowSpan();
}
product.onchange = function() {
	setTable();
	tableRowSpan();
}
//获取数据
function getValues() {
	return {
		"product": addValues(product),
		"region": addValues(region)
	}
}
//生成选中值的数组
function addValues(obj) {
	let arr = [];
	Array.from(obj.childNodes).forEach(function(i) {
		if (i.checked) {
			arr.push(i.value)
		}
	})
	return arr;
}

function setTable() {
	var inner = `<table>
			<tr>
				<th>商品</th>
				<th>地区</th>
				<th>1月</th>
				<th>2月</th>
				<th>3月</th>
				<th>4月</th>
				<th>5月</th>
				<th>6月</th>
				<th>7月</th>
				<th>8月</th>
				<th>9月</th>
				<th>10月</th>
				<th>11月</th>
				<th>12月</th>
			</tr>
			${function(){
				var result = "";
				for(var i in sourceData){
					for(var j in getValues().region){
						if(sourceData[i].region == getValues().region[j]){
							for(var k in getValues().product){
								if(sourceData[i].product == getValues().product[k]){
								result += `<tr>
									<td>${sourceData[i].product}</td>
									<td>${sourceData[i].region}</td>
									${function(){
										var result = "";
										for(var j in sourceData[i].sale){
											result += `<td>${sourceData[i].sale[j]}</td>`;
										}
										return result;
									}()}
									</tr>`;
								}
							}
						}
					}
				}
				return result;
			}()
			}
		</table>`;
	var table = document.querySelector("#table-wrapper");
	table.innerHTML = inner;
}

function tableRowSpan() {
	//地区一个商品多个
	var trs = document.querySelectorAll("tr");
	if (getValues().product.length > 1 && getValues().region.length == 1) {
		//console.log('地区一个商品多个');
		console.log(trs);
		Array.from(trs).forEach(function(i) {
			i.insertBefore(i.children[1], i.children[0]);
		});
		let spanNum = 1;
		for (var i = 1; i < (trs.length - 1); i++) {
			if (trs[i].children[0].innerHTML == trs[i + 1].children[0].innerHTML) {
				spanNum++;
			}
		}
		trs[trs.length - spanNum].children[0].rowSpan = spanNum;
		for (var j = 0; j < spanNum - 1; j++) {
			trs[trs.length - 1 - j].removeChild(trs[trs.length - 1 - j].children[0]);
		}
	} else { //合并单元格（合并商品列）
		let spanNum = 1;
		for (var i = 1; i < (trs.length - 1); i++) {
			if (trs[i].children[0].innerHTML == trs[i + 1].children[0].innerHTML) {
				spanNum++;
				console.log(trs.length - 1);
				console.log(getValues().region.length);
				console.log("_______");
			} else {
				console.log("不等");
				trs[i - spanNum + 1].children[0].rowSpan = spanNum;
				for (var j = 0; j < spanNum - 1; j++) {
					trs[i - j].removeChild(trs[i - j].children[0]);
				}
				spanNum = 1;
			}
		}
		//最后一组相同行合并
		trs[trs.length - spanNum].children[0].rowSpan = spanNum;
		for (var j = 0; j < spanNum - 1; j++) {
			trs[trs.length - 1 - j].removeChild(trs[trs.length - 1 - j].children[0]);
		}
	}
}