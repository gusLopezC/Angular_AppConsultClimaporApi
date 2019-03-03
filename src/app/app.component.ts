import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;
  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {  }

  getweather(cityName: string , codeCountry: string) {
    this.weatherService.getweatyer(cityName, codeCountry)
    .subscribe(
      res => [
        console.log(res),
        this.weather = res],
      err => console.log(err)
    );
  }

  submitLocation(cityName: HTMLInputElement, codeCountry: HTMLInputElement) {
    if ( cityName.value && codeCountry.value) {
      this.getweather(cityName.value, codeCountry.value);
      cityName.value = '';
      codeCountry.value = '';
    } else {
      alert('Ingresa los datos');
    }
    cityName.focus();
    return false;
  }
}
