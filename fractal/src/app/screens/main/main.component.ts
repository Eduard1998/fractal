import { Component, OnInit } from '@angular/core';

import { IWeather } from "../../shared/inderfaces/weather";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public weather: IWeather = {};
  public city: string = '';
  public wind: number = 0;
  public temp: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setWeather(event: any): void {
    this.weather = event.weather[0];
    this.wind = event.wind.speed;
    this.temp = event.main.temp;
    this.city = event.name;
  }
}
