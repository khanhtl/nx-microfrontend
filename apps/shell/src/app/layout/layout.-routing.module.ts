import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const routes: Routes=[
  {
    path: '',
    component: LayoutComponent,
    children: [

  {
    path: 'review/:id',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './Module',
      remoteName: 'messages_microapp',
      elementName: 'vue-component',
    } as WebComponentWrapperOptions,
  }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
