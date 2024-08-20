import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanUrgenceInventoryComponent } from './plan-urgence-inventory/plan-urgence-inventory.component';

const routes: Routes = [{path:'',component:PlanUrgenceInventoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanUrgenceRoutingModule { }
