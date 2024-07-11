import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'parkingagentdashbored', loadChildren:()=> import('./parking-agent-dashbored/parking-agent-dashbored.module').then(m => m.ParkingAgentDashboredModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesManagementRoutingModule { }
