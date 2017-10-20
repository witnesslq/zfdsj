$(function () {

    var option = {
        title: {
            text: '',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show: false,
            x: 'center',
            data: ['罗纳尔多']
        },
        toolbox: {
            show: false,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        polar: [
            {
                indicator: [
                    {text: '行政处罚', max: 100,},
                    {text: '历史案件', max: 100},
                    {text: '历史信访', max: 100},
                    {text: '工作情况', max: 100},
                    {text: '收入情况', max: 100},
                    {text: '家庭情况', max: 100,}

                ],
                splitNumber: 3,
                name: {textStyle: {color: "#30acc2", fontSize: 18,}},
                radius: 230,
                axisLine: {            // 坐标轴线
                    show: false,        // 默认显示，属性show控制显示与否
                },
                splitArea: {

                    show: true,
                    areaStyle: {
                        color: ['#0d233e', '#0e334d', '#0f566c']
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: '#0b7f9b'
                    }
                }

            }
        ],
        series: [
            {
                name: '完全实况球员数据',
                type: 'radar',
                itemStyle: {
                    normal: {}
                },
                data: [
                    {
                        value: [70, 0, 33, 50, 68, 80],
                        name: '舍普琴科',
                        itemStyle: {
                            normal: {

                                color: '#00f8f6',
                                lineStyle: {
                                    type: 'solid',
                                    color: '#00faf9'
                                }, areaStyle: {
                                    type: 'default',
                                    color: ['rgba(10,148,161,.35)']
                                }
                            }
                        }
                    }
                ]
            }
        ],

    };


    var init = function () {
         windowH = $(window).height(), windowW = $(window).width();
        $('#container').css('height', windowH * .81 + 'px');
        option.polar[0].radius = windowW * .13;
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('container'));
        // 为echarts对象加载数据
        myChart.setOption(option);
        xxxx();
    }
    init();
    var resizeTimeout;
    $(window).resize(function (e) {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(function () {
            init();
        }, 500)
    });
//    详细数据点击事件
    $('.data-detail .data-animation').bind('click', function () {
        $('.data-animation>div').each(function (index, ele) {
            var className = ele.className.split(' ')[0];
            // if(className+'-fan'==ele.className.split(' ')[1]){
            //     $(ele).removeClass(ele.className.split(' ')[1]).addClass(className+'-do')
            // }else if(className+'-do'==ele.className.split(' ')[1]){
            //     $(ele).removeClass(ele.className.split(' ')[1]).addClass(className+'-fan')
            // }else if(ele.className.split(' ')[1]===undefined){
            //     $(ele).addClass(className+'-do')
            // }
            if (ele.className.split(' ')[1] === undefined) {
                $(ele).addClass(className + '-do')
            } else if (className + '-do' == ele.className.split(' ')[1]) {
                $(ele).removeClass(ele.className.split(' ')[1])
            } else {
                $(ele).removeClass(ele.className.split(' ')[1]).addClass(className + '-do')
            }
        })
        $('.data-list').stop().toggleClass('active')
    }).trigger('click');
    //右边刚开始的光
    function rightLight(){
        var dom1=$('.x-right-transform'),dom2=$('.x-right-transform-center'),dom3=$('.right-light');
        dom1.css({'height': windowH * .95 + 'px', 'margin-top': windowH * .025 + 'px',width:windowW*.3024+'px'});
        dom1.css({'marginTop':-windowH*0.92/2+'px'});
        dom2.css({height:'5px'}).animate({width:'100%'},1000,function(){
            dom1.css({width:'auto'});
            $('.x-right-transform-center').animate({height:'92%'},1500,'linear',function(){
                circleInit();
            });
            dom1.animate({'marginTop':0},1500,'linear',function(){
            });
            dom3.fadeOut(1500);
        });
    }
    rightLight();
    function xxxx() {
        var h1 = $("#container").height();
        $(".quan").css({"width": h1, "height": h1});
        var w1 = $(".quan").width();
        $(".quan").css({"width": h1, "marginLeft": -w1 / 2});
    }
//    积分的圆圈图
    function circleInit(){
        var dom=document.getElementById("Circle");
        var ctx=dom.getContext("2d");
        var width=ctx.canvas.width;
        var height=ctx.canvas.height;
        var r=width/2;
        var rem=width/200;
        var i=0;
// 百分比a
        var a=60;
        drawbackgroundcolor();
        // 画背景圆环
        function drawbackground(){
            ctx.save();
            // 重新定位坐标
            ctx.translate(r,r);
            ctx.lineWidth=10*rem;
            ctx.beginPath();
            ctx.arc(0,0,r-7*rem,0,2*Math.PI,false);
            // ctx.fillStyle="rgba(255, 255, 255, 0)";
            // ctx.fill();
            ctx.strokeStyle="rgb(0,91,164)";
            ctx.stroke();
            ctx.closePath();
        }

        function drawbackgroundcolor() {
            // 清除画布
            ctx.clearRect(0, 0, width, height);
            // 化背景圆环
            drawbackground();

// 定时循环
            if (i < a) {
                ring();
                // CircularProgressView();

                setTimeout(drawbackgroundcolor,7);

            }
            else {
                // CircularProgressView()
                ring();
            }
        }

        function ring(){

            ctx.lineWidth=10*rem;
            ctx.beginPath();
            ctx.arc(0,0,r-7*rem,0.5*Math.PI,(0.5+i/50)*Math.PI,false);
            console.log(i/50);
            var gradient=ctx.createLinearGradient(0,(r-7*rem),0,-r);
            gradient.addColorStop(0,"#15d5fb");
            gradient.addColorStop(1,"#ec57e8");

            ctx.strokeStyle=gradient;
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth=rem;
            var x = Math.cos(Math.PI * (0.5+i / 50)) * (r - 7 * rem);
            var y = Math.sin(Math.PI * (0.5+i / 50)) * (r - 7 * rem);
            ctx.arc(x,y,9*rem,0,2*Math.PI,false);
            ctx.fillStyle="#4dd4e8";
            ctx.fill();
            ctx.stroke();
            i++;
            ctx.restore();

        }
    }

});