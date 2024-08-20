import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrisisMenuComponent} from "./crisis-menu.component";
import { NotificationComponent } from './notification/notification.component';


const routes: Routes = [
  {path:'',component:CrisisMenuComponent},
  {path:'notifications',component:NotificationComponent},
  {path:'incident',loadChildren:() => import('./incident/incident.module').then(m => m.IncidentModule)},
  {path:'ressource',loadChildren:() => import('./ressource/ressource.module').then(m => m.RessourceModule)},
  {path:'plan',loadChildren:() => import('./plan-urgence/plan-urgence.module').then(m => m.PlanUrgenceModule)},
  {path:'simulation',loadChildren:() => import('./simulation/simulation.module').then(m => m.SimulationModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisDashboardRoutingModule { } 
