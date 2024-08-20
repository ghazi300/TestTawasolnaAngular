import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private apiUrl = 'http://localhost:8200/tawasalna-crisis/api/simulations';

  constructor(private http: HttpClient) {}

  getSimulations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSimulationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createSimulation(simulation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, simulation);
  }

  updateSimulation(id: string, simulation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, simulation);
  }

  deleteSimulation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
