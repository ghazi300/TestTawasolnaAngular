import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {
  private geocodingApiUrl = 'https://api.tomtom.com/search/2/geocode';
  private trafficApiUrl = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json';
  private apiKey = environment.trafficApiKey;

  constructor(private http: HttpClient) { }

  getTrafficData(city: string): Observable<any> {
    return this.http.get<any>(`${this.geocodingApiUrl}/${encodeURIComponent(city)}.json?key=${this.apiKey}`).pipe(
      switchMap((geocodeData: any) => {
        if (geocodeData.results && geocodeData.results.length > 0) {
          const position = geocodeData.results[0].position;
          const { lat, lon } = position;
          return this.http.get<any>(`${this.trafficApiUrl}?point=${lat},${lon}&key=${this.apiKey}`);
        } else {
          throw new Error('City not found');
        }
      })
    );
  }
}
