import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginModule } from './module/login/login.module';
// import { DashboardModule } from './module/dashboard/dashboard.module';

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./module/login/login.module').then(log=>log.LoginModule)},
  {path:'dashboard',loadChildren:()=>import('./module/dashboard/dashboard.module').then(das=>das.DashboardModule)},
  {path:'**',redirectTo:'dashboard'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
