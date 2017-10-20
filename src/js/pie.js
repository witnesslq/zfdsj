//饼图
var myPie = echarts.init(document.getElementById("pie"));
var colorArr = [];
for(var i = 0; i < cities.length; i++) {
	colorArr.push(cities[i].color)
}
//colorArr = colorArr.slice(-6).concat(colorArr.slice(-3))
//设置饼图参数
myPie.setOption({
	//toolTip
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	//
	color: colorArr,
	clockWise: true,
	series: [{
		name: '投诉来源',
		type: 'pie',
		radius: '55%',
		center: ['50%', '60%'],
		data: [{
			value: 13,
			name: "姑苏区  " + complainCount[0]
		}, {
			value: 2,
			name: "虎丘区  " + complainCount[1]
		}, {
			value: 5,
			name: "吴中区  " + complainCount[2]
		}, {
			value: 2,
			name: "相城区  " + complainCount[3]
		}, {
			value: 5,
			name: "吴江区  " + complainCount[4]
		}, {
			value: 5,
			name: "常熟市  " + complainCount[5]
		}, {
			value: 5,
			name: "张家港  " + complainCount[6]
		}, {
			value: 2,
			name: "昆山市  " + complainCount[7]
		}, {
			value: 10,
			name: "太仓市  " + complainCount[8]
		}],
//		data: [{
//				value: 13,
//				name: `姑苏区  ${complainCount[0]}`
//			},
//			{
//				value: 2,
//				name: `虎丘区  ${complainCount[1]}`
//			},
//			{
//				value: 5,
//				name: `吴中区  ${complainCount[2]}`
//			},
//			{
//				value: 2,
//				name: `相城区  ${complainCount[3]}`
//			},
//			{
//				value: 5,
//				name: `吴江区  ${complainCount[4]}`
//			},
//			{
//				value: 5,
//				name: `常熟市  ${complainCount[5]}`
//			},
//			{
//				value: 5,
//				name: `张家港  ${complainCount[6]}`
//			},
//			{
//				value: 2,
//				name: `昆山市  ${complainCount[7]}`
//			},
//			{
//				value: 10,
//				name: `太仓市  ${complainCount[8]}`
//			},
//		],
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 5,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		}
	}]
})

//环形图
var myCircular = echarts.init(document.getElementById("circular"));
var data = {
	key: "123"
}
//环形图参数
myCircular.setOption({
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b}: {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'left',
		data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
		textStyle: { //图例文字的样式
			color: '#ffffff'
		},
	},
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		avoidLabelOverlap: false,
		label: {
			normal: {
				show: false,
				position: 'center',
			},
			emphasis: {
				show: true,
				textStyle: {
					fontSize: '14',
					fontWeight: 'bold',
					color: "#e4393c"
				},
			}
		},
		labelLine: {
			normal: {
				show: false
			}
		},
		data: [{
				value: 335,
				name: '直接访问'
			},
			{
				value: 310,
				name: '邮件营销'
			},
			{
				value: 234,
				name: '联盟广告'
			},
			{
				value: 135,
				name: '视频广告'
			},
			{
				value: 1548,
				name: '搜索引擎'
			}
		]
	}]
})
$("#circular").css({
	backgroundColor: "rgba(5,68,92,.7)",
})