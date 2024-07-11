import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { VehiculeManagementComponent } from './vehicule-management/vehicule-management.component';
import { ParkingListComponent } from './parking-list/parking-list.component';

const routes: Routes = [
  {path:'',component:DashboardMenuComponent},
  {path:'vehiculelist',component:VehiculeManagementComponent},
  {path:'parkinglist',component:ParkingListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingAgentDashboredRoutingModule { }
