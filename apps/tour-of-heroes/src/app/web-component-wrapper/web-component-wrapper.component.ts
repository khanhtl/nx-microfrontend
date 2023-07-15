import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { environment } from '../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'web-component-wrapper',
  template: `<mft-wc-wrapper [options]="item"></mft-wc-wrapper>`
})
export class WebComponentWrapperComponent implements OnInit {

  item: WebComponentWrapperOptions={
    type: 'script',
    remoteEntry: `${environment.MESSAGES_MICROAPP_ORIGIN}/remoteEntry.js`,
    exposedModule: './messages-wc',
    remoteName: 'messages_microapp',
    elementName: 'vue-component',
  };
  ngOnInit(): void {
  }
}
