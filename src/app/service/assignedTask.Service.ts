import { assertPlatform, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export interface Technicien {
  id: string | null;
  name: string;
  role: Role;
  contactInfo: string;
  yearsOfExperience: string;
  certification: string;
  status: string;
  assignedTaskId?: string[]; // Définir comme une liste de chaînes
}


export enum Role {
  ADMIN = 'Admin',
  Electricien = 'Electricien',
  SUPERVISOR = 'Supervisor',
  MANAGER = 'Manager',
  // Ajoutez d'autres rôles selon vos besoins
}


  export interface MaintenanceTask {
    id: string | null;
    description: string;
    type: string;
    status: string;
    priority: string;
    createdAt: Date;
    comments: string;
    assignedTaskId?: string | null; // Nouvelle propriété optionnelle

  }
  export interface AssignedTask {
    id: string | null;
    maintenanceTaskId: string;
    technicienId: string[];
    taskStatus: TaskStatus;
    dateDebut: Date;
    dateFin: Date;
    equipements: string[];
  }
  export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELED = 'CANCELED',
  }
  
@Injectable({
  providedIn: 'root',
})


export class AssignedTaskService {
  private apiUrl = 'http://localhost:8097/tawasalna-pms/api/assigned-tasks'; // URL de base

  constructor(private http: HttpClient) { }

  getAllAssignedTasks(): Observable<AssignedTask[]> {
    return this.http.get<AssignedTask[]>(`${this.apiUrl}/`);
  }

  getAssignedTaskById(id: string): Observable<AssignedTask> {
    return this.http.get<AssignedTask>(`${this.apiUrl}/${id}`);
  }

  createAssignedTask(assignedTask: AssignedTask): Observable<AssignedTask> {
    return this.http.post<AssignedTask>(`${this.apiUrl}/`, assignedTask);
  }

  updateAssignedTask(id: string, assignedTask: AssignedTask): Observable<AssignedTask> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<AssignedTask>(`${this.apiUrl}/${id}`, assignedTask, { headers });
  }

  deleteAssignedTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}