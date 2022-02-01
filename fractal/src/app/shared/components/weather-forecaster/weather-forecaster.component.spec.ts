import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecasterComponent } from './weather-forecaster.component';

describe('WeatherForecasterComponent', () => {
  let component: WeatherForecasterComponent;
  let fixture: ComponentFixture<WeatherForecasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
