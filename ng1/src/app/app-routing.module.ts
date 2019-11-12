import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';


const routes: Routes = [
  //{ path: "", component: HomeComponent},
  { path: "", component: HomeComponent},
  { path: "chart1", component: MyLineChartComponent},
  { path: "chart2", component: LineChartComponent},
  { path: "chart3", component: PolarChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
