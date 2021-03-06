import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import{ ChartsModule} from 'ng2-charts';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { HomeComponent } from './home/home.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { FooterComponent } from './footer/footer.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartBComponent } from './line-chart-b/line-chart-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLineChartComponent,
    HomeComponent,
    LineChartComponent,
    PolarChartComponent,
    FooterComponent,
    BarChartComponent,
    LineChartBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ChartsModule,
    FlexLayoutModule 
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
