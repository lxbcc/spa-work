$(function(){
    var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'JavaScript语言排名变化'
            },
            tooltip: {},
            legend: {
                data:['排名']
            },
            xAxis: {
                data: ["2000","2005","2010","2015","2020"]
            },
            yAxis: {},
            series: [{
                name: '排名',
                type: 'line',
                // smooth:true,
                data: [6, 9, 8, 8, 7,]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        vardata = [
            ["",  "Kia", "Nissan", "Toyota", "Honda"],
            ["2008",  10, 11, 12, 13],
            ["2009",  20, 11, 14, 13],
            ["2010",  30, 15, 12, 13]
          ];
          $("#dataTable").handsontable({
            data:  data,
            startRows:  6,
            startCols:  8
          });
})


