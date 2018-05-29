//生成checkboxs
function creatCheckBox(box, item) {
	let innerhtml = `<input type="checkbox" value="全选" data-checkbox-type="all">全选`
	for (i in item) {
		innerhtml += `<input type='checkbox' value=${item[i].value} data-checkbox-type="one">${item[i].text}`;
	}
	box.innerHTML = innerhtml;
	box.onclick = function() {
		let allBoxs = event.target.parentNode.querySelectorAll("input");
		console.log(event.target.checked);
		switch (event.target.dataset.checkboxType) {
			case "all":
				// console.log("全选BOX");
				if (!(event.target.cehcked)) {
					Array.from(allBoxs).forEach(function(i) {
						i.checked = true;
					})
				}
				break;
				//单选
			case "one":
				// console.log("单选BOX");
				if (!(event.target.checked)) {
					let oneBoxsNum = 0;
					Array.from(allBoxs).forEach(function(i) {
						if (i.dataset.checkboxType == "one" && i.checked == true) {
							oneBoxsNum++;
						}
					})
					// console.log(oneBoxsNum);
					if (oneBoxsNum == 0) {
						alert("至少选一个");
						event.target.checked = true;
					} else {
						event.target.checked = false;
						if (event.target.parentNode.firstChild.checked) {
							event.target.parentNode.firstChild.checked = false;
						}
					}
				} else {
					let oneBoxsNum = 0;
					Array.from(allBoxs).forEach(function(i) {
						if (i.dataset.checkboxType == "one" && i.checked == true) {
							oneBoxsNum++;
						}
					})
					if (oneBoxsNum == (allBoxs.length - 1)) {
						event.target.parentNode.firstChild.checked = true;
					}
				}
		}
	}
}
var region = document.querySelector("#region-radio-wrapper");
var product = document.querySelector("#product-radio-wrapper");
creatCheckBox(region, [{
	value: "华东",
	text: "华东地区"
}, {
	value: "华南",
	text: "华南地区"
}, {
	value: "华北",
	text: "华北地区"
}]);
creatCheckBox(product, [{
	value: "手机",
	text: "手机"
}, {
	value: "笔记本",
	text: "笔记本"
}, {
	value: "智能音箱",
	text: "智能音箱"
}])