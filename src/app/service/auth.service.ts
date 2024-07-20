import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventResponse} from "../services/models/event-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = 'http://localhost:9001/api/v1/event'; // Replace with your API base URL

  constructor(private http:HttpClient) { }
  getUserRole():string {
    return "admin";
  }




  getAllEvents()  {
    return this.http.get(`${this.baseUrl}`)

  }
}
