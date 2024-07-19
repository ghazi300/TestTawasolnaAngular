import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncidentComponent} from "./incident/incident.component";
import {IncidentDetailsComponent} from "./incident-details/incident-details.component";
import {IncidentReportFormComponent} from "./incident_report_form/incident_report_form.component";


const routes: Routes = [

  {path:'',component:IncidentComponent},
  {path:'detail/:id',component:IncidentDetailsComponent},
  {path:'incident-report-form',component:IncidentReportFormComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule { }
