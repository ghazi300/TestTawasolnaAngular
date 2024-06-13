import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/dashboard/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/dashboard/prospects",
      icon: "users",
      menu: "Prospects",
    },
    {
      link: "/dashboard/customers",
      icon: "user",
      menu: "CRM",
    
    },
    {
      link: "/dashboard/stock",
      icon: "grid",
      menu: "Stock",
    
    },
    /* {
      link: "/button",
      icon: "disc",
      menu: "Buttons",
    },
    {
      link: "/forms",
      icon: "layout",
      menu: "Forms",
    },
    {
      link: "/alerts",
      icon: "info",
      menu: "Alerts",
    },
    {
      link: "/grid-list",
      icon: "file-text",
      menu: "Grid List",
    },
    {
      link: "/menu",
      icon: "menu",
      menu: "Menus",
    }, */
   
   /*  {
      link: "/expansion",
      icon: "divide-circle",
      menu: "Expansion Panel",
    },
    {
      link: "/chips",
      icon: "award",
      menu: "Chips",
    },
    {
      link: "/tabs",
      icon: "list",
      menu: "Tabs",
    },
    {
      link: "/progress",
      icon: "bar-chart-2",
      menu: "Progress Bar",
    },
    {
      link: "/toolbar",
      icon: "voicemail",
      menu: "Toolbar",
    },
    {
      link: "/progress-snipper",
      icon: "loader",
      menu: "Progress Snipper",
    },
    {
      link: "/tooltip",
      icon: "bell",
      menu: "Tooltip",
    },
    {
      link: "/snackbar",
      icon: "slack",
      menu: "Snackbar",
    },
    {
      link: "/slider",
      icon: "sliders",
      menu: "Slider",
    },
    {
      link: "/slide-toggle",
      icon: "layers",
      menu: "Slide Toggle",
    }, */
  ]

}
