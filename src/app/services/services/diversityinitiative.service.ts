import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  Initiative
} from "../../backoffice/community-engagement/education/diversity-initiatives/diversity-initiatives.component";

@Injectable({
  providedIn: 'root'
})
export class DiversityinitiativeService {
  private apiUrl = `${environment.apiUrl}/diversity`;

  constructor(private http: HttpClient) { }

  getAllInitiatives(): Observable<Initiative[]> {
    return this.http.get<Initiative[]>(this.apiUrl);
  }

  addInitiative(initiative: any): Observable<any> {
    return this.http.post(this.apiUrl, initiative,{responseType: 'text'});
  }

  deleteInitiative(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
