import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AllstudentComponent } from './allstudent/allstudent.component'
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmguardGuard } from './confirmguard.guard';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';

const routes: Routes = [
  {path:'allstudent', children:[
    {path:"", component:AllstudentComponent},
    {path:"confirm", component:ConfirmComponent},
    {path:"studentinfo/:i", component:StudentinfoComponent, canActivate:[ConfirmguardGuard]}
  ]},
  {path:'addstudent', component:AddstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
