import { AppsName, SubAppsName } from '../common/constant/apps-name';
import { SidebarItem } from './../types/sidebar-item';
export const appSidebarItems: SidebarItem[]=[
  {
    Key: AppsName.Review,
    Icon: 'mi-icon-review',
    SubItems: [
      {
        Key: SubAppsName.Review_ReviewPeriod
      },
      {
        Key: SubAppsName.Review_Targets
      },
    ]
  },
  {
    Key: AppsName.Profile,
    Icon: 'mi-icon-profile',
  },
  {
    Key: AppsName.Timesheet,
    Icon: 'mi-icon-timesheet',
    SubItems: [
      {
        Key: SubAppsName.Timesheet_TimeKeepingRemote,
      }
    ]
  },
  {
    Key: AppsName.Payroll,
    Icon: 'mi-icon-payroll',
    SubItems: [
      {
        Key: SubAppsName.Payroll_Paycheck
      }
    ]
  },
]
