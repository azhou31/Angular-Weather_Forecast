import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './../weather-service.service';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  city:string;
  info: any = {humidity: "", description:"", temp:"", min:"", max:"",wind:""};
  

  constructor(private _weatherserviceservice: WeatherServiceService) { }

  ngOnInit() { 
  }

  save(){

    console.log("wanted to get the weather!")
    this._weatherserviceservice.searchWeather(this.city)
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

    // let location= {
    //   city: this.city
    // };
    // localStorage.setItem(key:'location', JSON.stringify(location));

  }

  }
