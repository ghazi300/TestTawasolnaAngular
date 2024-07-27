import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentServicesLayoutComponent } from './resident-services-layout/resident-services-layout.component';

const routes: Routes = [
  {
    path: '',
    component:ResidentServicesLayoutComponent
  },
  {
    path: 'reception',
    loadChildren: () => import('./reception-dashboard/reception-dashboard.module').then(m => m.ReceptionDashboardModule)
  },
  {
    path: 'customer-service',
    loadChildren: () => import('./customer-service-dashboard/customer-service-dashboard.module').then(m => m.CustomerServiceDashboardModule)
  },
  {
    path: 'concierge-services',
    loadChildren: () => import('./concierge-services-dashboard/concierge-services-dashboard.module').then(m => m.ConciergeServicesDashboardModule)
  },
  {
    path: 'tenant-relations',
    loadChildren: () => import('./tenant-relations-dashboard/tenant-relations-dashboard.module').then(m => m.TenantRelationsDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentServicesRoutingModule { }
