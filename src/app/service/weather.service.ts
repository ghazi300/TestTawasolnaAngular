import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.weatherApiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/weather?q=${city}&units=metric&appid=${this.apiKey}`);
  }

  getWeatherForecast(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/forecast?q=${city}&units=metric&appid=${this.apiKey}`);
  }

  getWeatherIcon(iconCode: string): string {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
  }
}
