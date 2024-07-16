import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncidentComponent} from "./incident/incident.component";
import {IncidentDetailsComponent} from "./incident-details/incident-details.component";
import {WidgetComponent} from "./widget/widget.component";
import { IncidentRecentComponent } from './incident-recent/incident-recent.component';



const routes: Routes = [

  {path:'',component:IncidentComponent},
  {path:'detail/:id',component:IncidentDetailsComponent},
  {path:'widget',component:WidgetComponent},
  {path:'recent',component:IncidentRecentComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule { }