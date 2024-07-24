import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerServiceDashboardRoutingModule } from './customer-service-dashboard-routing.module';
import { CustomerServiceDashboardLayoutComponent } from './customer-service-dashboard-layout/customer-service-dashboard-layout.component';
import { InquiryLogsComponent } from './inquiry-logs/inquiry-logs.component';
import { FeedbackTrendsComponent } from './feedback-trends/feedback-trends.component';
import { ServiceRequestEscalationComponent } from './service-request-escalation/service-request-escalation.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';


@NgModule({
  declarations: [
    CustomerServiceDashboardLayoutComponent,
    InquiryLogsComponent,
    FeedbackTrendsComponent,
    ServiceRequestEscalationComponent
  ],
  imports: [
    CommonModule,
    TawasalnaModule,
    CustomerServiceDashboardRoutingModule
  ]
})
export class CustomerServiceDashboardModule { }
