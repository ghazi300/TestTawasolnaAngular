import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanUrgenceService {
  private apiUrl = 'http://localhost:8200/tawasalna-crisis/api/plans-urgence';

  constructor(private http: HttpClient) { }

  getPlans(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPlanById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPlan(plan: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, plan);
  }

  updatePlan(id: string, plan: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, plan);
  }

  deletePlan(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
