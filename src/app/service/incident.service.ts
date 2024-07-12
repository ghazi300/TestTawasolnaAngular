import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private apiUrl = `http://localhost:8200/tawasalna-crisis/incidents`; // Adjust base URL as needed

  constructor(private http: HttpClient) {}

  createIncident(incidentPayload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, incidentPayload);
  }
  getIncidents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getIncidentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getRecentIncidents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recent`);
  }
  allocateResources(incidentId: string, resourceIds: string[]): Observable<any> {
    const body = { incidentId, resourceIds };
    return this.http.post<any>(this.apiUrl, body);
  }
}
