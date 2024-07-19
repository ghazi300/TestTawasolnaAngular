import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Protocol} from "../backoffice/securityandsafety/protocols/protocols/protocols.component";

@Injectable({
    providedIn: 'root'
})
export class ProtocolService {
    private baseUrl = 'http://localhost:9004/protocols'; // Adjust the base URL as per your backend API

    constructor(private http: HttpClient) { }

    getAllProtocols(): Observable<Protocol[]> {
        return this.http.get<Protocol[]>(`${this.baseUrl}`);
    }

    getProtocolById(id: string): Observable<Protocol> {
        return this.http.get<Protocol>(`${this.baseUrl}/${id}`);
    }

    createProtocol(protocol: Protocol): Observable<Protocol> {
        return this.http.post<Protocol>(this.baseUrl, protocol);
    }

    updateProtocol(id: string, protocol: Protocol): Observable<Protocol> {
        return this.http.put<Protocol>(`${this.baseUrl}/${id}`, protocol);
    }

    deleteProtocol(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
