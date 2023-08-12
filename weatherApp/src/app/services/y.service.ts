import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<weatherData> {
    return this.http.get<weatherData>(environment.weatherApiBasedUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }

}
