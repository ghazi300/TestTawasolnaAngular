import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CulturalProgramScheduleComponent} from "./cultural-program-schedule/cultural-program-schedule.component";
import {DiversityInitiativesComponent} from "./diversity-initiatives/diversity-initiatives.component";

const routes: Routes = [
  {path:'',component:CulturalProgramScheduleComponent},
  {path:'diversity',component:DiversityInitiativesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
