import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifs: any[] = [];

  constructor(private ns: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifs();
  }

  loadNotifs(): void {
    this.ns.getNotifications().subscribe((data) => {
      this.notifs = data;
      console.log("notifs:",this.notifs);
    });
  }
}
