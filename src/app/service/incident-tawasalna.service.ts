// incident-tawasalna.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Incident {
    id: string;
    description: string;
    location: string;
    time: string;
    category: string;
    status: string;
}

@Injectable({
    providedIn: 'root'
})
export class IncidentService {
    private baseUrl = 'http://localhost:9004/incidents';

    constructor(private http: HttpClient) { }

    getAllIncidents(): Observable<Incident[]> {
        return this.http.get<Incident[]>(`${this.baseUrl}`);
    }

    getIncidentById(id: string): Observable<Incident> {
        return this.http.get<Incident>(`${this.baseUrl}/${id}`);
    }

    createIncident(incident: Incident): Observable<Incident> {
        return this.http.post<Incident>(this.baseUrl, incident);
    }

    updateIncident(id: string, incident: Incident): Observable<Incident> {
        return this.http.put<Incident>(`${this.baseUrl}/${id}`, incident);
    }

    deleteIncident(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
