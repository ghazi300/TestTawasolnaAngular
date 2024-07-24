import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciergeServicesDashboardLayoutComponent } from './concierge-services-dashboard-layout/concierge-services-dashboard-layout.component';
import { PersonalAssistanceComponent } from './personal-assistance/personal-assistance.component';
import { EventPlanningComponent } from './event-planning/event-planning.component';
import { ResidentProfileComponent } from './resident-profile/resident-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ConciergeServicesDashboardLayoutComponent
  },
  { path: 'personal-assistance', component: PersonalAssistanceComponent },
  { path: 'event-planning', component: EventPlanningComponent },
  { path: 'resident-profile', component: ResidentProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciergeServicesDashboardRoutingModule { }
