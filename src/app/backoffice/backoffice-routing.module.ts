import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
      {path:'crisis',loadChildren:() => import('./crisis-dashboard/crisis-dashboard.module').then(m => m.CrisisDashboardModule)},
          {path:'facilityManagement',loadChildren:() => import('./facilities-management/facilities-management.module').then(m => m.FacilitiesManagementModule)},
          {path:'residentSupport',loadChildren:() => import('./resident-service-support/resident-service-support.module').then(m => m.ResidentServiceSupportModule)},
          {path:'managment',loadChildren:() => import('./managementcordination/managementcordination.module').then(m => m.ManagementcordinationModule)},
          {path:'community',loadChildren:() => import('./community-engagement/community-engagement.module').then(m => m.CommunityEngagementModule)},
          {path:'security',loadChildren:() => import('./securityandsafety/securityandsafety.module').then(m => m.SecurityAndSafetyModule)},
          {path:'maintenance',loadChildren:() => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)},

      ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
