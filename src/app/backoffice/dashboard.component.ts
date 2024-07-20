import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {AuthService} from "../service/auth.service";
interface SidebarMenu {
  link: string;
  icon: string;
  menu: string;
  roles: string[];
  children?: SidebarMenu[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
          map(result => result.matches),
          shareReplay()
      );

  constructor(private breakpointObserver: BreakpointObserver,private authService:AuthService) { }

  routerActive: string = "activelink";

  sidebarMenu: SidebarMenu[] = [
    {
      link: "/dashboard/home",
      icon: "home",
      menu: "Dashboard",
      roles:["admin","user"]
    },
    {
      link: "/admin/crisis",
      icon: "users",
      menu: "Crisis",
      roles:["admin","user"]
    },
    {
      link: "/admin/security",
      icon: "users",
      menu: "Security Agent" ,
      roles:["admin","user"]
    },
    {
      link: "/admin/community",
      icon: "user",
      menu: "Community Engagment",
      roles:["admin","user"]

    },
    {
      link: "/admin/managment",
      icon: "user",
      menu: "managment",
      roles:["admin","user"] } ,

     { link: "/admin/facilityManagement",
      icon: "store",
      menu: "facility Management",
      roles: ["admin", "user"],
      children: [
        {
          link: "/admin/facilityManagement/parkingagentdashbored",
          icon: "local_parking",
          menu: "Parking Management",
          roles: ["admin", "user"]
        }
      ]
    },
    {
      link: "/dashboard/stock",
      icon: "grid",
      menu: "Stock",
      roles:["admin"]

    },
    {
      link: "/button",
      icon: "disc",
      menu: "Buttons",
      roles:["user"]
    },

  ]

  filteredSidebarMenu: SidebarMenu[] = [];

  ngOnInit(): void {
    const userRole=this.authService.getUserRole();
    this.filteredSidebarMenu=this.sidebarMenu.filter(item =>item.roles.includes(userRole));

  }

}
