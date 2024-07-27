import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantRelationsDashboardLayoutComponent } from './tenant-relations-dashboard-layout/tenant-relations-dashboard-layout.component';
import { LeaseManagementComponent } from './lease-management/lease-management.component';
import { ComplaintResolutionComponent } from './complaint-resolution/complaint-resolution.component';
import { SatisfactionSurveysComponent } from './satisfaction-surveys/satisfaction-surveys.component';

const routes: Routes = [
  {
    path: '',
    component: TenantRelationsDashboardLayoutComponent
  },
  { path: 'lease-management', component: LeaseManagementComponent },
  { path: 'complaint-resolution', component: ComplaintResolutionComponent },
  { path: 'satisfaction-surveys', component: SatisfactionSurveysComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRelationsDashboardRoutingModule { }
