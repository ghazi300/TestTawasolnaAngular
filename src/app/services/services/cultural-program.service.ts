import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CulturalProgramService {
  private apiUrl = `${environment.apiUrl}/cultural`;


  constructor(private http: HttpClient) { }
  getPrograms(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  addProgram(program: any): Observable<any> {

    return this.http.post<any>(this.apiUrl, program)
  }
  deleteProgram(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
