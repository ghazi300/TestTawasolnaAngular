import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccessControlLogService {

    private baseUrl = 'http://localhost:9004/access-control-logs'; // Replace with your actual backend base URL

    constructor(private http: HttpClient) { }

    createAccessControlLog(log: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}`, log);
    }

    getAccessControlLogById(id: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    getAllAccessControlLogs(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}`);
    }

    updateAccessControlLog(id: string, log: any): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/${id}`, log);
    }

    deleteAccessControlLog(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
