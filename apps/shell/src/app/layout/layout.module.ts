import { ClickOutSideDirective } from './../click-out-side.directive';
import { LayoutRoutingModule } from './layout.-routing.module';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    ClickOutSideDirective
  ],
  imports: [CommonModule, LayoutRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LayoutModule {}
