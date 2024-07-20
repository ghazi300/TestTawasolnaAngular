import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { CulturalProgramScheduleComponent } from './cultural-program-schedule/cultural-program-schedule.component';
import { DiversityInitiativesComponent } from './diversity-initiatives/diversity-initiatives.component';
import {TawasalnaModule} from "../../../tawasalna-module";
import {FullCalendarModule} from "@fullcalendar/angular";
import { AddProgramDialogComponent } from './cultural-program-schedule/add-program-dialog/add-program-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddInitiativeDialogComponent } from './diversity-initiatives/add-initiative-dialog/add-initiative-dialog.component';
import { ConfirmdialogComponent } from './cultural-program-schedule/confirmdialog/confirmdialog.component';


@NgModule({
  declarations: [
    CulturalProgramScheduleComponent,
    DiversityInitiativesComponent,
    AddProgramDialogComponent,
    AddInitiativeDialogComponent,
    ConfirmdialogComponent
  ],
    imports: [
        CommonModule,
        EducationRoutingModule,
        TawasalnaModule,
        FullCalendarModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EducationModule { }
