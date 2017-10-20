//修改背景颜色函数
function changeBgColor(cls, colorArr) {
	var items = eval('(' + '$(".' + cls + '")' + ')');
	var lng = items.length;
	items.each(function() {
		var idx = items.index($(this));
		$(this).css("background-color", colorArr[idx % lng].color);
	})
}
//治安等级各区域色块
changeBgColor('l-circle', cities);
//legend
changeBgColor('legend span', legend);

//左右按钮
var legend = $(".legend");
$(".tabs").click(function() {
	var $this = $(this);
	$this.parent().toggleClass('hide');
	if($('.tabs').index($this) === 0) {
		$this.parent().hasClass('hide')?legend.css("left",0):legend.css("left",330)
	}
})