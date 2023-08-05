import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './employee-profile.component';
import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EmployeeProfileComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, EmployeeProfileRoutingModule],
})
export class EmployeeProfileModule {}
