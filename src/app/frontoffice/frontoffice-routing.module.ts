import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontofficeComponent} from "./frontoffice.component";
import {MainComponent} from "./pages/main/main.component";
import {ManagementcordinationComponent} from "./pages/managementcordination/managementcordination.component";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanUrgenceComponent } from './plan-urgence/plan-urgence.component';
import { IncidentsComponent } from './incidents/incidents.component';


const routes: Routes = [
  {path:'',component:FrontofficeComponent,children:[
      {path:'main',component:MainComponent},
      {path:'form',component:ManagementcordinationComponent},
      {path:'urgence',component:PlanUrgenceComponent},
      {path:'incidents',component:IncidentsComponent}


    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
