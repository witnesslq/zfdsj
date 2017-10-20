//各种图表转换方法
//1、将object中某个key对应的value值，塞进数组中
function valToArr(objArr,key){
	var arr = [];
	for(var i=0;i<objArr.length;i++){
		eval("arr.push(objArr[i]."+key+")");
	}
	return arr;
}
//2、