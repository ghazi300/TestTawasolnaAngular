import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { VehiculeManagementComponent } from './vehicule-management/vehicule-management.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { ParkingSpaceComponent } from './parking-space/parking-space.component';

const routes: Routes = [
  {path:'',component:DashboardMenuComponent},
  {path:'vehiculelist',component:VehiculeManagementComponent},
  {path:'parkinglist',component:ParkingListComponent},
  {path:'parkingLot',component:ParkingLotComponent},
  {path:'parkingSpace',component:ParkingSpaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingAgentDashboredRoutingModule { }
