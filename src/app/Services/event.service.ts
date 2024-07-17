import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:9002/Resident-Support-Services/api/events';

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  getEventById(eventId: number): Observable<Event> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.get<Event>(url);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  updateEvent(eventId: number, event: Event): Observable<Event> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.put<Event>(url, event);
  }

  deleteEvent(eventId: number): Observable<void> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.delete<void>(url);
  }
}
