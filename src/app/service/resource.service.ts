import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private apiUrl = `http://localhost:8200/tawasalna-crisis/resources`; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getResources(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  createResource(resource: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, resource);
  }
}
