import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'app-weather-forecaster',
  templateUrl: './weather-forecaster.component.html',
  styleUrls: ['./weather-forecaster.component.css']
})
export class WeatherForecasterComponent implements OnInit {
  public weatherForm: FormGroup = new FormGroup({
    cityName: new FormControl('', [Validators.required]),
  });
  @Output() weather = new EventEmitter();
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { cityName } = this.weatherForm.value;
    this.weatherService.getWeather(cityName).subscribe((res) => {
      this.weather.emit(res)
    })
  }
}
