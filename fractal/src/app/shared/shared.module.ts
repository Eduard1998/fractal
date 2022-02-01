import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { WeatherService } from "./services/weather.service";
import { MainInfoComponent } from './components/main-info/main-info.component';
import { WeatherForecasterComponent } from './components/weather-forecaster/weather-forecaster.component';

@NgModule({
  declarations: [
    MainInfoComponent,
    WeatherForecasterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [MainInfoComponent, WeatherForecasterComponent],
  providers: [WeatherService],
  bootstrap: []
})
export class SharedModule { }
