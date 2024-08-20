import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient!: Client;
  private notificationSubject: Subject<any> = new Subject<any>();

  constructor() {
    this.connect();
  }
  private connect(): void {
    const socket = new SockJS('http://localhost:8200/tawasalna-crisis/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.onConnect = (frame: any) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/notifications', (message) => {
        if (message.body) {
          this.notificationSubject.next(JSON.parse(message.body));
        }
      });
    };

    this.stompClient.onStompError = (error: any) => {
      console.error('WebSocket connection error: ', error);
    };

    this.stompClient.activate();
  }

  public getNotifications(): Observable<any> {
    return this.notificationSubject.asObservable();
  }
}
