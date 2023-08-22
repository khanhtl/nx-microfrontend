import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './employee-profile.component';
import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeProfileDetailComponent } from './employee-profile-detail/employee-profile-detail.component';

@NgModule({
  declarations: [EmployeeProfileComponent, EmployeeProfileDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EmployeeProfileRoutingModule,
  ],
})
export class EmployeeProfileModule {}
