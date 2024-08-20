import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { SimulationDialogComponent } from './simulation-dialog/simulation-dialog.component';
import { SimulationCalendarComponent } from './simulation-calendar/simulation-calendar.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    SimulationListComponent,
    SimulationDialogComponent,
    SimulationCalendarComponent
  ],
  imports: [
    CommonModule,
    SimulationRoutingModule,
    TawasalnaModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class SimulationModule { }
