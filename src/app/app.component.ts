import { Component } from '@angular/core';
import { MoveButtonComponent } from './move-button/move-button.component';
import { WeatherButtonComponent } from './weather-button/weather-button.component';
import { WeatherService } from './weather-button/weather.service';
import * as jsonPath from "jsonpath/jsonpath"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WeatherService ]
})
export class AppComponent {
  title = 'Location/Weather Demo';
  locationVertical: number = 0;
  locationHorizontal: number = 0;
  forecast: string;
  hoz: number = 0;

  temprature: number;
  preasure: number;
  minTemprature: number;
  maxTemprature: number;
  windSpeed: number;
  description: string;


  onMove(horizontal: number, vertical: number) {
    this.locationHorizontal = this.locationHorizontal + horizontal;
    this.locationVertical = this.locationVertical + vertical;
    console.log(`h:${horizontal} v:${vertical}`);
  }

  onHorizontalMove(horizontal: number) {
    this.locationHorizontal = (1*this.locationHorizontal) + (1*horizontal);
    console.log(`h:${this.locationHorizontal} v:${this.locationVertical}`);
  }
  onVerticalMove(vertical: number) {
    this.locationVertical = (1*this.locationVertical) + (1*vertical);
    console.log(`h:${this.locationHorizontal} v:${this.locationVertical}`);
  }

  onWeatherClicked(forecast: any)
  {
    // https://www.npmjs.com/package/jsonpath
    this.temprature = jsonPath.value(forecast, "$..temp");
    this.minTemprature = jsonPath.value(forecast, "$..temp_min");
    this.maxTemprature = jsonPath.value(forecast, "$..temp_max");
    this.description = jsonPath.value(forecast, "$..description");
    this.preasure = jsonPath.value(forecast, "$..pressure");
    this.windSpeed = jsonPath.value(forecast, "$..speed");
    
    console.log(`temp: ${this.temprature}`);
    this.forecast = JSON.stringify(forecast);
  }
}