$(function () {
    $('#container5').highcharts({
        
        title: {
            text: 'Time zone Analysis'
        },
        xAxis: {
            categories: ['London', 'Pacific Time (US & Canada)', 'Eastern Time (US & Canada)', 'Sydney', 'Central Time (US & Canada)', 'Melbourne', 'Brisbane', 'Amsterdam', 'Hawaii', 'Atlantic Time (Canada)', 'Casablanca', 'Arizona', 'Quito', 'Mountain Time (US & Canada)']
        },
        yAxis: {
            title: {
                text: 'Count'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '�C'
        },
        legend: { 
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tweets',
            data: [3752, 3322, 2501, 1992, 1559, 1344, 1076, 1059, 680, 551, 431, 365, 361, 351]
        }, {
            name: 'Retweets',
            data: [3818, 1607, 4096, 2650, 2817, 1134, 685, 604, 476, 294, 221, 40, 212, 74]
        }]
    });
});