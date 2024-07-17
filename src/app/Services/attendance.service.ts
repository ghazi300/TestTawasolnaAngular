import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { Participant } from 'src/app/models/Participant'; 
import { Attendance } from '../models/Attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:9002/Resident-Support-Services/api/attendances';
  private eventsUrl = 'http://localhost:9002/Resident-Support-Services/api/events';
  private participantsUrl = 'http://localhost:9002/Resident-Support-Services/api/participants';

  constructor(private http: HttpClient) {}

  getAttendances(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.apiUrl);
  }

  addAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.apiUrl, attendance);
  }

  updateAttendance(attendance: Attendance): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${attendance.id}`, attendance);
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.participantsUrl);
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.eventsUrl}/${event.id}`, event);
  }
}
