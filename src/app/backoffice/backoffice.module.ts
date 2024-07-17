import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './dashboard.component';
import {FeatherModule} from "angular-feather";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatRippleModule} from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import { EventDetailsDialogComponent } from './event-details-dialog/event-details-dialog.component';
import { FacilityBookingComponent } from './facility-booking/facility-booking.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { AddEventDialogComponent } from './add-event-dialog/add-event-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DashboardComponent,
    EventDetailsDialogComponent,
    FacilityBookingComponent,
    AddEventDialogComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    BackofficeRoutingModule,
    FeatherModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    CalendarModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    

  ]
})
export class BackofficeModule { }