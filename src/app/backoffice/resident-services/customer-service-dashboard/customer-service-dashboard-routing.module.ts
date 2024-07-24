import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerServiceDashboardLayoutComponent } from './customer-service-dashboard-layout/customer-service-dashboard-layout.component';
import { InquiryLogsComponent } from './inquiry-logs/inquiry-logs.component';
import { FeedbackTrendsComponent } from './feedback-trends/feedback-trends.component';
import { ServiceRequestEscalationComponent } from './service-request-escalation/service-request-escalation.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerServiceDashboardLayoutComponent
  },
  { path: 'inquiry-logs', component: InquiryLogsComponent },
  { path: 'feedback-trends', component: FeedbackTrendsComponent },
  { path: 'service-request-escalation', component: ServiceRequestEscalationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerServiceDashboardRoutingModule { }
