import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FitnessUsageStatisticsComponent} from "./fitness-usage-statistics/fitness-usage-statistics.component";
import {EquipmentListComponent} from "./equipment-list/equipment-list.component";

const routes: Routes = [
  {path:'',component:FitnessUsageStatisticsComponent},
  {path:'equipement',component:EquipmentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessDashboardRoutingModule { }
