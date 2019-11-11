import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';


const routes: Routes = [
  //{ path: "", component: HomeComponent},
  { path: "", component: MyLineChartComponent},
  { path: "chart1", component: MyLineChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
