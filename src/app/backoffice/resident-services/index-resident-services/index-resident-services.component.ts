import { Component } from '@angular/core';


interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}


@Component({
  selector: 'app-index-resident-services',
  templateUrl: './index-resident-services.component.html',
  styleUrls: ['./index-resident-services.component.scss']
})
export class IndexResidentServicesComponent {

  routerActive: string = "activelink";

  sidebarMenuReception: sidebarMenu[] = [
    {
      link: "/admin/resident-services/dashboard/reception/visitor-logs",
      icon: "users",
      menu: "Visitor Logs",
    },
    {
      link: "/admin/resident-services/dashboard/reception/front-desk-requests",
      icon: "users",
      menu: "Front Desk",
    },
    {
      link: "/admin/resident-services/dashboard/reception/community-announcements",
      icon: "users",
      menu: "Community",
    },
  ]

  sidebarMenuCustomerService: sidebarMenu[] = [
    {
      link: "/admin/resident-services/dashboard/customer-service/inquiry-logs",
      icon: "users",
      menu: "Inquiry Logs",
    },
    {
      link: "/admin/resident-services/dashboard/customer-service/feedback-trends",
      icon: "users",
      menu: "Feedback Trends",
    },
    {
      link: "/admin/resident-services/dashboard/customer-service/service-request-escalation",
      icon: "users",
      menu: "Service Request",
    },
  ]

  sidebarMenuConciergeService: sidebarMenu[] = [
    {
      link: "/admin/resident-services/dashboard/concierge-services/personal-assistance",
      icon: "users",
      menu: "Personal Assistance",
    },
    {
      link: "/admin/resident-services/dashboard/concierge-services/event-planning",
      icon: "users",
      menu: "Event Planning",
    },
    {
      link: "/admin/resident-services/dashboard/concierge-services/resident-profile",
      icon: "users",
      menu: "Resident Profile",
    },
  ]

  sidebarMenuTenantRelations: sidebarMenu[] = [
    {
      link: "/admin/resident-services/dashboard/tenant-relations/lease-management",
      icon: "users",
      menu: "Lease Management",
    },
    {
      link: "/admin/resident-services/dashboard/tenant-relations/complaint-resolution",
      icon: "users",
      menu: "Complaint Resolution",
    },
    {
      link: "/admin/resident-services/dashboard/tenant-relations/satisfaction-surveys",
      icon: "users",
      menu: "Satisfaction Surveys",
    },
  ]

}
