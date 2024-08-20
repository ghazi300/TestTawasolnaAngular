import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private geocodeUrl = 'https://nominatim.openstreetmap.org/search';

  constructor(private http: HttpClient) {}

  getCoordinates(address: string): Observable<any> {
    const url = `${this.geocodeUrl}?q=${encodeURIComponent(address)}&format=json&limit=1&addressdetails=1`;
    return this.http.get<any>(url);
  }
}
