import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Attendance } from '../models/Attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:9002/Resident-Support-Services/api/attendances';

  constructor(private http: HttpClient) { }

  // Get attendances for a specific event
  getAttendancesForEvent(eventId: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}?eventId=${eventId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Mark attendance for a participant in an event
  markAttendance(eventId: string, participantId: string, attended: boolean): Observable<void> {
    const body = { event: { id: eventId }, participantName: { id: participantId }, attended };
    return this.http.post<void>(`${this.apiUrl}/mark`, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Add attendance for a participant in an event
  addAttendance(eventId: string, participantId: string, attended: boolean): Observable<void> {
    const body = { event: { id: eventId }, participantName: { id: participantId }, attended };
    return this.http.post<void>(this.apiUrl, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong with the request.'));
  }
}
