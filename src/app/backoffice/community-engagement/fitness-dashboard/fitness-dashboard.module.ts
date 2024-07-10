import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessDashboardRoutingModule } from './fitness-dashboard-routing.module';
import { FitnessUsageStatisticsComponent } from './fitness-usage-statistics/fitness-usage-statistics.component';
import {TawasalnaModule} from "../../../tawasalna-module";
import {NgApexchartsModule} from "ng-apexcharts";
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { AddEquipmentFormComponent } from './add-equipment-form/add-equipment-form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FitnessUsageStatisticsComponent,
    EquipmentListComponent,
    AddEquipmentFormComponent
  ],
    imports: [
        CommonModule,
        FitnessDashboardRoutingModule,
        TawasalnaModule,
        NgApexchartsModule,
        FormsModule
    ]
})
export class FitnessDashboardModule { }