import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionDashboardRoutingModule } from './reception-dashboard-routing.module';
import { ReceptionDashboardLayoutComponent } from './reception-dashboard-layout/reception-dashboard-layout.component';
import { VisitorLogsComponent } from './visitor-logs/visitor-logs.component';
import { FrontDeskRequestsComponent } from './front-desk-requests/front-desk-requests.component';
import { CommunityAnnouncementsComponent } from './community-announcements/community-announcements.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';


@NgModule({
  declarations: [
    ReceptionDashboardLayoutComponent,
    VisitorLogsComponent,
    FrontDeskRequestsComponent,
    CommunityAnnouncementsComponent
  ],
  imports: [
    CommonModule,
    TawasalnaModule,
    FormsModule,
    NgApexchartsModule,
    FeatherModule.pick(allIcons),
    ReceptionDashboardRoutingModule
  ]
})
export class ReceptionDashboardModule { }
