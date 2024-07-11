import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceInventoryComponent } from './resource-inventory/resource-inventory.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';

const routes: Routes = [
  { path: '', component: ResourceInventoryComponent },
  { path: 'list', component: ResourceListComponent },
  {path:'allocate',component:ResourceAllocationComponent},
  { path: 'add', component: AddResourceFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourceRoutingModule { }
