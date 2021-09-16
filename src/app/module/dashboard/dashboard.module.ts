import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewsComponent } from './news/news.component';
import { AlarmComponent } from './alarm/alarm.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';

//report page table
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


//key word page
import { ModalModule } from 'ngx-bootstrap/modal';




//chart
import { HighchartsChartModule } from 'highcharts-angular';



import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { KeywordComponent } from './keyword/keyword.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NewsComponent,
    AlarmComponent,
    ReportComponent,
    HomeComponent,
    KeywordComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    TableModule,
    ButtonModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()






  ]
})
export class DashboardModule { }
