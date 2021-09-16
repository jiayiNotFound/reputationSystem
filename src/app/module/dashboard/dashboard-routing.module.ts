import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NewsComponent } from './news/news.component';
import { AlarmComponent } from './alarm/alarm.component';
import { HomeComponent } from './home/home.component';
import { KeywordComponent } from './keyword/keyword.component';
import { ReportComponent } from './report/report.component';
import { LoginAuthGuard } from '../service/login-auth.guard';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    canActivate:[LoginAuthGuard],
    children:[
      {path:'news',component:NewsComponent,},
      {path:'alarm',component:AlarmComponent,},
      {path:'home',component:HomeComponent},
      {path:'report',component:ReportComponent},
      {path:'keyword',component:KeywordComponent},
      {path:'',component:HomeComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
