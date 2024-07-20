import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class FitnessCenterUsageService {

  private apiUrl = `${environment.apiUrl}/fitness`;

  constructor(private http: HttpClient) { }

    getAllEquipmentUsageStats() {
      return this.http.get(`${this.apiUrl}/equipment-usage-stats`);

    }
}
