import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SustainabilitycoordinatordashboardRoutingModule } from './sustainabilitycoordinatordashboard-routing.module';
import { ResourceUsageAnalyticsComponent } from './resource-usage-analytics/resource-usage-analytics.component';
import {TawasalnaModule} from "../../../tawasalna-module";
import {NgxChartsModule} from "@swimlane/ngx-charts";


@NgModule({
  declarations: [
    ResourceUsageAnalyticsComponent
  ],
  imports: [
    CommonModule,
    SustainabilitycoordinatordashboardRoutingModule,
    TawasalnaModule,
    NgxChartsModule
  ]
})
export class SustainabilitycoordinatordashboardModule { }
