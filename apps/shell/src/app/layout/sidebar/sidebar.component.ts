import { AppsPath } from './../../common/constant/apps-path';
import { AppsName } from './../../common/constant/apps-name';
import { appSidebarItems } from './../../configs/sidebar-items';
import { SidebarItem } from './../../types/sidebar-item';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  isShowSubSidebar=false;

  handleClickSidebar(sidebar?: SidebarItem) {
    setTimeout(() => {
      this.isShowSubSidebar = true
    });
  }
  onClickOutSide() {
    this.isShowSubSidebar=false
  }
  /**
   * Chuyển router giữa các app
   * @author tlkhanh 31.07.2023
   * @param app
   * @param path
   */
  handleNavigate(app: string, path: string) {
    (window as any).path=path;
    this.isShowSubSidebar=false
    window.dispatchEvent(new CustomEvent('routeNavigate', {
      detail: {
        app,
        path
      }
    }));
  }
  // Danh sách item sidebar
  sidebarItems: SidebarItem[]=appSidebarItems;

  appsName=AppsName;
  appsPath=AppsPath;
}
