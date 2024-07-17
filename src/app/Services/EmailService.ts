import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = 'http://localhost:9002/Resident-Support-Services'; // Base URL de votre backend Spring Boot

  constructor(private http: HttpClient) { }

  sendEventDetailsEmail(recipientEmail: string, eventDetails: any) {
    const url = `${this.baseUrl}/sendEmail`; // Endpoint pour envoyer un e-mail dans votre backend

    return this.http.post(url, {
      recipientEmail: recipientEmail,
      eventDetails: eventDetails
    });
  }
}
