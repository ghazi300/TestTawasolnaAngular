import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { TrafficService } from 'src/app/service/traffic.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {
  currentWeather: any = {};
  weatherIcon: string = '';
  weatherForecast: any[] = [];
  cityForm: FormGroup;
  trafficData: any = {}; // Add a property for traffic data

  constructor(
    public weatherService: WeatherService,
    private trafficService: TrafficService, // Inject traffic service
    private fb: FormBuilder
  ) {
    this.cityForm = this.fb.group({
      city: ['Paris']  // Default city
    });
  }

  ngOnInit(): void {
    this.getWeatherData();
    this.getTrafficData();
  }

  getWeatherData() {
    const city = this.cityForm.get('city')?.value;
    this.weatherService.getCurrentWeather(city).subscribe(data => {
      this.currentWeather = data;
      this.weatherIcon = this.weatherService.getWeatherIcon(data.weather[0].icon);
    });

    this.weatherService.getWeatherForecast(city).subscribe(data => {
      this.weatherForecast = data.list.filter((_: any, index: number) => index % 8 === 0); // Every 8th item (3-hour interval)
    });
  }

  getTrafficData() {
    const city = this.cityForm.get('city')?.value;
    this.trafficService.getTrafficData(city).subscribe(data => {
      this.trafficData = data;
      console.log(this.trafficData);  // Debug output to check the data
    }, error => {
      console.error('Error fetching traffic data:', error);
    });
  }

  onSubmit() {
    this.getWeatherData();
    this.getTrafficData(); // Also call method to get traffic data
  }
}
