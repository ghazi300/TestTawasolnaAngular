import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:9002/Resident-Support-Services/sendEmail';

  constructor(private http: HttpClient) { }

  sendEventDetailsEmail(recipientEmail: string, eventDetails: any): Observable<any> {
    const payload = { recipientEmail, eventDetails };
    return this.http.post(this.apiUrl, payload);
  }
}
