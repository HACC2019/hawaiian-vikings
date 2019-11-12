import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

import { barDataLabel4, barDataSet4 } from '../data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { 
      xAxes: [{ stacked: true }], 
      yAxes: [{ stacked: true }, {id: "energyUsed",ticks: {
        beginAtZero: true,}}
      ] }
  };
  public barChartLabels: Label[] = 
  barDataLabel4;
  //['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = 
  barDataSet4;
  // [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a' },
  //   { data: [10, 10, 11, 12, 12, 7, 7], label: 'Series C', stack: 'a', type: 'line' }
  // ];

  constructor() { }

  ngOnInit() {
  }

}
