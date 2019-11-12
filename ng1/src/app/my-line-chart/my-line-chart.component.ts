import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import {dataLine1, dataLabels, dataLine2} from '../data';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss']
})
export class MyLineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    dataLine1,
    dataLine2
  ];
  //public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels: Label[] = dataLabels;
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0,0,255,0.4)',
    borderColor: 'rgba(0,0,255,0.4)',
    },
    {
      backgroundColor: 'rgba(255,0,255,0.4)',
    borderColor: 'rgba(255,0,255,0.4)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
