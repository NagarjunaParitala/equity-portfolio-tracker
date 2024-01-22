import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartData } from '../datatypes/CustomDataTypes';

function LineChart(props:{chartData: ChartData, usdeur: any}) {
    const chartOptions: any = {
        title: {
          text: 'Line chart',
          style: {
            display: 'none'
          }
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          symbolWidth: 5,
          symbolHeight: 8
        },
        xAxis: {
          type:'datetime',
          tickColor: '#FFFFFF',
          categories: props.chartData.categories
        },
        yAxis: {
          tickColor: '#FFFFFF',
          gridLineColor: '#FFFFFF',
          title: {
            style: {
              display: 'none'
            }
          },
          labels: {
          //   formatter: function () {
          //     return `$${this.value}`
          //   }
          }
        },
        plotOptions: {
          series: {
            marker: {
              symbol: 'circle'
            }
          }
        },
        tooltip: {
          shared: true
        },
        series: [{
          //type: 'line',
          name: props.chartData.data1.name,
          color: '#0071ce',
          data: props.chartData.data1.series,
          pointStart: Date.UTC(2024, 0, 1),
          pointInterval: 24 * 3600 * 1000
        }, {
         // type: 'line',
          name: props.chartData.data2.name,
          color: '#ff671b',
          data: props.chartData.data2.series,
          pointStart: Date.UTC(2024, 0, 1),
          pointInterval: 24 * 3600 * 1000
        }, {
         // type: 'line',
          name: props.chartData.data3.name,
          color: '#1bffd5',
          data: props.chartData.data3.series,
          pointStart: Date.UTC(2024, 0, 1),
          pointInterval: 24 * 3600 * 1000
        }]
      };
      

const sampleData: any = {
    chart:{
        type:'StockChart'
    },
    title: {
        text: 'Stock Price',
        style: {
          display: 'none'
        }
      },
    rangeSelector: {
        selected: 1,
        inputBoxStyle: {
            right: '80px'
        }
    },

    series: [{
        name: 'USD to EUR',
        data: props.usdeur
    },{
        name: 'AED to EUR',
        data: props.usdeur
    }],

    exporting: {
        chartOptions: {
            chart: {
                width: 1024,
                height: 768
            }
        }
    }
};
      
    return (
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
    )
};

export default LineChart;