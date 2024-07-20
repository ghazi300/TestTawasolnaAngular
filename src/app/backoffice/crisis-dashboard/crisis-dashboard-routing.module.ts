import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrisisMenuComponent} from "./crisis-menu.component";

const routes: Routes = [
  {path:'',component:CrisisMenuComponent},
  {path:'incident',loadChildren:() => import('./incident/incident.module').then(m => m.IncidentModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisDashboardRoutingModule { }
