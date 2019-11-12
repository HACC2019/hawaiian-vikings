import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

import {polarlabel1, polarenergy1} from '../data';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss']
})
export class PolarChartComponent implements OnInit {

  public polarAreaChartLabels: Label[] = 
    polarlabel1;
    //['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = 
    polarenergy1;
    //[300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
  }

}
