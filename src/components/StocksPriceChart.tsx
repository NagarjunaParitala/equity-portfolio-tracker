import React, { useEffect, useState } from "react";
import HighStock from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';

import appl from '../data/aapl.json';
import msft from '../data/msft.json';
import goog from '../data/goog.json';


const names = ['MSFT', 'AAPL', 'GOOG'];
const StockPriceChart = () => {
    const [chartPlotOptions, setChartPlotOptions] = useState({});

    useEffect(()=> {
        const seriesData: any = [
           {name:'AAPL', data:appl},{name:'MSFT', data:msft},{name:'GOOG', data:goog}
        ];
        console.log("seriesData: "+JSON.stringify(seriesData));
        renderChart(seriesData);
    });

    const renderChart = (series: any) => {
        setChartPlotOptions({
            rangeSelector: {
                selected: 4
            },
            yAxis: {
                labels: {
                    format: '{#if (gt value 0)}+{/if}{value}%'
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },
            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },

            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                split: true
            },
            series
        });
    };
      
    return (
        <HighchartsReact
        highcharts={HighStock}
        constructorType={"stockChart"}
        options={chartPlotOptions}
      />
    );
};


export default StockPriceChart;