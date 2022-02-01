import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from "../../inderfaces/weather";

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  @Input() weather: IWeather = {};
  @Input() city: string = '';
  @Input() wind: number = 0;
  @Input() temp: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
