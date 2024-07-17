import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from '../models/Participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl1 = 'http://localhost:9002/Resident-Support-Services/api/participants';

  constructor(private http: HttpClient) { }

  getAllParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.apiUrl1);
  }

  getParticipantById(participantId: number): Observable<Participant> {
    const url = `${this.apiUrl1}/${participantId}`;
    return this.http.get<Participant>(url);
  }

  createParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.apiUrl1, participant);
  }

  updateParticipant(participantId: number, participant: Participant): Observable<Participant> {
    const url = `${this.apiUrl1}/${participantId}`;
    return this.http.put<Participant>(url, participant);
  }

  deleteParticipant(participantId: number): Observable<void> {
    const url = `${this.apiUrl1}/${participantId}`;
    return this.http.delete<void>(url);
  }
}
