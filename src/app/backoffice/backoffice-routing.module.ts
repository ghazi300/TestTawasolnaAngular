import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FacilitiesManagementModule } from './facilities-management/facilities-management.module';
import { FacilityBookingComponent } from './facility-booking/facility-booking.component';
import { ShowParticpantComponent } from './show-particpant/show-particpant.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'crisis', loadChildren: () => import('./crisis-dashboard/crisis-dashboard.module').then(m => m.CrisisDashboardModule) },
      { path: 'facilityManagement', component: FacilityBookingComponent },
      { path: 'Particpant', component: ShowParticpantComponent },
      { path: 'facilityManagement', loadChildren: () => import('./facilities-management/facilities-management.module').then(m => m.FacilitiesManagementModule) },
      { path: 'residentSupport', loadChildren: () => import('./resident-service-support/resident-service-support.module').then(m => m.ResidentServiceSupportModule) },
      { path: 'management', loadChildren: () => import('./managementcordination/managementcordination.module').then(m => m.ManagementcordinationModule) },
      { path: 'community', loadChildren: () => import('./community-engagement/community-engagement.module').then(m => m.CommunityEngagementModule) },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }