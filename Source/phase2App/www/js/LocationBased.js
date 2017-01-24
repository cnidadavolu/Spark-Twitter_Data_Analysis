$(function () {
    $('#container7').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Detailed analysis based on latitude and longitude'
        },
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Latitude'
            },
            labels: {
                format: '{value} '
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    align: 'middle',
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                },
                zIndex: 3
            }]
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Longitude'
            },
            labels: {
                format: '{value} '
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 0,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Equator',
                    x: -10
                },
                zIndex: 3
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Latitude:</th><td>{point.x}g</td></tr>' +
                '<tr><th>Longitude:</th><td>{point.y}g</td></tr>' +
                '<tr><th>Count:</th><td>{point.name}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                {x: -24.9162, y: 133.3931,  name: '53'},
                {x: 22.51241, y: 88.36233,  name: '4'},
                {x: 25.72314, y: -80.20196,  name: '4'},
                {x: -33.9167, y: 151.083,  name: '27'},
                {x: 22.5124, y: 88.36233,  name: '2'},
                {x: 35.8188, y: -78.6446,  name: '1'},
                {x: 51.87604, y: -8.53081,  name: '1'},
                {x: -19.2813, y: 146.8163,  name: '11'},
                {x: 51.48185, y: -2.49988,  name: '1'},
                {x: -33.9252, y: 151.2346,  name: '1'},
            ]
        }]

    });
});
