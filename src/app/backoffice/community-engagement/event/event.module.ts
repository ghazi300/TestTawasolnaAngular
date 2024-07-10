import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventPlannerCalendarComponent } from './event-planner-calendar/event-planner-calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { AddEventDialogComponent } from './add-event-dialog/add-event-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {TawasalnaModule} from "../../../tawasalna-module";


@NgModule({
  declarations: [
    EventPlannerCalendarComponent,
    AddEventDialogComponent
  ],
    imports: [
        CommonModule,
        EventRoutingModule,
        FullCalendarModule,
        MatInputModule,
        FormsModule,
        TawasalnaModule
    ]
})
export class EventModule { }