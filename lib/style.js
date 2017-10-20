$(function () {
    zddata = null;
    var data1 =
        {
            zdn:"振兴化工厂",
            sjdes:"振兴化工厂环境污染，不符合开厂条件，责令最晚 于6月20日前，必须关闭，距离拆迁还有52天。 企 业情况如下：",
            zgnum:2610,
            zbnum:12300,
            snry:45,
            zdry:15,
            zbxx:2,
            xxmc:"三中心实验小学小太阳幼儿园",
            jl:"开发区派出所",
            rcxl:5,
            fxjg:"该区域由于工厂拆迁，导致工人失业，发生群体事 件几率增大，请加强警力巡逻以及提前安排人员就 业问题。"
        };
    $(".zd-name").text(data1.zdn);
    $(".zd-detail-tit").text(data1.sjdes);
    $(".zgdata").text(data1.zgnum);
    $(".zbdata").text(data1.zbnum);
    $(".sndata").text(data1.snry);
    $(".zddata").text(data1.zdry);
    $(".zbxx").text(data1.zbxx);
    $(".xxmc").text(data1.xxmc);
    $(".jlmc").text(data1.jl);
    $(".rcxl").text(data1.rcxl);
    $(".fxjg").text(data1.fxjg);
    $(".zd-area-list li").click(function () {
        $(".tank").show();
    });
    $(".zz-colse").click(function () {
        $(".tank").hide();
    })
});













