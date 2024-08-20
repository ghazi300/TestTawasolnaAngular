import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {AuthService} from "../service/auth.service";
import { WebSocketService } from '../service/web-socket.service';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
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
  notifications: any[] = [];
  notificationCount: number = 0;
  filteredSidebarMenu: SidebarMenu[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
          map(result => result.matches),
          shareReplay()
      );

  constructor(private breakpointObserver: BreakpointObserver,private authService:AuthService,private webSocketService: WebSocketService,private router:Router,private notificationService:NotificationService) { }

  routerActive: string = "activelink";

  sidebarMenu: SidebarMenu[] = [
    {
      link: "/admin/maintenance",
      icon: "user",
      menu: "Maintenance",
      roles:["admin","user"]
    },
    {
      link: "/admin/resident-services/dashboard",
      icon: "user",
      menu: "Resident S&S",
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

  ngOnInit(): void {
    this.loadNotifications();
    this.subscribeToWebSocket();
    this.loadStoredNotifications();
    this.filterSidebarMenu();
  }

  loadNotifications(): void {
    this.notificationService.getNotifications().subscribe(data => {
      this.notifications = data;
      this.notificationCount = this.notifications.filter(n => !n.read).length;
    });
  }

  subscribeToWebSocket(): void {
    this.webSocketService.getNotifications().subscribe(notification => {
      this.notifications.unshift(notification);
      this.notificationCount = this.notifications.filter(n => !n.read).length;
      localStorage.setItem('notifications', JSON.stringify(this.notifications));
    });
  }

  loadStoredNotifications(): void {
    const storedNotifications = localStorage.getItem('notifications');
    if (storedNotifications) {
      this.notifications = JSON.parse(storedNotifications);
      this.notificationCount = this.notifications.filter(n => !n.read).length;
    }
  }

  filterSidebarMenu(): void {
    const userRole = this.authService.getUserRole();
    this.filteredSidebarMenu = this.sidebarMenu.filter(item => item.roles.includes(userRole));
  }

  markNotificationAsRead(notificationId: string): void {
    this.notificationService.markAsRead(notificationId).subscribe(() => {
      const notification = this.notifications.find(n => n.id === notificationId);
      if (notification) {
        notification.read = true;
        this.notificationCount = this.notifications.filter(n => !n.read).length;
        localStorage.setItem('notifications', JSON.stringify(this.notifications));
      }
    });
  }

  markNotificationsAsRead(): void {
    this.notifications.forEach(notification => {
      if (!notification.read) {
        this.markNotificationAsRead(notification.id);
      }
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/admin/crisis/incident/detail', id]);
    this.markNotificationAsRead(id);
  }

  viewAllNotifications(): void {
    this.router.navigate(['/admin/crisis/notifications']);
    this.markNotificationsAsRead();
  }
  }
