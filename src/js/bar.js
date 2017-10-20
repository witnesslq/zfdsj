var myBar = echarts.init(document.getElementById('bar'));

myBar.setOption({
	tooltip: {
		trigger: 'axis'
	},
	//	calculable: true,
	xAxis: [{
		axisLabel: {
			show: true,
			textStyle: {
				color: axisBase.xAxis.color,
				fontSize: axisBase.xAxis.fontSize
			},
		},
		axisLine: {
			lineStyle: {
				color: axisBase.axisLine.color
			}
		},
		type: 'value',
		boundaryGap: [0, 5],
		splitLine: {
			show: false,
		},
	}],
	grid: { // 控制图的大小，调整下面这些值就可以，
		x: 80,
	},
	yAxis: [{
		axisLabel: {
			show: true,
			textStyle: {
				color: axisBase.xAxis.color,
				fontSize: axisBase.xAxis.fontSize
			},
			interval: 0,

		},
		axisLine: {
			lineStyle: {
				color: axisBase.axisLine.color
			}
		},

		type: 'category',
		boundaryGap: [0, 0.1],
		data: valToArr(cities, 'name'),
	}],
	series: [{
		name: '当日',
		type: 'bar',
		data: barData,
		barWidth: 10,
		itemStyle: {
			normal: {
				color: function(params) {
					return cities[params.dataIndex].color;
				}
			}
		},
	}]
})