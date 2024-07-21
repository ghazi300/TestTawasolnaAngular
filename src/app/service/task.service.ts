import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface MaintenanceTask {
  id: string | null;
  description: string;
  priority: Priority;
  createdAt: Date;
  comments: string;
  taskStatus: TaskStatus;
  assignedTaskId?: string | null; // Nouvelle propriété optionnelle

}

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}


export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8097/tawasalna-pms/api/maintenance-tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<MaintenanceTask[]> {
    return this.http.get<MaintenanceTask[]>(`${this.apiUrl}/`);
  }

  getTaskById(id: string): Observable<MaintenanceTask> {
    return this.http.get<MaintenanceTask>(`${this.apiUrl}/${id}`);
  }

  createTask(task: MaintenanceTask): Observable<MaintenanceTask> {
    return this.http.post<MaintenanceTask>(`${this.apiUrl}/`, task);
  }

  updateTask(id: string, task: MaintenanceTask): Observable<MaintenanceTask> {
    return this.http.put<MaintenanceTask>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
