import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciergeServicesDashboardRoutingModule } from './concierge-services-dashboard-routing.module';
import { ConciergeServicesDashboardLayoutComponent } from './concierge-services-dashboard-layout/concierge-services-dashboard-layout.component';
import { PersonalAssistanceComponent } from './personal-assistance/personal-assistance.component';
import { EventPlanningComponent } from './event-planning/event-planning.component';
import { ResidentProfileComponent } from './resident-profile/resident-profile.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';


@NgModule({
  declarations: [
    ConciergeServicesDashboardLayoutComponent,
    PersonalAssistanceComponent,
    EventPlanningComponent,
    ResidentProfileComponent
  ],
  imports: [
    CommonModule,
    TawasalnaModule,
    ConciergeServicesDashboardRoutingModule
  ]
})
export class ConciergeServicesDashboardModule { }
