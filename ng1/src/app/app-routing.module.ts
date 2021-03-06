import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartBComponent } from './line-chart-b/line-chart-b.component';


const routes: Routes = [
  //{ path: "", component: HomeComponent},
  { path: "", component: HomeComponent},
  { path: "chart5", component: LineChartBComponent},
  { path: "chart1", component: MyLineChartComponent},
  { path: "chart2", component: LineChartComponent},
  { path: "chart3", component: PolarChartComponent},
  { path: "chart4", component: BarChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
