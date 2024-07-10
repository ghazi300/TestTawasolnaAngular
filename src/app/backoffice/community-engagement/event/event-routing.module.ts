import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventPlannerCalendarComponent} from "./event-planner-calendar/event-planner-calendar.component";

const routes: Routes = [
  {path:"calandar",component:EventPlannerCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }