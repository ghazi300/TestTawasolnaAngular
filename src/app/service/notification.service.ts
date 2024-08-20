import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsUrl = 'http://localhost:8200/tawasalna-crisis/notif'; 
  constructor(private http: HttpClient) { }

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.notificationsUrl);
  }
  markAsRead(id: string): Observable<void> {
    const url = `${this.notificationsUrl}/${id}/read`; 
    return this.http.put<void>(url, {});
  }
}
