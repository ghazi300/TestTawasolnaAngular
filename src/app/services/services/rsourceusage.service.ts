import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  Equipment
} from "../../backoffice/community-engagement/fitness-dashboard/equipment-list/equipment-list.component";

@Injectable({
  providedIn: 'root'
})
export class RsourceusageService {

  private apiUrl = `${environment.apiUrl}/resource_usage`;

  constructor(private http: HttpClient) { }

  getAllResourceUsage(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
