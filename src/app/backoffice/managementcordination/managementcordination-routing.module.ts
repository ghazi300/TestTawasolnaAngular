import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementcordinationComponent } from './managementcordination/managementcordination.component';

const routes: Routes = [
  {
    path:'',component:ManagementcordinationComponent
  }
  // {path:'/',loadChildren:() => import('./managementcordination/managementcordination.component').then(m => m.ManagementcordinationComponent)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementcordinationRoutingModule { }
