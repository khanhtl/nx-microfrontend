import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    path: '',
    loadChildren: () =>
      import('./employee-profile/employee-profile.module').then((m) => m.EmployeeProfileModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
