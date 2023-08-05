import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  handleNavigate(app: string, path: string) {
    window.dispatchEvent(new CustomEvent('routeNavigate', {
      detail: {
        app,
        path
      }
    }));
  }
}
