import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionDashboardLayoutComponent } from './reception-dashboard-layout/reception-dashboard-layout.component';
import { VisitorLogsComponent } from './visitor-logs/visitor-logs.component';
import { FrontDeskRequestsComponent } from './front-desk-requests/front-desk-requests.component';
import { CommunityAnnouncementsComponent } from './community-announcements/community-announcements.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionDashboardLayoutComponent
  },
  { path: 'visitor-logs', component: VisitorLogsComponent },
  { path: 'front-desk-requests', component: FrontDeskRequestsComponent },
  { path: 'community-announcements', component: CommunityAnnouncementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionDashboardRoutingModule { }
