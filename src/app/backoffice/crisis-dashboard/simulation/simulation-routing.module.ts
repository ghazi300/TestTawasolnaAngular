import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { SimulationCalendarComponent } from './simulation-calendar/simulation-calendar.component';

const routes: Routes = [{path:'',component:SimulationListComponent},
  {path:'calendar',component:SimulationCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationRoutingModule { }
