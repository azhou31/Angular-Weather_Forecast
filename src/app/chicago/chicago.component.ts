import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './../weather-service.service';
import { CapitalizePipe } from "./../capitalize.pipe";

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
})
export class ChicagoComponent implements OnInit {
  chicago: string = "chicago";
  info: any = {humidity: "", description:"", temp:"", min:"", max:"",wind:""};
  constructor(private _weatherserviceservice: WeatherServiceService) { }

  ngOnInit() {
    console.log("wanted to get the weather!")
    this._weatherserviceservice.getWeather(this.chicago)
    .subscribe((response)=>{
      console.log(response);
      this.info.humidity = response.main.humidity ;
      this.info.temp = (Math.floor((response.main.temp-273.15)*9/5) + 32) + "\u00B0" + "F" ;      
      this.info.min = (Math.floor((response.main.temp_min-273.15)*9/5) + 32) + "\u00B0" + "F" ;      
      this.info.max = (Math.floor((response.main.temp_max-273.15)*9/5) + 32) + "\u00B0" + "F";      
      this.info.description = response.weather[0].description;
      this.info.wind = response.wind.speed;
      
    }, (error)=>{
      console.log(error);
})
  }
}
