import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherServiceService {
  apiKey = '48cfb9fd41142babb8cbe9b0c8e7234f';
  url;

  constructor(private _http: Http) {
    this.url='http://api.openweathermap.org/data/2.5/weather?q=';
  }

  searchWeather(city){
    return this._http.get(this.url+city+'&&appid='+this.apiKey).map(Response=>Response.json());
  }

  getWeather(weatherObject){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+weatherObject+"&&appid=48cfb9fd41142babb8cbe9b0c8e7234f").map(Response=>Response.json());
}

}
