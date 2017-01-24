$(function () {


        // Build the chart
        $('#container2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Range of favorited tweets'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "Percent",
                colorByPoint: true,
                data: [{
                    name: "Favorites: 0",
                    y: 5951
                }, {
                    name: "Favorites: 1-2000",
                    y: 18253,
                }, {
                    name: "Favorites: 2000:4000",
                    y: 888
                }, {
                    name: "Favorites: 4000:6000",
                    y: 223
                }, {
                    name: "Favorites: 6000:8000",
                    y: 250
                }, {
                    name: "Favorites: 8000:10000",
                    y: 0
                }, {
                    name: "Favorites: >10000",
                    y: 58095
                }]
            }]
        });
});