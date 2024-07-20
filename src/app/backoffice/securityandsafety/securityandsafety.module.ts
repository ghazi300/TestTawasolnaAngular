import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityandsafetyRoutingModule } from './securityandsafety-routing.module';
import { SecurityAndSafetyMenuComponent } from './securityandsafety-menu.component';
import { TawasalnaModule } from '../../tawasalna-module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FitnessDashboardModule } from '../community-engagement/fitness-dashboard/fitness-dashboard.module';
import { IncidentStatisticsComponent } from './incident/incident-statistics/incident-statistics.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    declarations: [
        SecurityAndSafetyMenuComponent,
        IncidentStatisticsComponent,
    ],
    imports: [
        CommonModule,
        SecurityandsafetyRoutingModule,
        TawasalnaModule,
        NgApexchartsModule,
        FitnessDashboardModule,
        MatFormFieldModule,
        ReactiveFormsModule, // Make sure ReactiveFormsModule is imported here
        MatDialogModule

    ]
})
export class SecurityAndSafetyModule { }
