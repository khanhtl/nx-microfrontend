import { EmployeeProfileDetailComponent } from './employee-profile-detail/employee-profile-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile.component';

const routes: Routes=[
  {
    path: '',
    component: EmployeeProfileComponent,
  },
  {
    path: ':id',
    component: EmployeeProfileDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeProfileRoutingModule { }
