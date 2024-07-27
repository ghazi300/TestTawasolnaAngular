import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRelationsDashboardRoutingModule } from './tenant-relations-dashboard-routing.module';
import { TenantRelationsDashboardLayoutComponent } from './tenant-relations-dashboard-layout/tenant-relations-dashboard-layout.component';
import { LeaseManagementComponent } from './lease-management/lease-management.component';
import { ComplaintResolutionComponent } from './complaint-resolution/complaint-resolution.component';
import { SatisfactionSurveysComponent } from './satisfaction-surveys/satisfaction-surveys.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';


@NgModule({
  declarations: [
    TenantRelationsDashboardLayoutComponent,
    LeaseManagementComponent,
    ComplaintResolutionComponent,
    SatisfactionSurveysComponent
  ],
  imports: [
    CommonModule,
    TawasalnaModule,
    TenantRelationsDashboardRoutingModule
  ]
})
export class TenantRelationsDashboardModule { }
