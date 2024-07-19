import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecurityAndSafetyMenuComponent} from "./securityandsafety-menu.component";



const routes: Routes = [
    {path:'',component: SecurityAndSafetyMenuComponent},
    {path:'incident',loadChildren:() => import('./incident/incident.module').then(m => m.IncidentModule)},
    {path:'incident-report-form',loadChildren:() => import('./incident/incident.module').then(m => m.IncidentModule)},
    {path:'logslist',loadChildren:() => import('./acess_control_log/logs.module').then(m => m.LogsModule)},
    {path:'logsform',loadChildren:() => import('./acess_control_log/logs.module').then(m => m.LogsModule)},
    {path:'protocols',loadChildren:() => import('./protocols/protocols.module').then(m => m.ProtocolsModule)},
    {path:'protocolsform',loadChildren:() => import('./protocols/protocols.module').then(m => m.ProtocolsModule)},
    {path:'patrolroute',loadChildren:()=> import('./patrol/patrol.module').then(m=>m.PatrolModule)},
    {path:'patrolrouteform',loadChildren:()=> import('./patrol/patrol.module').then(m=>m.PatrolModule)},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityandsafetyRoutingModule{ }
