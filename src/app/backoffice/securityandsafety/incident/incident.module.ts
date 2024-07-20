import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentComponent } from './incident/incident.component';
import {TawasalnaModule} from "../../../tawasalna-module";
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {IncidentReportFormComponent} from "./incident_report_form/incident_report_form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./incident/confirmdialog.component";
import {UpdateIncidentDialogComponent} from "./incident/update-incident-dialog.component";



@NgModule({
    declarations: [
        IncidentComponent,
        IncidentDetailsComponent,
        IncidentReportFormComponent,
        ConfirmDialogComponent,
        UpdateIncidentDialogComponent
    ],
    imports: [
        CommonModule,
        IncidentRoutingModule,
        TawasalnaModule,
        NgApexchartsModule,
        ReactiveFormsModule,
        MatDialogModule,
        FormsModule


    ]
})
export class IncidentModule { }
