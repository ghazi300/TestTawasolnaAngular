import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PatrolRoute} from "../backoffice/securityandsafety/patrol/patrol-route-list/patrol-route-list";

@Injectable({
    providedIn: 'root',
})
export class PatrolRouteService {
    private apiUrl = 'http://localhost:9004/patrol-routes'; // Replace with your actual backend URL

    constructor(private http: HttpClient) {}

    createPatrolRoute(route: PatrolRoute): Observable<PatrolRoute> {
        return this.http.post<PatrolRoute>(this.apiUrl, route);
    }

    getPatrolRouteById(id: string): Observable<PatrolRoute> {
        return this.http.get<PatrolRoute>(`${this.apiUrl}/${id}`);
    }

    getAllPatrolRoutes(): Observable<PatrolRoute[]> {
        return this.http.get<PatrolRoute[]>(this.apiUrl);
    }

    updatePatrolRoute(id: string, route: PatrolRoute): Observable<PatrolRoute> {
        return this.http.put<PatrolRoute>(`${this.apiUrl}/${id}`, route);
    }

    deletePatrolRoute(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
