import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI: string;
  appKey = '0434e7ca2bbefeca478d0db923718bc1';

  constructor(private httpClient: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?&APPID=${this.appKey}&units=metric&q=` ;
  }

  getweatyer(cityName: string, countryCode: string) {

    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
  }
}
