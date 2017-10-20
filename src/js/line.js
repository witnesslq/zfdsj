var myLine = echarts.init(document.getElementById("line1"));
myLine.setOption({
	tooltip: {
		trigger: 'axis'
	},
	// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		data: lineData.xData,
		// 控制网格线是否显示
		splitLine: {
			show: false,
			//  改变轴线颜色
			lineStyle: {
				// 使用深浅的间隔色
				color: ['red']
			}
		},
		//  改变x轴颜色
		axisLine: {
			lineStyle: {
				color: 'rgb(33,108,166)',
				//                            width:8,//这里是为了突出显示加上的，可以去掉
			}
		},
		//  改变x轴字体颜色和大小
		axisLabel: {
			textStyle: {
				color: '#fff',
				fontSize: '12'
			},
		},
	}],
	yAxis: [{
		axisLine: {
			show: true
		},
		type: 'value',
		max:80,
		// 控制网格线是否显示
		splitLine: {
			show: true,
			//  改变轴线颜色
			lineStyle: {
				// 使用深浅的间隔色
				color: ['rgb(33,108,166)']
			}
		},
		//  改变x轴颜色
		axisLine: {
			lineStyle: {
				color: 'rgb(33,108,166)',
				//                            width:8,//这里是为了突出显示加上的，可以去掉
			}
		},
		//  改变y轴字体颜色和大小
		axisLabel: {
			textStyle: {
				color: '#fff',
				fontSize: '12'
			},
		},
	}],
	series: [{
			name: '去年同比',
			type: 'line',
			stack: '总量',
			symbol:'none',
			itemStyle: {
				normal: {
					color: 'rgb(35,207,241)',
					areaStyle: {
						type: 'default',
						color: 'rgb(35,207,241)'
					},
					lineStyle: {
						color: 'rgb(35,207,241)'
					}
				}
			},
			data: [0, 10, 4, 20, 0]
		},
		{
			name: '当日',
			type: 'line',
			stack: '总量',
			symbol:'none',
			itemStyle: {
				normal: {
					color: 'rgb(116,114,209)',
					areaStyle: {
						type: 'default',
						color: 'rgb(116,114,209)'
					},
					lineStyle: {
						color: 'rgb(116,114,209)'
					}
				}
			},
			data: [0, 20, 15, 40, 0]
		}
	]
})

//
var myLine2 = echarts.init(document.getElementById("line2"));
myLine2.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			show: true,
			type: 'cross',
			lineStyle: {
				type: 'dashed',
				width: 1
			}
		},
	},
	xAxis: [{
		type: 'value',
		axisLabel : {
            show:true,
            formatter: function(value){
            	var num = value/3*4;
				return num + '~' + (num+4);
			},
			textStyle: {
				color: '#fff',
				fontSize: '12'
			},
        },
//      data:['0~4','4~8','8~12','12~16','16~20'],
//      boundaryGap:false,
		splitLine: {
			show: false
		}, //网格线
		splitArea: {
			show: false
		}, //网格区域
		axisLine: {
			lineStyle: {
				color: 'rgb(33,108,166)'
			}
		},
	}],
	yAxis: [{
		axisLabel : {
            show:true,
			textStyle: {
				color: '#fff',
				fontSize: '12'
			},
        },
		type: 'value',
		max:800,
		axisLine: {
			lineStyle: {
				color: 'rgb(33,108,166)'
			}
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: 'rgb(33,108,166)'
			}
		}, //网格线
		splitArea: {
			show: false
		} //网格区域
	}],
	series: [{
		name: '当日',
		type: 'line',
		symbol:'none',
		data: [
			[0, 0],
			[2, 380],
			[7, 360],
			[9, 90],
			[14, 120],
			[16, 0]
		],
		lineStyle: {
			color: 'rgb(74,44,266)',
			normal:{
				width:'1'
			}
		},
		itemStyle: {
			normal: {
				color: 'rgb(74,44,266)',
				areaStyle: {
					type: 'default',
					color: 'rgb(105,199,91)'
				},

			}
		},
	}]
});