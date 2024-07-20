import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  Equipment
} from "../../backoffice/community-engagement/fitness-dashboard/equipment-list/equipment-list.component";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private apiUrl = `${environment.apiUrl}/equipment`;

  constructor(private http: HttpClient) { }

  getAllEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiUrl);
  }

  addEquipment(equipment: Equipment): Observable<any> {
    return this.http.post(this.apiUrl, equipment,{responseType: 'text'});
  }

  deleteEquipment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
