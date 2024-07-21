import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Technicien {
  id: string | null;
  name: string;
  role: Role;
  contactInfo: string;
  yearsOfExperience: string;
  certification: string;
  status: string;
  assignedTaskId?: string[]; // Nouvelle propriété sous forme de tableau de chaînes de caractères
}


export enum Role {
  Electricien = 'Electricien',
  Other = 'Other',
  Plombier = 'Plombier',
  // Ajoutez d'autres rôles selon vos besoins
}



@Injectable({
  providedIn: 'root'
})
export class Technicienservice {

  private apiUrl = 'http://localhost:8097/tawasalna-pms/api'; // URL de base

  constructor(private http: HttpClient) { }


  getAllTechniciens(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(`${this.apiUrl}/techniciens/`);
  }

  createTechnicien(technicien: Technicien): Observable<Technicien> {
    return this.http.post<Technicien>(`${this.apiUrl}/techniciens/`, technicien);
  }

  updateTechnicien(id: string, technicien: Technicien): Observable<Technicien> {
    return this.http.put<Technicien>(`${this.apiUrl}/techniciens/${id}`, technicien);
  }

  deleteTechnicien(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/techniciens/${id}`);
  }
}
