import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: `${environment.Profile}/remoteEntry.js`,
            type: 'module',
            exposedModule: './Module',
          }).then((m) => m.EmployeeProfileModule),
      },
      {
        path: 'review/:id',
        component: WebComponentWrapper,
        data: {
          type: 'script',
          remoteEntry: `${environment.Review}/remoteEntry.js`,
          exposedModule: './Module',
          remoteName: 'template_vue',
          elementName: 'template-vue',
        } as WebComponentWrapperOptions,
      },
      {
        path: 'timesheet/:id',
        component: WebComponentWrapper,
        data: {
          type: 'script',
          remoteEntry: `${environment.Review}/remoteEntry.js`,
          exposedModule: './Module',
          remoteName: 'template_vue',
          elementName: 'template-vue',
        } as WebComponentWrapperOptions,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
