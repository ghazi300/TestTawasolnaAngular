import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResourceUsageAnalyticsComponent} from "./resource-usage-analytics/resource-usage-analytics.component";

const routes: Routes = [
  {path:'',component:ResourceUsageAnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SustainabilitycoordinatordashboardRoutingModule { }
