import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatrolRouteListComponent} from "./patrol-route-list/patrol-route-list";
import {PatrolRouteFormComponent} from "./patrol-route-form/patrol-route-form";


const routes: Routes = [

  {path:'patrolroute',component:PatrolRouteListComponent},
  {path:'patrolrouteform',component:PatrolRouteFormComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule { }
